export const AboutSection = () => {
  const highlights = [
    { year: '2016', text: 'Began career in visual design and brand identity' },
    { year: '2019', text: 'Transitioned to enterprise UX — ERP and maritime systems' },
    { year: '2021', text: 'Led design for government digital permitting platforms' },
    { year: '2023', text: 'Established scalable design systems for multi-team orgs' },
    { year: '2024+', text: 'UX Lead driving design-to-dev implementation workflows' }
  ];

  const capabilities = [
    { icon: '✦', title: 'Systems Architecture', desc: 'Designing scalable component libraries and documentation that engineering teams actually want to use.' },
    { icon: '✦', title: 'Complex Workflow Mapping', desc: 'Untangling legacy ERPs, multi-user permissions, and sprawling data tables into logical, linear paths.' },
    { icon: '✦', title: 'Frontend Translation', desc: 'Delivering prototypes that respect CSS constraints, design tokens, and existing tech stacks.' }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-40" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 className="font-sans font-medium text-4xl md:text-5xl text-ink mb-6 leading-tight">
            I design systems, <br /><span className="font-serif italic text-accent">not just screens.</span>
          </h2>
          <div className="space-y-5 text-ink-muted font-sans text-lg leading-relaxed">
            <p>
              With over 8 years in <span className="font-medium text-ink">UI/UX</span>, I've moved beyond visual design into the structural work of enterprise systems: mapping workflows, designing scalable component libraries, and bridging the gap between design intent and engineering delivery.
            </p>
            <p>
              My work spans maritime fleet management, government digital services, and academic ERP platforms. Environments where complexity is unavoidable and consistency is mission-critical.
            </p>
          </div>
          
          <div className="mt-10 border-l-4 border-accent pl-6 py-2 italic font-serif text-xl text-ink/80 bg-surface/30 rounded-r-2xl">
            “I don't design screens. I design systems and workflows.”
            <div className="font-sans text-xs font-medium text-ink-muted not-italic mt-2 tracking-wide">— Design Philosophy</div>
          </div>
        </div>
        
        <div className="lg:col-span-5">
          <div className="bg-surface border border-border-light rounded-3xl p-6 md:p-8 transition-all hover:border-accent/30 shadow-sm">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-ink-muted mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span> Career Highlights
            </h3>
            <div className="space-y-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start group transition-all">
                  <div className="min-w-[72px] font-mono text-accent font-bold text-base tracking-tight">{item.year}</div>
                  <div className="text-ink-muted text-sm leading-relaxed group-hover:text-ink transition-colors">{item.text}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-border-light/60">
              <span className="text-xs text-ink-muted/70 font-sans">8+ years · Enterprise focus</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-20">
        {capabilities.map((cap, idx) => (
          <div key={idx} className="bg-surface border border-border-light rounded-2xl p-6 group hover:border-accent/50 transition-all hover:-translate-y-1 hover:shadow-md">
            <span className="text-2xl mb-4 inline-block text-accent opacity-70 group-hover:opacity-100 transition">{cap.icon}</span>
            <h4 className="font-sans font-semibold text-lg text-ink mb-2">{cap.title}</h4>
            <p className="text-ink-muted text-sm leading-relaxed">{cap.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};