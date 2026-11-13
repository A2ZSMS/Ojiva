import ServiceLeadForm from '@/components/ui/ServiceLeadForm';

export default function FinalCta() {
  return (
    <ServiceLeadForm
      source="otp-service"
      eyebrow="OTP & TRANSACTIONAL SMS"
      heading="Secure Your Users With Instant OTP"
      headingHighlight="Instant OTP"
      description="Sub-3-second delivery. 99.9% success rate. DLT compliant. Trusted by banks, fintechs, and e-commerce platforms across India."
      perks={[
        'Sub-3 second OTP delivery across all operators',
        '99.9% uptime SLA with multi-operator fallback',
        '100% DLT compliant & TRAI registered',
        'SMS, WhatsApp & Voice OTP from one platform',
        'Free demo — go live the same day',
      ]}
      stats={[{ val: '<3s', lbl: 'OTP Delivery' }, { val: '99.9%', lbl: 'Success Rate' }, { val: 'Same Day', lbl: 'Go-Live' }]}
      formTitle="Get Started with OTP"
      formSubtitle="Go live the same day. No credit card required."
      formBadge="DLT Compliant · 99.9% SLA · No lock-in"
      submitLabel="Get Started Free →"
    />
  );
}
