/**
 * Industry data for /solutions/education.
 *
 * Schema mirrors the shared IndustryPageLayout expectations. To add a new
 * field, update the layout and update each industry data file.
 *
 * Keep copy generic — no fake metrics, customer names or unverified claims.
 */

const industryData = {
    slug: 'education',
    name: 'Education & EdTech',
    shortName: 'Education',
    icon: 'bi-mortarboard-fill',
    color: '#7C3AED',
    eyebrow: 'Education & EdTech Communication',
    headline: 'WhatsApp & SMS Platform for Schools, Colleges & EdTech Platforms in India',
    subtitle:
      'Send admission updates, automate fee reminders, share exam results and enable parent–teacher communication — via WhatsApp Business API and Bulk SMS for Indian education institutions.',
    intro:
      'Indian education runs on parent communication. Schools, colleges, coaching institutes, online edtech platforms and tuition centres have to keep parents and learners in the loop on admission, fees, attendance, exams, results and day-to-day school logistics. Email open rates from parents are notoriously low; WhatsApp and SMS are where messages actually get read. Ojiva AI gives education institutions a single platform for every parent / learner touchpoint — fee reminders, attendance alerts, exam results, admission counselling, parent-teacher meeting invitations and bus / transport notifications. Templates are DLT-registered, parental consent is captured at enrolment, and per-language support handles the linguistic diversity of Indian schools and colleges.',

    painPoints: [
      { title: 'Reaching parents reliably with high-stakes updates', body: 'Email gets ignored. Phone calls get screened. WhatsApp and SMS land. The channel mix has to match where parents actually engage, especially for time-sensitive updates like attendance alerts or unscheduled school closures.' },
      { title: 'High-volume admission cycles that need scale',       body: 'Admission season runs counselling, document collection, fee payment and slot allocation — all in the same few weeks. Manual call-centre follow-up doesn\'t scale; automated WhatsApp + SMS journeys do.' },
      { title: 'Fragmented systems across LMS, ERP, fee gateway',     body: 'A typical institute runs a school ERP, a learning platform, a fee-management gateway and an exam portal — each with its own notification preferences. A unified messaging layer that integrates with all of them is rare.' },
    ],

    channelFit: [
      { channel: 'sms',      label: 'Bulk SMS',      use: 'Fee reminders, exam notifications & attendance alerts via Bulk SMS', body: 'Workhorse for parent communication — fee due, fee received, attendance below threshold, exam date confirmation, result publication. DLT-registered templates land reliably across operators.' },
      { channel: 'whatsapp', label: 'WhatsApp API',  use: 'Admission counselling, parent updates & fee collection on WhatsApp',          body: 'WhatsApp handles the richer flows — admission counselling, document collection, parent-teacher chat, study material delivery and result-portal links. Two-way conversation makes it the right channel for anything beyond a notification.' },
      { channel: 'rcs',      label: 'RCS Messaging', use: 'Rich result cards, event invitations & branded school communication via RCS',              body: 'For enrolment campaigns and event invitations, RCS adds the institute brand, verified sender mark and rich card layout on supported Android devices — useful for premium / international school marketing.' },
      { channel: 'voice',    label: 'Voice Call',    use: 'Parent call campaigns, exam day reminders & result announcement IVR',     body: 'Automated voice broadcasts for unscheduled closures, weather alerts, parent-teacher meeting invites and bus-route changes. Reaches parents who don\'t engage with text channels.' },
    ],

    useCases: [
      { title: 'Admission journey',                  body: 'From enquiry to fee payment, automate the full applicant funnel — enquiry acknowledgement, counsellor follow-up, document collection, slot booking, fee receipt — using WhatsApp + SMS touchpoints.' },
      { title: 'Fee & attendance alerts',            body: 'Trigger SMS or WhatsApp the same day a fee instalment is due or a student is marked absent. Let parents pay or respond directly from the message.' },
      { title: 'Exam & result publishing',           body: 'Bulk-publish results to thousands of students and parents the moment they\'re ready, with a secure result-portal link. Handle dispatch in minutes, not days.' },
      { title: 'Parent–teacher engagement',           body: 'Two-way WhatsApp threads for class teachers, with safe templates and audit trail. Parents reach the right teacher; teachers reach the right parent group.' },
      { title: 'Bus / transport notifications',       body: 'Same-day "bus delayed by 15 minutes" or "route changed" notifications go out over SMS and voice — particularly important for younger students and concerned parents.' },
      { title: 'Re-engagement of inactive learners',   body: 'For online edtech and coaching, a weekly nudge for learners who haven\'t logged in keeps engagement up. Course-completion celebration messages drive next-course enrolment.' },
    ],

    outcomes: [
      { label: 'Faster fee collection cycles',           body: 'Multi-touch fee reminders across SMS and WhatsApp shorten the average time from due-date to payment.' },
      { label: 'Higher admission funnel conversion',     body: 'Automated counselling drips keep enquiries warm without burning counsellor capacity.' },
      { label: 'Reduced front-office call volume',        body: 'Routine queries — fee status, attendance, schedule, transport — move from phone calls to instant WhatsApp self-service.' },
      { label: 'Better parent satisfaction scores',       body: 'Parents prefer the institutes that proactively keep them informed. The messaging layer is part of the school\'s service standard.' },
      { label: 'Improved learner retention in edtech',     body: 'Scheduled engagement nudges and milestone celebrations reduce drop-off in self-paced courses.' },
    ],

    bestPractices: [
      { title: 'Send fee reminders before due, not after',   body: 'A reminder 7 days before due, again 2 days before, and on the day, keeps payment cycles healthy. After-due-date reminders are recovery, not collection.' },
      { title: 'Localise critical messages to parent language', body: 'Fee, attendance and emergency messages should go in the language the parent reads. Bilingual where needed.' },
      { title: 'Group parents by class for two-way chat',      body: 'A class WhatsApp group has its own dynamics. Per-class WhatsApp Business sender, with the class teacher as primary responder, scales better than one giant group.' },
      { title: 'Differentiate transactional vs marketing',     body: 'Admission marketing uses one sender ID and template category. Fee / attendance / result notifications use another. Don\'t mix them — the deliverability impact is real.' },
      { title: 'Confirm receipt of high-stakes updates',       body: 'For results, exam dates and unscheduled closures, ask parents to acknowledge with a tap. Confirms reach, surfaces parents whose number changed.' },
    ],

    implementation: [
      { title: 'Connect to your school ERP',     body: 'A REST API and webhooks support most common school ERPs and fee-management systems. Connector specifics for Indian-market platforms can be confirmed with sales.' },
      { title: 'Multi-language template library', body: 'Templates can be approved in major Indian languages once and reused. Per-student language preference triggers the right variant automatically.' },
      { title: 'Per-class / per-batch segmentation', body: 'Push class, section, batch, course and roll number into the platform. Use them as audience filters for targeted messaging.' },
      { title: 'Sandbox for the academic calendar', body: 'A sandbox lets the IT / academic team rehearse end-of-term result publishing or admission-cycle journeys before going live with the real student set.' },
    ],

    complianceNotes:
      'DLT-registered transactional templates, parental consent capture, and opt-out workflows that respect Indian data-protection norms.',
    complianceDetail:
      'Education communication is regulated by TRAI DLT for SMS, by WhatsApp Business policy for WhatsApp, and increasingly by the DPDP Act for handling of student / parent personal data. Ojiva AI handles each: DLT registration covers transactional and promotional templates separately; WhatsApp Business templates are approved through the standard Meta review; per-student / per-parent consent is captured at enrolment and tracked at the platform level so opt-outs are honoured. For institutions with younger learners, parental consent flows can be built into the enrolment journey itself.',

    faqs: [
      { q: 'Can we send messages to parents and students from one platform?',  a: 'Yes — segments and template-level personalisation handle parent vs. student copy from the same campaign. Per-recipient relationship (mother / father / student / guardian) can be a segment field.' },
      { q: 'Does it integrate with our school ERP?',                            a: 'A REST API and webhooks support most common ERPs and fee-management systems. Specific connector readiness for popular Indian-market school software can be confirmed with our team.' },
      { q: 'Can we automate admission counselling on WhatsApp?',                a: 'Yes — WhatsApp Business API supports two-way conversations, FAQ bots, document collection and human-agent handoff for warm leads. Common admission flows are templated.' },
      { q: 'How do we handle bounced or undeliverable messages?',                a: 'Delivery status is reported per message; failed records can be retried automatically on a fallback channel or flagged for manual follow-up by the admin team.' },
      { q: 'Can we send messages in regional languages?',                        a: 'Yes — Unicode SMS supports major Indian scripts; WhatsApp and RCS templates can be approved in multiple languages once and reused per-recipient based on the language preference on file.' },
      { q: 'How do bus / transport notifications work?',                         a: 'Per-route segments make it easy to message only the affected parents when a bus is delayed or rerouted. SMS goes first, voice fallback for urgent cases.' },
      { q: 'Can we run separate campaigns per branch?',                         a: 'Yes — multi-branch / multi-campus institutes can have per-branch sender IDs, per-branch templates and per-branch user accounts, all under one parent organisation.' },
      { q: 'How are exam results published at scale?',                          a: 'Bulk-publish through the API with a secure portal link per student. Templates support dynamic variables (name, roll number, exam) so every message is personalised.' },
    ],
  };

export default industryData;
