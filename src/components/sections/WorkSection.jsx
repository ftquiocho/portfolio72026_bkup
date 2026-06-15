import { featuredProjects } from "../../data/projectsData";
import { ProjectCard } from "../ui/ProjectCard";

const getWireframeForProject = (projectId) => {
  if (projectId === "maritime") {
    return (
      <div className="w-24 h-24 border-2 border-ink rounded-full relative group-hover:border-accent transition-colors duration-500">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-px bg-ink group-hover:bg-accent transition-colors duration-500 transform rotate-45"></div>
        </div>
      </div>
    );
  } else if (projectId === "erp") {
    return (
      <div className="grid grid-cols-2 gap-2 w-24 h-24">
        <div className="border-2 border-ink rounded-tl-xl group-hover:border-accent transition-colors duration-500"></div>
        <div className="border-2 border-ink group-hover:bg-accent group-hover:border-accent transition-colors duration-500"></div>
        <div className="border-2 border-ink group-hover:border-accent transition-colors duration-500"></div>
        <div className="border-2 border-ink rounded-br-xl group-hover:border-accent transition-colors duration-500"></div>
      </div>
    );
  } else if (projectId === "gov") {
    return (
      <div className="flex gap-2 items-end h-24">
        <div className="w-6 h-8 border-2 border-ink rounded-sm group-hover:border-accent transition-all duration-300"></div>
        <div className="w-6 h-16 border-2 border-ink rounded-sm group-hover:border-accent transition-all duration-300 delay-75"></div>
        <div className="w-6 h-24 border-2 border-ink rounded-sm group-hover:bg-accent group-hover:border-accent transition-all duration-300 delay-150"></div>
      </div>
    );
  }
  return (
    <div className="w-24 h-24 border-2 border-dashed border-ink rounded-xl flex items-center justify-center text-3xl text-ink-muted">
      ✦
    </div>
  );
};

export const WorkSection = ({ onOpenProject }) => {
  // Helper to always show maritime + first 4 normal cards
  const getInitialProjects = () => {
    const wideProject = featuredProjects.find((p) => p.isWide === true);
    const normalProjects = featuredProjects.filter((p) => !p.isWide);
    const firstFourNormals = normalProjects.slice(0, 4);
    return wideProject ? [wideProject, ...firstFourNormals] : firstFourNormals;
  };

  const initialProjects = getInitialProjects();

  return (
    <section className="max-w-7xl mx-auto px-8 md:px-16 py-32" id="work">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-ink/10 pb-6 mb-12 gap-4 reveal">
        <h2 className="font-sans font-medium text-4xl md:text-5xl text-ink">
          Selected Cases
        </h2>
        {/* <span className="font-sans text-sm text-ink-muted">
          [ 2021 — 2024 ]
        </span> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
        {initialProjects.map((project) => {
          if (project.isWide) {
            return (
              <div key={project.id} className="md:col-span-4">
                <div
                  className="group cursor-pointer bg-surface border border-border-light p-4 md:p-6 rounded-2xl reveal transition-all duration-500 hover:-translate-y-1 hover:border-accent hover:shadow-lg"
                  onClick={() => onOpenProject(project.id)}
                >
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-full md:w-2/5 aspect-[4/3] rounded-xl overflow-hidden bg-bg-base">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full wireframe-box flex items-center justify-center">
                          {getWireframeForProject(project.id)}
                        </div>
                      )}
                    </div>
                    <div className="w-full md:w-3/5">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 border border-border-light rounded-md text-[10px] font-sans font-medium uppercase tracking-wider text-ink-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-sans font-medium text-2xl md:text-3xl text-ink mb-2">
                        {project.title}
                      </h3>
                      <p className="font-sans text-ink-muted text-sm leading-relaxed mb-4">
                        {project.shortDesc}
                      </p>
                      <span className="font-sans text-xs font-medium link-underline text-ink inline-flex items-center gap-1 group-hover:text-accent">
                        Read Case Study →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={(id) => {
                console.log("Opening project:", id);
                onOpenProject(id);
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

// export const WorkSection = ({ onOpenProject }) => {
//   return (
//     <section className="max-w-7xl mx-auto px-8 md:px-16 py-32" id="work">
//       <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-ink/10 pb-6 mb-12 gap-4 reveal">
//         <h2 className="font-sans font-medium text-4xl md:text-5xl text-ink">Selected Cases</h2>
//         <span className="font-sans text-sm text-ink-muted">[ 2021 — 2024 ]</span>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
//         {featuredProjects.map((project) => {
//           if (project.isWide) {
//             return (
//               <div key={project.id} className="md:col-span-4">
//                 <div
//                   className="group cursor-pointer bg-surface border border-border-light p-4 md:p-6 rounded-2xl reveal transition-all duration-500 hover:-translate-y-1 hover:border-accent hover:shadow-lg"
//                   onClick={() => onOpenProject(project.id)}
//                 >
//                   <div className="flex flex-col md:flex-row gap-6 items-center">
//                     <div className="w-full md:w-2/5 aspect-[4/3] rounded-xl wireframe-box flex items-center justify-center overflow-hidden">
//                       {getWireframeForProject(project.id)}
//                     </div>
//                     <div className="w-full md:w-3/5">
//                       <div className="flex flex-wrap gap-2 mb-2">
//                         {project.tags.map((tag, i) => (
//                           <span key={i} className="px-2 py-0.5 border border-border-light rounded-md text-[10px] font-sans font-medium uppercase tracking-wider text-ink-muted">
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                       <h3 className="font-sans font-medium text-2xl md:text-3xl text-ink mb-2">{project.title}</h3>
//                       <p className="font-sans text-ink-muted text-sm leading-relaxed mb-4">{project.shortDesc}</p>
//                       <span className="font-sans text-xs font-medium link-underline text-ink inline-flex items-center gap-1 group-hover:text-accent">
//                         Read Case Study →
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           }
//           return <ProjectCard key={project.id} project={project} onClick={onOpenProject} />;
//         })}
//       </div>
//     </section>
//   );
// };
