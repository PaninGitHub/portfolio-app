import '../../App.css'
import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
    header: string;
}

const DescriptionBox = ({ children="", header }: Props) => {
    return(
        <>
        <div className="bg-[#231D1D]/[0.15] outline outline-[rgba(255,245,245,0.5)] text-white rounded-[30px] p-4 mt-[20px]">
            <h1 className="font-montserrat text-[24px] font-extrabold">{header}</h1>
            <p>{children}</p>
        </div>
        </>
    )
}

export default DescriptionBox