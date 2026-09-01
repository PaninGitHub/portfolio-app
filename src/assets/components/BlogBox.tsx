import Blog from "./Blog"
import '../../App.css';

const BlogBox = () => {
    return(
        <div className="w-[80vw] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-15 justify-items-center">
            <Blog title="Homelab" role="Architect &amp; Operator"
                tags="Docker · Linux · OPNsense · WireGuard · Cloudflare" image="homelab.png">
                I run 20+ Docker services on an Ubuntu server for media, ETL, and file sync, all sitting
                behind their own OPNsense firewall. Getting in means WireGuard, with SSH and RBAC scoped
                per role so nobody has more access than they need. Anything reachable from the internet
                goes through Cloudflare Tunnels and a reverse proxy instead of an open port.
            </Blog>
            <Blog title="Karura Mars Rover" role="Control Station Developer"
                tags="PySide6 · ROS 2 · Python · OpenCV" image="Karura.png">
                I worked on the rover's control station, a Linux dashboard with live camera feeds and
                system status wired into 13+ ROS 2 pub/sub nodes for real-time telemetry and odometry.
                We placed 27th of 116 in University Rover Challenge qualifying, and only the top 36
                got through.
            </Blog>
            <Blog title="ShareTea POS" role="Frontend Developer"
                tags="React · TypeScript · Express.js · GitHub Projects" image="ShareTea.png">
                I built the front end for a point-of-sale system where cashiers put orders together in
                real time. Most of the work went into keeping that flow short so it stays out of the
                cashier's way.
            </Blog>
            <Blog title="Ecliptix" role="AI Developer"
                tags="JavaScript · GraphQL · Docker · Postman" image="ecliptixtemplogo.png">
                An AI advising bot that points Texas A&M students in the right direction with their
                education and career.
            </Blog>
            <Blog title="CircAnalytics" role="Developer"
                tags="Python · Streamlit · Pandas" image="circanalytics.png"
                git_url="https://github.com/Aran203/cricanalytics">
                A multi-page Streamlit dashboard with a bunch of cricket metrics and graphs, all built
                off granular shot type data.
            </Blog>
            <Blog title="GroupMeet" role="Frontend Developer"
                tags="React · TypeScript · Tailwind" image="GroupMeet.png"
                git_url="https://github.com/aggie-coding-club/GroupMeet">
                A meeting scheduler in the same spirit as when2meet. Members of an org mark when they
                are free and it works out a time that fits everyone.
            </Blog>
            <Blog title="Roni's" role="Developer"
                tags="Python · Pandas · Data Visualization" image="ronis.png"
                git_url="https://github.com/vishal-subramanyam/tamu-datathon-2024">
                Built at Texas A&M's Fall 2024 Datathon. It's a dashboard that digs operational
                insights out of the sales data we were handed for the restaurant chain Roni's Mac Bar.
            </Blog>
        </div>
    )
}

export default BlogBox
