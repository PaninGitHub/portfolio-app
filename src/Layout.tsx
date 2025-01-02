import Navibar from "./assets/components/Navibar"
import { Outlet } from "react-router-dom"

export function Layout(){
    return(
        <>
            <Navibar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}