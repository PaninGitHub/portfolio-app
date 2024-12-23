import '../../App.css'
import { ReactNode } from 'react';
import HeroButton from './HeroButton'

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
            <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-around md:ml-[20px] lg:ml-[50px] text-center">
                <img src="dinidu.png" alt="Portrait" className="img-shadow min-w-[5vw] max-w-[90vw] lg:min-w-[250px] lg:max-w-[35vw]"></img>
                <div className="text-center lg:text-start mx-[5px] lg:[mx=40px] max-w-[80vw] lg:max-w-[40vw]">
                    <h1 className="font-montserrat font-extrabold text-[7vw] lg:text-[48px] text-white">Dinidu Samaranayake</h1>
                    <h2 className="font-roboto font-normal text-[16px] lg:text-[24px] text-white">Data Analyst + Full Stack Developer</h2>
                    <div className="flex flex-wrap max-w-[80vw] justify-center lg:justify-start mt-[20px] lg:mt-[20px]">
                        <HeroButton image='github.png'>Github</HeroButton>
                        <HeroButton image='linkedin.png'>LinkedIn</HeroButton>
                        <HeroButton image='resume.png'>Resume</HeroButton>
                    </div>
                    <p className="font-roboto font-normal text-[1vm] md:text-[16px] mt-[10px] text-white">{ children }</p>
                </div>
            </div>
        </>
    )
}

export default Hero