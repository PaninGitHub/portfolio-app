import React from "react";
import Blog from "./Blog" 
import '../../App.css';

const BlogBox = () => {
    return(
        <div className="w-[80vw] grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-10">
            <Blog>Hello World</Blog>
            <Blog>Hello World</Blog>
            <Blog>Hello World</Blog>
            <Blog>Hello World</Blog>
            <Blog>Hello World</Blog>
            <Blog>Hello World</Blog>
        </div>
    )
}

export default BlogBox