import Blog from "./Blog"
import '../../App.css';

const BlogBox = () => {
    return(
        <div className="w-[80vw] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-15 justify-items-center">
            <Blog title="Self-Hosted Infrastructure" role="Architect & Operator"
                tags="Docker · Linux · OPNsense · WireGuard · Cloudflare" image="placeholder.png">
                20+ Docker services on Ubuntu Server for media, ETL, and file sync, isolated behind a dedicated
                OPNsense firewall — WireGuard VPN with scoped SSH/RBAC for least-privilege access, Cloudflare
                Tunnels and a reverse proxy for remote access without exposing ports. Serves several users at
                roughly 99.8% uptime.
            </Blog>
            <Blog title="Karura Mars Rover" role="Control Station Developer"
                tags="PySide6 · ROS 2 · Python · OpenCV" image="placeholder.png">
                A Linux rover control station showing live camera feeds and system status, wired to 13+ ROS 2
                pub/sub nodes for real-time telemetry and odometry. The team placed 27th of 116 in University
                Rover Challenge qualifying, where only the top 36 advanced.
            </Blog>
            <Blog title="ShareTea POS" role="Frontend Developer"
                tags="React · TypeScript · Express.js · GitHub Projects" image="placeholder.png">
                Front end for a point-of-sale system enabling real-time order creation and a streamlined
                workflow for cashiers. Parallelizing API calls cut average calls per session by 89% and made
                the app feel noticeably faster.
            </Blog>
            <Blog title="Ecliptix" role="AI Developer"
                tags="JavaScript · GraphQL · Docker · Postman" image="ecliptixtemplogo.png">
                An advising AI bot that guides Texas A&M students through their education and career. I built
                the data layer — 5,000+ professor records collected and verified through GraphQL, and Firecrawl
                deployed in Docker to standardize scraped output across 150+ A&M programs.
            </Blog>
            <Blog title="CircAnalytics" role="Developer"
                tags="Python · Streamlit · Pandas" image="circanalytics.png"
                git_url="https://github.com/Aran203/cricanalytics">
                A multi-page Streamlit dashboard surfacing cricket performance metrics and graphs from granular
                shot-type data.
            </Blog>
            <Blog title="GroupMeet" role="Frontend Developer"
                tags="React · TypeScript · Tailwind" image="GroupMeet.png"
                git_url="https://github.com/aggie-coding-club/GroupMeet">
                A flexible meeting scheduler inspired by when2meet that lets organization members mark their
                availability and find a time that works for everyone.
            </Blog>
            <Blog title="Roni's" role="Developer"
                tags="Python · Pandas · Data Visualization" image="ronis.png"
                git_url="https://github.com/vishal-subramanyam/tamu-datathon-2024">
                Built at Texas A&M's Fall 2024 Datathon — a dashboard surfacing operational insights for the
                restaurant chain Roni's Mac Bar from the provided sales data.
            </Blog>
        </div>
    )
}

export default BlogBox
