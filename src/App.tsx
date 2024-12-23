import Navibar from "./assets/components/Navibar";
import Hero from "./assets/components/Hero";
import DescriptionBox from "./assets/components/DescriptionBox";

function App(){
  return(
    <>
      <Navibar />
      <Hero>
      My name is Walter Hartwell White. 
      I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104. 
      This is my confession. 
      If you're watching this tape, I'm probably dead, murdered by my brother-in-law Hank Schrader. 
      Hank has been building a meth empire for over a year now and using me as his chemist. 
      Shortly after my 50th birthday, Hank came to me with a rather, shocking proposition. 
      He asked that I use my chemistry knowledge to cook methamphetamine, which he would then sell using his connections in the drug world.
      Connections that he made through his career with the DEA
      </Hero>
    </>
  )
}

export default App;
