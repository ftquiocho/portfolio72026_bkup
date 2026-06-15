export const Hero = () => {
  return (
    // <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 min-h-[70vh] flex flex-col justify-center reveal" id="hero">
    <section className="max-w-7xl mx-auto px-6 md:px-12 min-h-[70vh] flex flex-col justify-center reveal active" id="hero">
      <div className="mb-10 flex items-center">
        <span className="relative inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 text-xs font-medium uppercase tracking-widest text-ink-muted shadow-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
          </span>
          Available for New Opportunities
        </span>
      </div>

      <h2 className="text-6xl md:text-8xl lg:text-9xl font-sans font-medium tracking-tight text-ink leading-none mb-8">
        Designing <span className="font-serif text-accent">Clarity</span> for Complex Systems.
      </h2>

      <p className="text-lg md:text-2xl font-sans text-ink-muted leading-relaxed max-w-3xl mb-6">
        Konnichiwa! I'm <span className="font-serif text-ink text-3xl md:text-5xl leading-none">Franchezca</span>, a Senior UI/UX Designer specializing in enterprise, maritime, and government platforms.
      </p>

      {/* Side by side row: specialties + CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-4">
        <p className="font-sans text-sm text-ink-muted uppercase tracking-wider">
          Enterprise Systems &nbsp;•&nbsp; Design-to-Code &nbsp;•&nbsp; Workflow Design
        </p>
        
        <button 
          onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} 
          className="group flex items-center gap-4 font-sans text-lg font-medium text-ink self-start sm:self-auto"
        >
          Explore the work
          <div className="w-12 h-12 rounded-full border border-ink flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-surface transition-all duration-300 ease-spring">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-y-1 transition-transform">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
};