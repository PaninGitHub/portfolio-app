import React from "react";
import Blog from "./Blog" 
import '../../App.css';

const BlogBox = () => {
    return(
        <div className="w-[80vw] grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-15">
            <Blog title="My Project" image="https://www.w3schools.com/images/lamp.jpg">Hello World</Blog>
        </div>
    )
}

export default BlogBox