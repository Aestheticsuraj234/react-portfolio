import { Header } from "./components/global/Header";
import { HeroSection } from "./components/global/HeroSection";

const App = ()=>{
  return(
    <div className="flex flex-col min-h-[100vh]">
{/* Header */}
<Header/>
{/* Hero-section */}
<HeroSection/>
    </div>
  )
}


export default App;