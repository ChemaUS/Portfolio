import Project from "./Project"
import Study from "../Images/Studying.jpeg"
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { DiReact } from 'react-icons/di'
import { SiRubyonrails } from 'react-icons/si'
import { DiRuby } from 'react-icons/di'
import WakuWaku from '../Images/WakuWaku.png'
import PokeDuel from '../Images/PokeDuel.png'
import RMAP from '../Images/RMAP.png'
import Fantasy from '../Images/Fantasy.png'
import Portfolio from '../Images/Portfolio.png'
function HomePage() {

    const ProjectImg = [{
        image: `${WakuWaku}`,
        name: "WakuWaku.tv",
        source: "https://github.com/ChemaUS/WakuWaku.tv",
        description: "Anime streaming Web App where you can watch anime!",
        tools: [<DiReact />, <SiRubyonrails />],
        id: 1
    },

    {
        image: `${PokeDuel}`,
        name: "PokeDuel",
        source: "https://github.com/ChemaUS/PokeDuel",
        description: "Pokemon app where you can customize your own team!",
        tools: <DiReact />,
        id: 2
    },
    {
        image: `${RMAP}`,
        name: "Rate my Amuesment Park",
        source: "https://github.com/ChemaUS/Phase-2-Project",
        description: "Rate your favorite amusement parks!",
        tools: <DiReact />,
        id: 3
    },

    {
        image: `${Fantasy}`,
        name: "Fantasy Soccer",
        source: "https://github.com/elisash/front_end_phase-3",
        description: "Create your very own World Cup fantasy soccer team!",
        tools: [<DiReact />, <DiRuby />],
        id: 4
    },
    {
        image: `${Portfolio}`,
        name: 'My Portfolio Website',
        source: 'https://github.com/ChemaUS/Portfolio',
        id: 5
    }
    ]

    const images = ProjectImg.map(img => {
        return <Project img={img} key={img.id} />
    })


    return (
        <div>


            <div className="info">

                <div>
                    <h3>Hello My Name Is <span>Cesar</span></h3>
                    <p>I am a full stack software engineer that recently graduated from Flatiron school bootcamp in NYC.
                        I am a person who welcomes a challenge, I give it my all to complete any tasks the best way possible.
                        I enjoy learning new concepts and changes in the tech industry. I'm someone who enjoys and excels
                        working independantly and with a group of people. Even though I currently have no work experience once glnace at
                        my portfolio can attest my capabilites.
                    </p>
                </div>

                <div className="img-div">
                    <img src={Study} className="body-img" />
                </div>
            </div>

            <div class="social-links">
                <a href="https://github.com/ChemaUS"><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/chema-us/"><AiFillLinkedin /></a>
            </div>
            <div class="project-div">
                <h3>Projects</h3>
            </div>
            <br></br>
            <br></br>
            <div className="project-container">

                {images}


            </div>


        </div >
    )
}
export default HomePage