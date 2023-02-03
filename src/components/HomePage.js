import Project from "./Project"
import Study from "../Images/Studying.jpeg"
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
function HomePage() {
    return (
        <div>


            <div className="info">

                <div>
                    <h3>Hello My Name Is <span>Cesar</span></h3>
                    <p>I am currently an aspiring software engineer student at Flatiron school bootcamp in NYC.
                        I am a person who welcomes a challenge, I give it my all to complete any tasks the best way possible.
                        I enjoy learning new concepts and changes in software based technology. Im someone who enjoys and excels
                        working independantly or with a group of people. By the end of my bootcamp i will have the nessesary skills
                        of a Full Stack Developer and incorportate them into the field..
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
            <Project />
        </div >
    )
}
export default HomePage