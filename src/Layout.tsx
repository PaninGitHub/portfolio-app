import Navibar from "./assets/components/Navibar"
import { Outlet } from "react-router-dom"
import MouseFollower from "./assets/components/HoverEffect"

export function Layout(){
    return(
        <>
            <MouseFollower/>
            <Navibar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}