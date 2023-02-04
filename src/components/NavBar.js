import { useState } from "react"
import Moon from "../Images/moon.png"
import Sun from "../Images/sun.png"
import Haikyuu from '../Images/Haikyuu.png'
function NavBar({ toggleDarkMode, setIsDarkMode, isDarkMode }) {



    return (
        <>
            <header class="header">
                <div class="left-header">
                    <span style={{ color: '#ff4321', fontSize: '2rem', fontWeight: 'bold', marginLeft: '3rem', position: 'relative', zIndex: 1 }}>Cesar Hernandez</span>
                </div>
                <img className="name-img" src={Haikyuu} />
                <div class="right-header">
                    <nav>
                        <ul>
                            {/* <li><a href="">HOME</a></li>
                            <li><a href="">ABOUT</a></li>
                            <li><a href="">PROJECTS</a></li> */}
                            <li><a href="https://docs.google.com/document/d/1FZks8TeDxF2_dTDqMSJ_uUlt_7tL0vKG_A7E4Efj5C4/edit">RESUME</a></li>
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