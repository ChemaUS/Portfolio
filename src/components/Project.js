// import { DiReact } from 'react-icons/ai'
// import { SiRubyonrails } from 'react-icons/ai'
// import { DiRuby } from 'react-icons/ai'
import WakuWaku from '../Images/WakuWaku.png'
import PokeDuel from '../Images/PokeDuel.png'
import RMAP from '../Images/RMAP.png'
import Fantasy from '../Images/Fantasy.png'
import { useState, useEffect } from "react";

function Project() {
    // const [index, setIndex] = useState(0)

    const ProjectImg = [
        `${WakuWaku}`,
        `${PokeDuel}`,
        `${RMAP}`,
        `${Fantasy}`
    ]



    return (
        <>
            <div class="project-div">
                <h3>Projects</h3>
            </div>
            <div className="project-container">

            </div>

        </>
    )
}
export default Project