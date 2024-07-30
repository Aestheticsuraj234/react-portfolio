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
    </div>
  )
}


export default App;