//hero with text button and image

import { url } from "inspector";


//function
const Hero = () => {
    return (
        <div className="hero" style={{width:"100%", zIndex:1}}>
            <div className="grid grid-cols-12 grid-rows-6 h-full">  
                <div className="col-start-1 col-span-7 row-start-3 row-span-5">
                    <h2 className="subtitle">HELLO MY NAME IS</h2>
                    <h1 className="title">Kyle Fogarty-Anderson</h1>
                    <h2 className="subtitle">I am a Full Stack Developer</h2>
                    <br></br>
                    <button className="button">Download Resume</button>
                </div>
                <div className="hero-img rounded col-start-8 col-span-12 row-start-1 row-span-6 shadow" style={{backgroundImage: "url('/images/Kyle.jpg')"}}>

                </div>
            </div>
        </div>
    )
}

//export
export default Hero;
