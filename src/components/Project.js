// import { DiReact } from 'react-icons/ai'
// import { SiRubyonrails } from 'react-icons/ai'
// import { DiRuby } from 'react-icons/ai'
// import WakuWaku from '../Images/WakuWaku.png'
// import PokeDuel from '../Images/PokeDuel.png'
// import RMAP from '../Images/RMAP.png'
// import Fantasy from '../Images/Fantasy.png'
import { useState, useEffect } from "react";

function Project({ img }) {
    // const [index, setIndex] = useState(0)

    // const ProjectImg = [
    //     `${WakuWaku}`,
    //     `${PokeDuel}`,
    //     `${RMAP}`,
    //     `${Fantasy}`
    // ]



    return (
        <>

            <div >
                <div className="img-container">
                    <div className="one">
                        <div className="two">
                            <div>
                                <img className="project-img" src={img.image} />
                                <br></br>
                                <br></br>
                                <h1 style={{ display: "flex", justifyContent: "center" }}>{img.name}</h1>
                                <br></br>
                                <p style={{ textAlign: "left" }}>{img.description}</p>
                                <div style={{ fontSize: '3rem', marginTop: '1rem', textAlign: 'center', }}> {img.tools}</div>
                                <button className="source" style={{ display: "flex", justifyContent: "center", margin: 'auto', bordeRadius: '40px', padding: "3px", textDecoration: "none" }} >    <a href={img.source} style={{ width: '45px', color: 'black' }}> Code  </a>  </button>
                                <h1 style={{ fontSize: '10px' }}>*Mobile support soon</h1>
                            </div>

                        </div>

                    </div>

            </div>




            </div>

        </>
    )
}
export default Project