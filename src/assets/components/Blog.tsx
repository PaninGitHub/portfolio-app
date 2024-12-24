import '../../App.css'
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    image?: string;
}

const Blog = ({ children, image = "" }: Props) => {
    const openBlog = () => {
        console.log("Open sesame!")
    } 
    return (
        <div className="w-[400px] h-[600px] border-[1px] border-[#FFF5F580] text-white">
            {children}
        </div>
    );
}

export default Blog