import Hero from "../assets/components/Hero";
import BlogBox from "../assets/components/BlogBox"
import ExperienceBox from "../assets/components/ExperienceBox"
import OverlayDescriptionBox from "../assets/components/OverlayDescriptionBox";

const Home = () => {
  return(
    <>
      <OverlayDescriptionBox></OverlayDescriptionBox>
      <Hero> </Hero>
      <div className="flex flex-col items-center">
        <h1 className="font-montserrat font-extrabold text-[7vw] lg:text-[48px] text-white text-center mt-[40px] mb-[40px]">Experience</h1>
        <ExperienceBox></ExperienceBox>
        <h1 className="font-montserrat font-extrabold text-[7vw] lg:text-[48px] text-white text-center mt-[40px] mb-[40px]">Projects</h1>
        <BlogBox></BlogBox>      
      </div>
      <p className="text-white text-[12px] text-center font-mono mt-[50px]">
        Designed using Figma <br/>
        Developed via Vite + React.JS + Tailwind <br/>
        <a className="text-gray-400" href="https://github.com/PaninGitHub/portfolio-app">Click here for Github Repo</a>
      </p>

    </>
  )
}

export default Home;
