import '../../App.css'
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    url: string;
    image?: string;
}

const HeroButton = ({ children, url, image = "" }: Props) => {
    const handleRedirect = () => {
        window.open(url, "_blank"); 
    };

    return (
        <button 
            onClick={handleRedirect} 
            className="duration-150 hover:scale-105 inline-flex flex-row items-center justify-around mx-[10px] mb-[10px] bg-[#ece6f0] border-none text-black font-roboto w-[100px] lg:w-[140px] px-[5px] py-[8px] text-center no-underline text-sm lg:text-lg rounded-3xl"
        >
            <img src={image} alt="" className="w-[32px]" />
            {children}
        </button>
    );
}

export default HeroButton