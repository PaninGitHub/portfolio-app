import '../../App.css'
import { ReactNode } from 'react';

type Props = {
    title: string;
    children: ReactNode;
    image?: string;
}

const Blog = ({ title, children, image = "" }: Props) => {
    const openBlog = () => {
        console.log("Open sesame!")
    } 
    return (
        <div className="flex flex-col items-center w-[400px] h-[600px] border-[1px] border-[#FFF5F580] text-white">
            <h2 className="font-montserrat font-bold text-[30px] mb-[10px]"> {title} </h2>
            <img src={image} alt="" className="w-[300px]"></img>
            <p className="mt-[10px]"> {children} </p>
        </div>
    );
}

export default Blog