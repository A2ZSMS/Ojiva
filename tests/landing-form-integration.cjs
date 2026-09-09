// Run: node tests/landing-form-integration.cjs
// All outbound services are mocked. This never submits a real lead.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
function compile(file) {
  return ts.transpileModule(fs.readFileSync(path.join(root, file), 'utf8'), {
    fileName: 'component.jsx', compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
}
const qualityModule = { exports: {} };
vm.runInNewContext(compile('lib/leadQuality.js'), { exports: qualityModule.exports, module: qualityModule });
const componentCode = compile('components/landing/LandingLeadForm.js');
const valid = { name: 'Maya Rao', phone: '9876543210', email: 'MAYA@EXAMPLE.COM', company: 'Example Business', service: 'whatsapp-api', message: 'Please show us customer follow-up workflows.', agree: true };
function findForm(node) {
  if (!node || typeof node !== 'object') return null;
  if (node.type === 'form') return node;
  return [node.props?.children].flat(Infinity).map(findForm).find(Boolean);
}
async function submit({ email = valid.email, compact = true, fail = false, sms = false, rcs = false, website = false, smsService = 'transactional', volume = '5000-25000' } = {}) {
  const calls = [], updates = [];
  let stateIndex = 0;
  const react = { useEffect() {}, useId: () => 'test-form', useCallback: fn => fn, useRef: value => ({ current: value }),
    useState: initial => { const index = stateIndex++; return [initial && typeof initial === 'object' && 'email' in initial ? { ...valid, email, ...(sms || rcs || website ? { service: smsService } : {}) } : sms && index === 3 ? volume : initial, value => updates.push(value)]; } };
  const imports = {
    react,
    'next/navigation': { useRouter: () => ({ push: url => calls.push({ kind: 'redirect', url }) }) },
    '@/lib/formConfig': { WEB3_ACCESS_KEY: 'mock-key', MAKE_HOOK_LANDING: 'https://mock.invalid/make', THANK_YOU_LANDING: '/whatsapp-api-service/thank-you' },
    '@/lib/leadQuality': qualityModule.exports,
    '@/lib/attribution': { getAttribution: () => ({ utm_source: 'google', utm_medium: 'cpc', utm_campaign: 'wa-demo', gclid: 'mock-click', _first_landing_url: 'https://example.com/whatsapp-api-service/' }), fireOpenAiLeadCreated: () => calls.push({ kind: 'conversion' }) },
  };
  const componentModule = { exports: {} };
  vm.runInNewContext(componentCode, { exports: componentModule.exports, module: componentModule, require: name => imports[name] || require(name),
    console: { log() {}, warn() {}, error() {} }, AbortSignal,
    fetch: async (url, options) => {
      const kind = url.includes('telecrm') ? 'crm' : url.includes('web3forms') ? 'web3' : 'make';
      calls.push({ kind, payload: JSON.parse(options.body) });
      return { ok: !fail, json: async () => ({ success: !fail }), text: async () => 'mock' };
    },
  });
  const form = findForm(componentModule.exports.default({ compact, source: sms ? 'bulk-sms' : rcs ? 'rcs-messaging' : website ? 'website-development' : 'whatsapp-api-service', ...(rcs ? {thankYouUrl:'/thank-you'} : {}), ...(sms ? { thankYouUrl: '/thank-you', volumeOptions: [{value:'',label:'Select'},{value:'5000-25000',label:'5,000 – 25,000'}] } : {}) }));
  assert.ok(form, 'Submission handler must be reachable');
  await form.props.onSubmit({ preventDefault() {} });
  return { calls, updates };
}
(async () => {
  for (const compact of [true, false]) {
    for (const email of ['', 'invalid-email']) {
      const { calls } = await submit({ compact, email });
      assert.equal(calls.length, 0, 'Missing or invalid email must block every outbound integration');
    }
    const { calls } = await submit({ compact });
    for (const kind of ['crm', 'web3', 'make', 'conversion', 'redirect']) assert.equal(calls.filter(c => c.kind === kind).length, 1, `${kind} must remain connected`);
    const crm = calls.find(c => c.kind === 'crm').payload.fields;
    assert.equal(crm.email, 'maya@example.com');
    assert.equal(crm.utm_source, 'google');
    assert.equal(crm.gclid, 'mock-click');
    assert.equal(crm.source, 'whatsapp-api-service');
    for (const kind of ['web3', 'make']) {
      const payload = calls.find(c => c.kind === kind).payload;
      for (const key of ['name', 'phone', 'company', 'service', 'message']) assert.equal(payload[key], valid[key]);
      assert.equal(payload.email, 'maya@example.com');
      assert.equal(payload.source, 'whatsapp-api-service');
    }
    assert.equal(calls.find(c => c.kind === 'redirect').url, '/whatsapp-api-service/thank-you');
  }
  for (const compact of [true, false]) {
    for (const options of [{email:''}, {volume:''}]) assert.equal((await submit({sms:true,compact,...options})).calls.length,0,'SMS email and volume must block incomplete submissions');
    const { calls } = await submit({sms:true,compact});
    for (const kind of ['crm','web3','make','conversion','redirect']) assert.equal(calls.filter(c=>c.kind===kind).length,1);
    for (const kind of ['web3','make']) { const payload=calls.find(c=>c.kind===kind).payload; assert.equal(payload.monthly_volume,'5000-25000'); assert.equal(payload.email,'maya@example.com'); assert.equal(payload.source,'bulk-sms'); assert.equal(payload.service,'transactional'); }
    const fields=calls.find(c=>c.kind==='crm').payload.fields; assert.equal(fields.monthly_volume,'5000-25000'); assert.equal(fields.source,'bulk-sms'); assert.equal(fields.email,'maya@example.com');
    assert.equal(calls.find(c=>c.kind==='redirect').url,'/thank-you');
  }
  for (const smsService of ['promotional', 'transactional', 'service-explicit', 'otp', 'api', 'smpp', 'reseller-panel']) {
    const { calls } = await submit({sms: true, smsService});
    for (const kind of ['web3', 'make']) assert.equal(calls.find(c => c.kind === kind).payload.service, smsService);
    assert.equal(calls.find(c => c.kind === 'crm').payload.fields.service, smsService);
  }
  for (const smsService of ['rcs-bulk','rcs-chatbot','rcs-chatbot-combo','rcs-api','other']) {
    assert.equal((await submit({rcs:true,smsService,email:''})).calls.length,0);
    const {calls} = await submit({rcs:true,smsService});
    for (const kind of ['web3','make']) {
      const payload = calls.find(c=>c.kind===kind).payload;
      assert.equal(payload.service,smsService); assert.equal(payload.source,'rcs-messaging'); assert.equal(payload.email,'maya@example.com');
    }
    assert.equal(calls.find(c=>c.kind==='crm').payload.fields.source,'rcs-messaging');
    assert.equal(calls.find(c=>c.kind==='redirect').url,'/thank-you');
  }
  for (const websiteService of ['new-website','website-redesign','landing-page','ecommerce-website','web-application','other']) {
    assert.equal((await submit({website:true, smsService:websiteService, email:''})).calls.length,0);
    const {calls} = await submit({website:true, smsService:websiteService});
    for (const kind of ['web3','make']) {
      const payload = calls.find(c=>c.kind===kind).payload;
      assert.equal(payload.service,websiteService); assert.equal(payload.source,'website-development'); assert.equal(payload.email,'maya@example.com');
    }
    assert.equal(calls.find(c=>c.kind==='crm').payload.fields.source,'website-development');
    assert.equal(calls.find(c=>c.kind==='crm').payload.fields.service,websiteService);
    assert.equal(calls.find(c=>c.kind==='redirect').url,'/whatsapp-api-service/thank-you');
  }
  const failed = await submit({ fail: true });
  assert.equal(failed.calls.filter(c => c.kind === 'redirect' || c.kind === 'conversion').length, 0, 'Failed compact submission must not claim success');
  assert.ok(failed.updates.includes('Something went wrong. Please try again or call us.'));
  console.log('PASS: required email and SMS volume, valid WhatsApp/SMS/RCS/website payloads, all 4 integrations, attribution, redirect, conversion and failure handling. All network calls mocked.');
})().catch(error => { console.error(error.message); process.exitCode = 1; });
