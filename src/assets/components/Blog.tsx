import '../../App.css'
import { ReactNode, useState } from 'react';

type Props = {
    title: string;
    children: ReactNode;
    role?: string;
    image?: string;
}

const Blog = ({ title, children, role = "", image = "" }: Props) => {
    const [isExpanded, setExpansion] = useState(false)

    

    const openBlog = () => {
        console.log("Open sesame!")
    } 
    return (
        <div className="flex flex-col items-center w-[250px] sm:w-[400px] h-[400px] sm:h-[600px] border-[1px] border-[#FFF5F580] bg-white bg-opacity-5 rounded-3xl text-white mb-[40px]">
            <img src={image} alt="" className="w-[200px] sm:w-[300px] mt-[15px] sm:mt-[30px] border rounded-xl"></img>
            <h2 className="font-montserrat font-semibold text-[20px] sm:text-[30px] mt-[5px] sm:mt-[10px]"> {title} </h2>
            {(role != "") ? <h3 className="font-montserrat text-[16px] sm:text-[20px] sm:mt-[-5px]">{role}</h3> : null}
            <div className="overflow-hidden mb-[20px] mx-[20px]">
                <p className="text-[12px] xl:text-[14px] text-center sm:mt-[10px]"> {children} </p>
            </div>
        </div>
    );
}

export default Blog