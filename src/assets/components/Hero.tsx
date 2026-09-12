import '../../App.css'
import { ReactNode } from 'react';
import HeroButton from './HeroButton'
import DescriptionBox from './DescriptionBox';
import RotatingTitle from './RotatingTitle';

type Props = {
    children?: ReactNode;
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
            <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-around md:ml-[20px] lg:ml-[50px] text-center lg:min-h-[90vh] lg:py-[40px]">
                <img src="dinidu.png" alt="Portrait" className="img-shadow min-w-[5vw] max-w-[90vw] lg:min-w-[250px] lg:max-w-[35vw]"></img>
                <div className="text-center lg:text-start mx-[5px] lg:[mx=40px] max-w-[80vw] lg:max-w-[40vw]">
                    <h1 className="font-montserrat font-extrabold text-[7vw] lg:text-[48px] text-white">Dinidu Samaranayake</h1>
                    <RotatingTitle/>
                    <div className="flex flex-wrap max-w-[80vw] justify-center lg:justify-start mt-[20px] lg:mt-[20px]">
                        <HeroButton image='github.png' url='https://github.com/PaninGitHub'>Github</HeroButton>
                        <HeroButton image='linkedin.png' url='https://www.linkedin.com/in/dinids/'>LinkedIn</HeroButton>
                        <HeroButton image='resume.png' url='https://1drv.ms/b/c/7028e327ce3cf92f/IQARiM_nD4MuQZmulPJCuy1pAUZYwW240kPPL9mJXebRTt0?e=tQqmC9'>Resume</HeroButton>
                    </div>
                    <p className="font-roboto font-normal text-[1vm] md:text-[16px] mt-[10px] text-white">{ children }</p>
                    <DescriptionBox header="Education">
                    {new Date() >= new Date("2027-05-01")
                        ? "Texas A&M University — B.S. Computer Science, Minor in Statistics"
                        : new Date() >= new Date("2026-05-01")
                        ? "Texas A&M University — Senior, B.S. Computer Science, Minor in Statistics"
                        : new Date() >= new Date("2025-05-01")
                        ? "Texas A&M University — Junior, B.S. Computer Science, Minor in Statistics"
                        : "Texas A&M University — B.S. Computer Science, Minor in Statistics"}
                    {" · GPA 3.74 · Aug 2023 – May 2027"}
                    </DescriptionBox>
                    <DescriptionBox header="Languages">
                    JavaScript, TypeScript, Python, SQL (PostgreSQL, MySQL), PromQL, KQL, PowerShell, C++, Java, HTML, CSS
                    </DescriptionBox>
                    <DescriptionBox header="Technologies">
                    React, React Native, Node + Express.js, TanStack, Docker, Linux,
                    Azure, Azure DevOps CI/CD, Grafana, GCP, Cloudflare, Git,
                    Pandas, GDAL, Seaborn, ROS2, PySide6
                    </DescriptionBox>
                    <DescriptionBox header="Relevant Coursework">
                    Intro to Computer Systems, Software Reverse Engineering, Computer and Network Security,
                    Foundations of Software Engineering
                    </DescriptionBox>
                </div>
            </div>
        </>
    )
}

export default Hero