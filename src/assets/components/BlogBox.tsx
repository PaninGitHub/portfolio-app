import Blog from "./Blog" 
import '../../App.css';

const BlogBox = () => {
    return(
        <div className="w-[80vw] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-15 justify-items-center">
            <Blog title="CircAnalytics" role="Developer" image="circanalytics.png" git_url="https://github.com/Aran203/cricanalytics">
                A multi-page Streamlit dashboard with several metrics and graphs using granular shot type data
            </Blog>
            <Blog title="GroupMeet" role="Frontend Developer" image="GroupMeet.png" git_url="https://github.com/aggie-coding-club/GroupMeet">
                A flexible meeting scheduling app inspired by when2meet that allows organization members 
                to set their avability 
            </Blog>
            <Blog title="Roni's" role="Developer" image="ronis.png" git_url="https://github.com/vishal-subramanyam/tamu-datathon-2024">
                Created during Texas A&M's Fall 2024 Datathon, a dashboard that shows various insights
                for the restaurant chain "Roni's Mac Bar" using provided data 
            </Blog>

        </div>
    )
}

export default BlogBox