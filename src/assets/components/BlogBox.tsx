import React from "react";
import Blog from "./Blog" 
import '../../App.css';

const BlogBox = () => {
    return(
        <div className="w-[80vw] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-15 justify-items-center">
            <Blog title="OceanSPhere" role="Member" image="images.png">
            Welcome to OceanSphere
            Dive into the future with OceanSphere, the premier platform for exploring the wonders of our underwater world. Designed for ocean enthusiasts, researchers, and dreamers alike, OceanSphere bridges the gap between humanity and the deep blue sea. With cutting-edge virtual tours, real-time oceanic data, and a vibrant community of like-minded individuals, our website provides an unparalleled gateway to the mysteries and marvels beneath the waves. Whether you're planning your next diving adventure or studying marine ecosystems, OceanSphere is your ultimate resource.

            Virtual Exploration Redefined
            Imagine immersing yourself in a 360-degree view of the vibrant coral reefs in the Pacific or navigating the ethereal silence of the Mariana Trench—all from the comfort of your home. Our interactive tools and high-definition simulations allow users to experience the underwater world like never before. OceanSphere collaborates with leading marine photographers and technology partners to bring you unparalleled visual and auditory experiences. Dive into curated expeditions guided by marine biologists and learn fascinating insights about aquatic life and its fragile ecosystems.

            Real-Time Insights for Ocean Enthusiasts
            Stay connected to the pulse of the planet’s oceans with our real-time data dashboard. From tide patterns and water temperatures to live footage from deep-sea cameras, OceanSphere ensures that you never miss a moment of underwater activity. Students, hobbyists, and professionals alike can customize their dashboards to display the information that matters most to them. And with our AI-powered analysis tools, interpreting complex data has never been easier or more engaging.

            Join a Thriving Oceanic Community
            OceanSphere isn’t just a website; it’s a hub for ocean lovers across the globe. Share your diving stories, collaborate on marine conservation projects, or participate in our regular webinars with leading experts. With forums, blogs, and events tailored to ocean advocacy, OceanSphere empowers its users to become stewards of the seas. Together, we can ensure that the breathtaking beauty of the underwater world is preserved for generations to come.
            </Blog>
            <Blog title="My Project" role="Member" image="https://www.w3schools.com/images/lamp.jpg">Hello World</Blog>
            <Blog title="My Project" role="Member" image="https://www.w3schools.com/images/lamp.jpg">Hello World</Blog>
            <Blog title="My Project" role="Member" image="https://www.w3schools.com/images/lamp.jpg">Hello World</Blog>
            <Blog title="My Project" role="Member" image="https://www.w3schools.com/images/lamp.jpg">Hello World</Blog>

        </div>
    )
}

export default BlogBox