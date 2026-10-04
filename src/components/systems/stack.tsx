import { skills } from '@/data/profile';
import { SectionHeading } from '@/components/ui/section-heading';
export function Stack() {
  return (
    <section id="stack" className="section stack-section">
      <SectionHeading
        number="04"
        label="TECHNICAL STACK / BY RESPONSIBILITY"
        title={
          <>
            The right tool.
            <br />
            <span className="muted">For the right layer.</span>
          </>
        }
        description="Résumé skills and documented project technologies, organized by the work they do."
      />
      <div className="stack-table">
        {skills.map((group, i) => (
          <div className="stack-row reveal" key={group.name}>
            <div>
              <span className="mono muted">0{i + 1}</span>
              <h3>{group.name}</h3>
              <span className="stack-source">{group.source}</span>
            </div>
            <ul>
              {group.items.map((item) => (
                <li key={item}>
                  {item}
                  <span aria-hidden="true">↗</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
