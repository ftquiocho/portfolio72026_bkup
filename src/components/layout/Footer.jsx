export const Footer = () => {
  return (
    <footer className="border-t border-ink/10 bg-surface py-40 mt-32" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center reveal">
        <p className="font-sans text-sm font-medium uppercase tracking-widest text-ink-muted mb-6">Let's build better systems</p>
        
        {/* Make email clickable */}
        <a 
          href="mailto:iamftq@gmail.com"
          className="font-serif text-5xl md:text-6xl lg:text-[6rem] text-ink mb-12 hover:italic hover:text-accent transition-all duration-300 cursor-pointer inline-block"
        >
          iamftq@gmail.com
        </a>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-sans text-sm font-medium">
          {/* Replace # with your actual LinkedIn URL */}
          <a 
            href="https://linkedin.com/in/franchezca-q-a82b32251" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-ink-muted hover:text-accent transition-colors link-underline"
          >
            LinkedIn
          </a>
          {/* Replace with actual resume PDF path (place file in public folder) */}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-ink-muted hover:text-accent transition-colors link-underline"
          >
            Resume (PDF)
          </a>
          {/* Replace with your Read.cv URL
          <a 
            href="https://read.cv/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-ink-muted hover:text-accent transition-colors link-underline"
          >
            Read.cv
          </a> */}
        </div>
      </div>
    </footer>
  );
};