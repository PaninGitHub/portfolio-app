
import '../../App.css';
import WideBlog from "./WideBlog";

const BlogBox = () => {
    return(
        <div className="w-[80vw] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-15 justify-items-center">
            <WideBlog title="Atmospheric Science Department" role="Machine Learning Research Assistant" image="sky.png">
            Conduct research on geospatial machine learning algorithms, evaluate techniques to predict pollution sources, and integrate diverse data
            using Excel and Python to train models predicting missing chemical composition data for Houston.
            </WideBlog>
        </div>
    )
}

export default BlogBox