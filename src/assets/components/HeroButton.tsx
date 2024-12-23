import '../../App.css'
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    image?: string;
}

const HeroButton = ({ children, image = "" }: Props) => {
    return(
        <>
            <button className="inline-flex flex-row items-center justify-around mr-[20px] mb-[10px] bg-[#ece6f0] border-none text-black font-roboto w-[140px] px-[10px] py-[10px] text-center no-underline text-lg rounded-3xl">
                <img src={image} alt="" className="w-[32px]" ></img>
                {children}
            </button>
        </>
    )
}

export default HeroButton