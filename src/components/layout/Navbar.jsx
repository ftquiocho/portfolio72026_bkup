import { useState } from 'react';

export const Navbar = () => {
  const [imageError, setImageError] = useState(false);
  
 const handleScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const navbarHeight = 80; // Approximate height of fixed navbar + top margin
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

  return (
    <nav className="fixed w-full z-40 top-6 px-6 pointer-events-none flex justify-center">
      <div className="bg-surface/80 backdrop-blur-md border border-border-light rounded-full px-6 py-3 flex items-center gap-8 shadow-sm pointer-events-auto transition-transform duration-300 hover:scale-[1.02]">
        {/* Logo container - clickable to scroll to hero */}
        <button 
          onClick={() => handleScroll('hero')}
          className="pr-4 border-r border-border-light focus:outline-none"
        >
          {!imageError ? (
            <img
              src="/logo.png"
              alt="Logo"
              className="w-8 h-8 rounded-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="font-serif italic text-2xl tracking-tight text-ink">
              FTQ<span className="text-accent not-italic">.</span>
            </span>
          )}
        </button>

        <div className="flex gap-6 font-sans text-sm font-medium text-ink-muted">
          <button onClick={() => handleScroll('work')} className="hover:text-ink transition-colors link-underline">Work</button>
          <button onClick={() => handleScroll('about')} className="hover:text-ink transition-colors link-underline">About</button>
        </div>
        <button onClick={() => handleScroll('contact')} className="px-4 py-2 bg-ink text-surface rounded-full text-sm font-medium hover:bg-accent transition-colors duration-300">
          Let's Talk
        </button>
      </div>
    </nav>
  );
};