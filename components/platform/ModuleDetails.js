import { FadeUp } from '@/components/ui/Animations';
import { MODULES } from './data';

export default function ModuleDetails() {
  return (
    <section className="section-padding" aria-labelledby="modules-list-heading">
      <div className="container">
        <h2 className="visually-hidden" id="modules-list-heading">Platform modules</h2>
        {MODULES.map((mod, index) => (
          <FadeUp key={mod.id} delay={index * 0.05}>
          <div
            id={mod.id}
            className={`platform-module-v2 ${index === MODULES.length - 1 ? 'mb-0' : ''}`}
          >
            <div className="platform-module-num">{String(index + 1).padStart(2, '0')}</div>
            <div className="row align-items-start g-4">
              <div className="col-12 col-lg-5">
                <div className="platform-module-v2-icon" style={{ background: mod.iconColor }} aria-hidden="true">{mod.icon}</div>
                <h2 className="platform-module-v2-title">{mod.title}</h2>
                <p className="platform-module-v2-desc">{mod.description}</p>
              </div>
              <div className="col-12 col-lg-7">
                <p className="platform-caps-label">Capabilities</p>
                <div className="platform-caps-grid">
                  {mod.capabilities.map((cap) => (
                    <span className="platform-cap-chip" style={{ '--chip-dot': mod.iconColorDot }} key={cap}>{cap}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
