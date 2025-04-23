import '../../App.css'
import CircAnalytics from "../../pages/circanalytics"
import React, { useState } from 'react'

const OverlayDescriptionBox = () => {
    const [isOpen, setIsOpen] = useState(true)  // Start as true to show the overlay initially

    const exitClick = () => {
        console.log(isOpen)
        setIsOpen(false)  // Close the overlay when clicked
    }

    return(
        <>
            <div className={`fixed w-full h-full bg-[rgba(217,248,225,0.01)] z-[2] inset-0 backdrop-blur-md ${!isOpen ? "hidden" : ""}`}>
                <div className="relative rounded-3xl mx-[10vh] h-[80vh] my-[10vh] bg-[rgba(43,42,42,0.84)] shadow-[0_0_120px_30px_rgba(0,0,0,0.7)] cursor-pointer">
                    <div onClick={exitClick} className="absolute w-[20px] right-[20px] top-[10px] box-border z-[10]">
                        <img onClick={exitClick} src="close.png" className="" alt="Close"></img>
                    </div>
                    <div className="absolute mx-[20px] w-full h-full">
                        <CircAnalytics></CircAnalytics>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OverlayDescriptionBox
