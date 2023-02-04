import { useState } from "react"
import HomePage from "./HomePage"
import NavBar from "./NavBar"
import Project from "./Project"
import React from "react"



function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (

        <>
            <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`} >
                <header>

                </header>
                <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                <br></br>
                <br></br>
                <HomePage />
            </div>
            <div class="box">
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}
export default App