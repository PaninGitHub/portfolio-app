import Navibar from "../assets/components/Navibar";
import Hero from "../assets/components/Hero";
import DescriptionBox from "../assets/components/DescriptionBox";
import Blog from "../assets/components/Blog"
import BlogBox from "../assets/components/BlogBox"


const Home = () => {
  const layout = [
    {}
  ]
  return(
    <>
      <Hero>
      </Hero>
      <div className="flex flex-col items-center">
        <h1 className="font-montserrat font-extrabold text-[7vw] lg:text-[48px] text-white text-center mt-[40px] mb-[40px]">Projects</h1>
        <BlogBox></BlogBox>
      </div>
      <p className="text-white text-[12px] text-center font-mono mt-[50px]">
        Designed by Dinidu Samaranayake using Figma <br/>
        Developed by Dinidu Samaranayake via Vite + React.JS + Tailwind <br/>
        <a className="text-gray-400" href="https://github.com/PaninGitHub/portfolio-app">Click here for Github Repo</a>
      </p>

    </>
  )
}

export default Home;
