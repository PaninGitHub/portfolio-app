import '../../App.css'
import { ReactNode } from 'react';
import HeroButton from './HeroButton'
import DescriptionBox from './DescriptionBox';

type Props = {
    children: ReactNode;
}

const Hero = ({ children }: Props) => {
    return(
        <>  
            <style>
                {`
                    .img-shadow {
                        -webkit-mask-image: linear-gradient(
                        rgb(0 0 0 / 1),
                        rgb(0 0 0 / 0.5) 95%,
                        rgb(0 0 0 / 0)
                        );
                        mask-image: linear-gradient(
                        rgb(0 0 0 / 1),
                        rgb(0 0 0 / 0.5) 95%,
                        rgb(0 0 0 / 0)
                        );
                    }
                `}
            </style>
            <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-around md:ml-[20px] lg:ml-[50px] text-center lg:h-[90vh]">
                <img src="dinidu.png" alt="Portrait" className="img-shadow min-w-[5vw] max-w-[90vw] lg:min-w-[250px] lg:max-w-[35vw]"></img>
                <div className="text-center lg:text-start mx-[5px] lg:[mx=40px] max-w-[80vw] lg:max-w-[40vw]">
                    <h1 className="font-montserrat font-extrabold text-[7vw] lg:text-[48px] text-white">Dinidu Samaranayake</h1>
                    <h2 className="font-roboto font-normal text-[16px] lg:text-[24px] text-white">Data Analyst + Full Stack Developer</h2>
                    <div className="flex flex-wrap max-w-[80vw] justify-center lg:justify-start mt-[20px] lg:mt-[20px]">
                        <HeroButton image='github.png' url='https://github.com/PaninGitHub'>Github</HeroButton>
                        <HeroButton image='linkedin.png' url='https://www.linkedin.com/in/dinids/'>LinkedIn</HeroButton>
                        <HeroButton image='resume.png' url='https://1drv.ms/w/c/7028e327ce3cf92f/EeRBdZg2QV9NsQ7jHXiLDv8BCAcFz9Jgk4EIuvlMxi2xCQ?e=ymIyef'>Resume</HeroButton>
                    </div>
                    <p className="font-roboto font-normal text-[1vm] md:text-[16px] mt-[10px] text-white">{ children }</p>
                    <DescriptionBox header="Education">
                    {new Date() >= new Date("2027-05-01")
                        ? "Texas A&M – B.S. in Computer Science"
                        : new Date() >= new Date("2026-05-01")
                        ? "Texas A&M – Senior, B.S. in Computer Science"
                        : new Date() >= new Date("2025-05-01")
                        ? "Texas A&M – Junior, B.S. in Computer Science"
                        : "Texas A&M – B.S. in Computer Science"}
                    </DescriptionBox>
                    <DescriptionBox header="Languages">
                    HTML, CSS, Javascript, Python, C++, Java, SQL, Haskell
                    </DescriptionBox>
                    <DescriptionBox header="Technologies">
                    React.JS, React Native, Javascript, Express.JS, Tanstack, Gluestack, REST, Tailwind, Pandas, Numpy, Node.JS, GraphQL
                    </DescriptionBox>
                </div>
            </div>
        </>
    )
}

export default Hero