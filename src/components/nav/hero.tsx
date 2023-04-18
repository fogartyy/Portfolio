//hero with text button and image

import { url } from "inspector";
import SocialPanel from "../social-panel";

//function
const Hero = () => {
    return (
        <div className="hero" style={{width:"100%", zIndex:1}}>
            <div className="grid lg:grid-cols-2 lg:grid-rows-1 h-full gap-5">  
                <div className="">
                    <h2 className="subtitle">HELLO MY NAME IS</h2>
                    <h1 className="title">Kyle Fogarty-Anderson</h1>
                    <h2 className="subtitle">I am a Full Stack Developer</h2>
                    <br></br>
                    <button className="button">Download Resume</button>
                </div>

                
                <img className="hero-img rounded shadow m-auto" src="/images/Kyle.jpg">

                </img>

                <div className="row-start-2"><SocialPanel></SocialPanel></div>

                

            </div>
        </div>
    )
}

//export
export default Hero;
