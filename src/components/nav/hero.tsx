//hero with text button and image


//function
const Hero = () => {
    return (
        <div className="hero" style={{width:"100%"}}>
            <div className="grid grid-cols-12 grid-rows-6 h-full">
                <div className="col-start-1 col-span-7 row-start-2 row-span-5">
                    <h2 className="subtitle">HELLO MY NAME IS</h2>
                    <h1 className="title">Kyle Fogarty-Anderson</h1>
                    <h2 className="subtitle">I am a Full Stack Developer</h2>
                    <br></br>
                    <button className="button">Download Resume</button>
                </div>
                <div className="paralax rounded col-start-8 col-span-12 row-start-1 row-span-6 shadow">

                </div>
            </div>
        </div>
    )
}

//export
export default Hero;
