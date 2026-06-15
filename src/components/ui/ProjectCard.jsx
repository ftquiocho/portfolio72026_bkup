export const ProjectCard = ({ project, onClick }) => {
  const getWireframeContent = () => {
    // Specific wireframes for original projects (fallback when no image)
    if (project.id === 'maritime') {
      return (
        <div className="w-16 h-16 border-2 border-ink rounded-full relative group-hover:border-accent transition-colors duration-500">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-ink group-hover:bg-accent transition-colors duration-500 transform rotate-45"></div>
          </div>
        </div>
      );
    } else if (project.id === 'erp') {
      return (
        <div className="grid grid-cols-2 gap-1 w-16 h-16">
          <div className="border-2 border-ink rounded-tl-lg group-hover:border-accent transition-colors duration-500"></div>
          <div className="border-2 border-ink group-hover:bg-accent group-hover:border-accent transition-colors duration-500"></div>
          <div className="border-2 border-ink group-hover:border-accent transition-colors duration-500"></div>
          <div className="border-2 border-ink rounded-br-lg group-hover:border-accent transition-colors duration-500"></div>
        </div>
      );
    } else if (project.id === 'gov') {
      return (
        <div className="flex gap-1 items-end h-16">
          <div className="w-4 h-5 border-2 border-ink rounded-sm group-hover:border-accent transition-all duration-300"></div>
          <div className="w-4 h-10 border-2 border-ink rounded-sm group-hover:border-accent transition-all duration-300 delay-75"></div>
          <div className="w-4 h-16 border-2 border-ink rounded-sm group-hover:bg-accent group-hover:border-accent transition-all duration-300 delay-150"></div>
        </div>
      );
    }
    // Default wireframe for all other projects (when no image and not matched)
    return (
      <div className="w-16 h-16 border-2 border-dashed border-ink rounded-lg group-hover:border-accent group-hover:border-solid transition-all duration-300 flex items-center justify-center text-2xl text-ink-muted group-hover:text-accent">
        ✦
      </div>
    );
  };

  return (
    <div 
      className="group cursor-pointer bg-surface border border-border-light p-4 rounded-xl reveal transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-md flex flex-col h-full"
      onClick={() => onClick(project.id)}
    >
      {/* Image or fallback wireframe */}
      <div className="aspect-[4/3] rounded-lg mb-3 overflow-hidden bg-bg-base">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full wireframe-box flex items-center justify-center">
            {getWireframeContent()}
          </div>
        )}
      </div>
      
      <div className="flex flex-col gap-1 flex-grow">
        <div className="flex flex-wrap gap-1 mb-1">
          {project.tags.slice(0, 2).map((tag, i) => (
            <span key={i} className="px-1.5 py-0.5 border border-border-light rounded text-[9px] font-sans font-medium uppercase tracking-wider text-ink-muted">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-sans font-medium text-base md:text-lg text-ink leading-tight">{project.title}</h3>
        <p className="font-sans text-ink-muted text-xs leading-relaxed line-clamp-2">{project.shortDesc}</p>
      </div>
      <div className="mt-2 text-right text-ink-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-300">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 17L17 7M17 7H7M17 7V17"/>
        </svg>
      </div>
    </div>
  );
};