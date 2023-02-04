import HomePage from "./HomePage"
import NavBar from "./NavBar"
import Moon from "../Images/moon.png"
import Sun from "../Images/sun.png"
import { useState } from "react"

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (

        <>
            <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`} >
                <header>
                    {/* <button onClick={toggleDarkMode}>Toggle Mode</button> */}
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