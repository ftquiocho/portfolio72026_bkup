import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { WorkSection } from './components/sections/WorkSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectDrawer } from './components/ui/ProjectDrawer';
// import { SakuraPetals } from './components/ui/SakuraPetals';
import { FloatingOnigiri } from './components/ui/SakuraPetals';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  useRevealOnScroll();

  const handleOpenProject = (projectId) => {
    setSelectedProject(projectId);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <div className="bg-dots"></div>
      {/* <SakuraPetals /> */}
      <FloatingOnigiri />
      <Navbar />
      
     <main className="relative pt-40 pb-20">
        <Hero />
        <WorkSection onOpenProject={handleOpenProject} />
        <AboutSection />
      </main>
      
      <Footer />
      <ProjectDrawer 
        isOpen={drawerOpen}
        projectId={selectedProject}
        onClose={handleCloseDrawer}
      />
    </>
  );
}

export default App;