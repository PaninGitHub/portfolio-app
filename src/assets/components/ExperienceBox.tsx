
import '../../App.css';
import WideBlog from "./WideBlog";
import CSWholesales from '../../pages/CSWholesales';
import Woodside from '../../pages/Woodside';
import AtmosphericSciences from '../../pages/AtmosphericSciences';

const BlogBox = () => {
    return(
        <div className="w-[80vw] grid grid-cols-1 gap-6 justify-items-center">
            <WideBlog title="Woodside Energy" role="Digital Operation Technology Intern · Jun 2026 – Aug 2026" image="Woodside.png">
            Built the OT team's centralized monitoring layer in Azure and Grafana — 20+ dashboards across 110+ VMs and
            6 firewall clusters — plus a production LLM pipeline that turns alerts into evidence-backed ServiceNow tickets.
            <Woodside></Woodside>
            </WideBlog>
            <WideBlog title="C&S Wholesale Grocers" role="Full Stack Application Developer · May 2025 – Jan 2026" image="cs_wholesales.png">
            Built a React Native vacation scheduling and management app for warehouse employees and administrators,
            replacing a desktop-only legacy tool with 40+ REST endpoints and 12 responsive screens.
            <CSWholesales></CSWholesales>
            </WideBlog>
            <WideBlog title="Texas A&M Atmospheric Sciences" role="Data Science Research Assistant · Feb 2025 – Apr 2025" image="sky.png">
            Built the ETL and geospatial pipelines behind a Houston air-quality study, assembling a 1 km gridded dataset
            of weather and land-use features for modeling pollution source composition.
            <AtmosphericSciences></AtmosphericSciences>
            </WideBlog>
        </div>
    )
}

export default BlogBox
