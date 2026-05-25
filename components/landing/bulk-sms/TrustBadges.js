/* Real client brand logos — hot-linked from SendGun's public CDN */
const CLIENT_LOGOS = [
  { name: '99acres',       src: 'https://res.cloudinary.com/dgyb9gbwi/images/w_190,h_130,c_scale/f_auto,q_auto/v1743833989/99acres/99acres.png' },
  { name: 'Dream11',       src: 'https://res.cloudinary.com/dgyb9gbwi/images/w_190,h_130,c_scale/f_auto,q_auto/v1743833992/dream11/dream11.png' },
  { name: 'HDFC Bank',     src: 'https://res.cloudinary.com/dgyb9gbwi/images/w_190,h_130,c_scale/f_auto,q_auto/v1743834029/hdfc-bank/hdfc-bank.png' },
  { name: 'ICICI',         src: 'https://res.cloudinary.com/dgyb9gbwi/images/w_190,h_130,c_scale/f_auto,q_auto/v1743834026/icici/icici.png' },
  { name: 'Indeed',        src: 'https://res.cloudinary.com/dgyb9gbwi/images/w_190,h_130,c_scale/f_auto,q_auto/v1743833995/indeed/indeed.png' },
  { name: 'IndianOil',     src: 'https://res.cloudinary.com/dgyb9gbwi/images/w_190,h_130,c_scale/f_auto,q_auto/v1743834017/indianoil/indianoil.png' },
  { name: 'ixigo',         src: 'https://res.cloudinary.com/dgyb9gbwi/images/w_190,h_130,c_scale/f_auto,q_auto/v1743834021/ixigo/ixigo.png' },
  { name: 'MakeMyTrip',    src: 'https://res.cloudinary.com/dgyb9gbwi/images/w_190,h_130,c_scale/f_auto,q_auto/v1743833998/makemytrip/makemytrip.png' },
  { name: 'OLX',           src: 'https://res.cloudinary.com/dgyb9gbwi/images/w_190,h_130,c_scale/f_auto,q_auto/v1743834014/olx/olx.png' },
  { name: 'SBI',           src: 'https://res.cloudinary.com/dgyb9gbwi/images/w_190,h_130,c_scale/f_auto,q_auto/v1743834011/sbi/sbi.png' },
  { name: 'Unacademy',     src: 'https://res.cloudinary.com/dgyb9gbwi/images/w_190,h_130,c_scale/f_auto,q_auto/v1743834008/unacademy/unacademy.png' },
  { name: 'Xiaomi',        src: 'https://res.cloudinary.com/dgyb9gbwi/images/w_190,h_130,c_scale/f_auto,q_auto/v1743834005/xiaomi/xiaomi.png' },
  { name: 'Bada Business', src: 'https://res.cloudinary.com/dgyb9gbwi/images/w_190,h_130,c_scale/f_auto,q_auto/v1743834052/bada-business/bada-business.png' },
];

/* Telecom + infra trust logos */
const TELECOM_LOGOS = [
  { name: 'Jio',           src: 'https://res.cloudinary.com/dgyb9gbwi/images/w_200,h_200,c_fill,g_auto/f_auto,q_auto/v1743761978/jio/jio.png' },
  { name: 'Airtel',        src: 'https://res.cloudinary.com/dgyb9gbwi/images/w_200,h_200,c_fill,g_auto/f_auto,q_auto/v1743761991/airtel/airtel.png' },
  { name: 'Vi',            src: 'https://res.cloudinary.com/dgyb9gbwi/images/w_200,h_200,c_fill,g_auto/f_auto,q_auto/v1743761970/vi/vi.png' },
  { name: 'TRAI',          src: 'https://res.cloudinary.com/dgyb9gbwi/images/w_200,h_200,c_fill,g_auto/f_auto,q_auto/v1743761966/trai/trai.png' },
  { name: 'Meta',          src: 'https://res.cloudinary.com/dgyb9gbwi/images/w_200,h_200,c_fill,g_auto/f_auto,q_auto/v1743761726/meta/meta.png' },
  { name: 'AWS',           src: 'https://res.cloudinary.com/dgyb9gbwi/images/w_200,h_200,c_fill,g_auto/f_auto,q_auto/v1743761988/aws/aws.png' },
];

export default function TrustBadges() {
  return (
    <section style={{ background: '#ffffff', padding: '70px 0' }}>
      <div className="container">

        {/* ── Heading ── */}
        <div className="text-center" style={{ marginBottom: '2.5rem' }}>
          <p
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#1B48E0',
              marginBottom: '0.75rem',
            }}
          >
            TRUSTED BY INDIA'S TOP BRANDS
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '0.5rem',
            }}
          >
            500+ Businesses Choose Ojiva AI for Bulk SMS
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#64748b', maxWidth: '640px', margin: '0 auto' }}>
            From banks to e-commerce giants — leading Indian brands trust us for high-volume,
            DLT-compliant SMS delivery.
          </p>
        </div>

        {/* ── Client logos grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '0.75rem',
            marginBottom: '2.5rem',
          }}
        >
          {CLIENT_LOGOS.map(({ name, src }) => (
            <div
              key={name}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
                background: '#f8fafc',
                border: '1px solid rgba(148,163,184,0.18)',
                borderRadius: '12px',
                minHeight: '90px',
                transition: 'all 0.18s ease',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${name} — Ojiva AI bulk SMS client`}
                loading="lazy"
                style={{
                  maxWidth: '100%',
                  maxHeight: '60px',
                  objectFit: 'contain',
                  filter: 'grayscale(40%)',
                  opacity: 0.85,
                }}
              />
            </div>
          ))}
        </div>

        {/* ── Telecom + Infra row ── */}
        <div
          style={{
            background: '#f4f7ff',
            border: '1px solid rgba(148,163,184,0.18)',
            borderRadius: '16px',
            padding: '1.5rem 1.25rem',
          }}
        >
          <p
            style={{
              textAlign: 'center',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#64748b',
              marginBottom: '1.25rem',
            }}
          >
            Powered by India's leading telecom &amp; cloud partners
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            {TELECOM_LOGOS.map(({ name, src }) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${name} partner logo`}
                  loading="lazy"
                  style={{
                    width: '64px',
                    height: '64px',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    background: '#ffffff',
                    padding: '0.4rem',
                    boxShadow: '0 2px 8px rgba(15,23,42,0.06)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
