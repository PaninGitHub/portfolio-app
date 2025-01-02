import React from "react";
import Blog from "./Blog" 
import '../../App.css';

const BlogBox = () => {
    return(
        <div className="w-[80vw] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-15 justify-items-center">
            <Blog title="CircAnalytics" role="Member" image="circanalytics.png" url="hi">
                A multi-page Streamlit dashboard with several metrics and graphs using granular shot type data
            </Blog>
            <Blog title="My Project" role="Member" image="https://www.w3schools.com/images/lamp.jpg">Hello World</Blog>
            <Blog title="My Project" role="Member" image="https://www.w3schools.com/images/lamp.jpg">Hello World</Blog>
            <Blog title="My Project" role="Member" image="https://www.w3schools.com/images/lamp.jpg">Hello World</Blog>
            <Blog title="My Project" role="Member" image="https://www.w3schools.com/images/lamp.jpg">Hello World</Blog>

        </div>
    )
}

export default BlogBox