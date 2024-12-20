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
            <div className="flex flex-col md:flex-row-reverse items-center md:justify-around md:ml-[20px] lg:ml-[50px] text-center">
                <img src="dinidu.png" alt="Portrait" className="img-shadow min-w-[5vw] max-w-[90vw] md:min-w-[250px] md:max-w-[35vw]"></img>
                <div className="text-center md:text-start mx-[5px] md:[mx=40px] max-w-[400px] md:max-w-[40vw]">
                    <h1 className="font-montserrat font-extrabold text-[7vw] md:text-[48px] text-white">Dinidu Samaranayake</h1>
                    <h2 className="font-roboto font-normal text-[3vm] md:text-[24px] text-white">Data Analyst + Full Stack Developer</h2>
                    <div>
                        <HeroButton>Github</HeroButton>
                        <HeroButton>LinkedIn</HeroButton>
                        <HeroButton>Resume/CV</HeroButton>
                    </div>
                    <p className="font-roboto font-normal text-[1vm] md:text-[16px] mt-[10px] text-white">{ children }</p>
                </div>
            </div>
        </>
    )
}

export default Hero