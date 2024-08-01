import ContactSection from "./components/global/ContactSection";
import { Header } from "./components/global/Header";
import { HeroSection } from "./components/global/HeroSection";
import ProjectSection from "./components/global/ProjectSection";
import SkillSection from "./components/global/SkillSection";

const App = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      {/* Header */}
      <Header />
      {/* Hero-section */}
      <HeroSection />

      {/* Project-section */}
      <ProjectSection />

      {/* Skills Section */}
      <SkillSection />

      {/* contact Section */}
      <ContactSection/>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
<p className="text-xs text-muted-foreground">&copy; 2024 John Doe. All rights reserved.</p>
<nav className="sm:ml-auto flex gap-4 sm:gap-6">
<div  className="text-xs hover:underline underline-offset-4" >
Privacy
</div>
<div  className="text-xs hover:underline underline-offset-4" >
Terms
</div>
</nav>
</footer>
    </div>
  )
}


export default App;