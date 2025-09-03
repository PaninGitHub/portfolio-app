
import '../../App.css';
import WideBlog from "./WideBlog";
import CSWholesales from '../../pages/CSWholesales';

const BlogBox = () => {
    return(
        <div className="w-[80vw] grid grid-cols-1 gap-6 justify-items-center">
            <WideBlog title="C&S Wholesale Grocers" role="Full Stack Application Developer" image="cs_wholesales.png">
            Currently working on a vacation management application for the warehouse, allowing employees and administrators to schedule 
            and manage vacations anywhere and anytime. 
            <CSWholesales></CSWholesales>
            </WideBlog>
            <WideBlog title="Atmospheric Science Department" role="Machine Learning Research Assistant" image="sky.png">
            Conduct research on geospatial machine learning algorithms, evaluate techniques to predict pollution sources, and integrate diverse data
            using Excel and Python to train models predicting missing chemical composition data for Houston.
            </WideBlog>
        </div>
    )
}

export default BlogBox