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
                        <HeroButton image='resume.png' url='https://drive.google.com/file/d/1fEUtPP5iqM9bTx_DVj4_SALh36Irl7Lr/view?usp=sharing'>Resume</HeroButton>
                    </div>
                    <p className="font-roboto font-normal text-[1vm] md:text-[16px] mt-[10px] text-white">{ children }</p>
                    <DescriptionBox header="Education">Texas A&M - Sophomore B.S in Computer Science</DescriptionBox>
                    <DescriptionBox header="Skills">
                    HTML, CSS, Javascript, ReactJS, MongoDB, ExpressJS, Git, Rython, C++, Numpy, Pandas
                    </DescriptionBox>
                </div>
            </div>
        </>
    )
}

export default Hero