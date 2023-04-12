//scroll dot that take a percentage and return a dot

//import use effect
import { useEffect } from 'react';

//scroll component
function JumpTo(anchor){
    document.getElementById(anchor).scrollIntoView({behavior: "smooth"});
}
    

const ScrollPoint = (props: any) => {
    //scroll point
    const scrollPoint = props.scrollPoint;

    //scroll point style
    const scrollPointStyle = {
        top: `${scrollPoint}%`,
        zIndex: 2,
    };

    //return
    return (
        <div className="scroll-point" style={scrollPointStyle}>
            <div className="scroll-point-dot"></div>
            <h2 className="no-select" onClick={() => JumpTo(props.title)}><i>-</i> {props.title}</h2>
        </div>
    );
};

//export
export default ScrollPoint;
