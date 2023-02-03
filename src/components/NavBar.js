import { useState } from "react"
import Moon from "../Images/moon.png"
import Sun from "../Images/sun.png"
function NavBar({ toggleDarkMode, setIsDarkMode, isDarkMode }) {



    return (
        <>
            <header class="header">
                <div class="left-header">
                </div>
                <div class="right-header">
                    <nav>
                        <ul>
                            <li><a href="">HOME</a></li>
                            <li><a href="">ABOUT</a></li>
                            <li><a href="">PORTFOLIO</a></li>
                            <li><a href="https://docs.google.com/document/d/1x5K3fJzO6__hHVSEYgMI2QRjJuZySgdC/edit?usp=sharing&ouid=112777788902332142846&rtpof=true&sd=true">RESUME</a></li>
                        </ul>
                        <>
                            {isDarkMode ? <img onClick={toggleDarkMode} src={Sun} id="icon" /> : <img onClick={toggleDarkMode} src={Moon} id="icon" />}
                        </>

                    </nav>
                </div>
            </header>
        </>
    )
}
export default NavBar