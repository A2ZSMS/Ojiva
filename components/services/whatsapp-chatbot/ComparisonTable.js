'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import { FadeUp, ScalePop } from '@/components/ui/Animations';
import { COMPARISON } from './data';

export default function ComparisonTable() {
  return (
    <section className="py-5" aria-labelledby="cb-compare">
      <div className="container">
        <FadeUp>
          <div className="text-center mb-5">
            <SectionHeading tag="Why Automate" title="Chatbot vs. Manual Support" subtitle="The numbers speak for themselves." center />
          </div>
        </FadeUp>
        <ScalePop>
          <div className="chatbot-compare-table-wrap">
            <table className="chatbot-compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th><span className="compare-th-badge compare-th-badge--bot">🤖 AI Chatbot</span></th>
                  <th><span className="compare-th-badge compare-th-badge--manual">👤 Manual</span></th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(({ feature, chatbot, manual, winner }) => (
                  <tr key={feature}>
                    <td className="compare-feature-name">{feature}</td>
                    <td className={winner === 'bot' ? 'compare-winner' : ''}>{chatbot} {winner === 'bot' && '✅'}</td>
                    <td className={winner === 'human' ? 'compare-winner' : ''}>{manual} {winner === 'human' && '✅'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScalePop>
      </div>
    </section>
  );
}
