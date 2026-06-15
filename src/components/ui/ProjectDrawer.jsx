import { useEffect } from 'react';
import { projectsData } from '../../data/projectsData';

export const ProjectDrawer = ({ isOpen, projectId, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !projectId) return null;

  const project = projectsData[projectId];
  if (!project) return null;

  return (
    <>
      <div 
        className={`fixed inset-0 bg-ink/20 backdrop-blur-sm z-[100] transition-all duration-500 ease-smooth ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />
      <div className={`fixed top-0 right-0 h-full w-full max-w-3xl bg-surface shadow-2xl z-[110] overflow-y-auto hide-scroll border-l border-border-light transition-transform duration-500 ease-smooth ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="sticky top-0 bg-surface/90 backdrop-blur-md px-6 md:px-8 py-6 border-b border-border-light flex justify-between items-center z-10">
          <span className="font-sans text-sm font-medium text-ink-muted uppercase tracking-widest">Case Study</span>
          <button onClick={onClose} className="w-10 h-10 rounded-full border border-border-light flex items-center justify-center text-ink hover:bg-bg-base transition-colors group focus:outline-none focus:ring-2 focus:ring-accent">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:rotate-90 transition-transform duration-300">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        
        <div className="p-6 md:p-12">
          <div className="mb-12">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">{project.context}</span>
            <h1 className="text-4xl md:text-5xl font-sans font-medium text-ink leading-tight mb-8">{project.title}</h1>
          </div>
          
          <div className="space-y-12 font-sans text-base text-ink-muted">
            <section>
              <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-3">1. Overview</h3>
              <p className="leading-relaxed border-l-2 border-accent/30 pl-4">{project.overview}</p>
            </section>
            
            <section>
              <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-3">2. System Problem</h3>
              <p className="leading-relaxed">{project.problem}</p>
            </section>
            
            <section>
              <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-3">3. Strategic Process</h3>
              <p className="leading-relaxed">{project.process}</p>
            </section>
            
            <section>
              <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-3">4. Structural Solution</h3>
              <p className="leading-relaxed">{project.solution}</p>
            </section>
            
            <section className="bg-bg-base p-6 border border-border-light rounded-xl mt-8 transition-colors hover:border-accent/40">
              <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-2 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ABAB5" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3"/>
                </svg>
                Measurable Impact
              </h3>
              <p className="leading-relaxed text-ink font-medium">{project.impact}</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};