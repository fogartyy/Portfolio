//useEffect hook
import React, { useEffect } from 'react';

//import scroll point
import ScrollPoint from './scroll-point';

//usestate hook
import { useState } from 'react';

//scroll vertical component
const Scroll = (props: any) => {
    //scroll state
    const [scroll, setScroll] = useState(0);

    //scroll points states
    const [scrollPoints, setScrollPoints] = useState([""]);

    //scroll percentage function
    const scrollPercentage = () => {
        //scroll percentage
        const scrollPercent = Math.round(
            (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );

        //set scroll
        setScroll(scrollPercent);
    };

    //on scroll
    useEffect(() => {
        //scroll event listener
        window.addEventListener('scroll', scrollPercentage);

        //return
        return () => {
            //remove event listener
            window.removeEventListener('scroll', scrollPercentage);
        };
    }, [scroll]);

    //on touch scroll
    useEffect(() => {
        //touch scroll event listener
        window.addEventListener('touchmove', scrollPercentage);

        //return
        return () => {
            //remove event listener
            window.removeEventListener('touchmove', scrollPercentage);
        };
    }, [scroll]);

     
    //find scroll percentage of element
    const findScrollPercentage = (element: any) => {
        //scroll percentage from top of document
        const scrollPercent = Math.round(
            (element.offsetTop / (document.body.scrollHeight)) * 100
        );
            

        //return
        return scrollPercent;
    };



    //scroll points
    useEffect(() => {
        //scroll points from h1 tags
        const scrollPoints = document.getElementsByClassName("anchor");

        
        
        //scroll points array
        const scrollPointsArray: any = [];

        //loop through scroll points
        for (let i = 0; i < scrollPoints.length; i++) {
            //scroll point
            const scrollPoint = scrollPoints[i];

            //scroll point percentage
            const scrollPointPercentage = findScrollPercentage(scrollPoint);

            //scroll point title
            const scrollPointTitle = scrollPoint.getAttribute("title");

            //scroll point component
            const scrollPointComponent = <ScrollPoint scrollPoint={scrollPointPercentage} title={scrollPointTitle} />;

            //push scroll point component to array
            scrollPointsArray.push(scrollPointComponent);
        }

        //set scroll points
        setScrollPoints(scrollPointsArray);
    }, []);


    return (
        <div className="scroll">
            <div className="scroll-bar" style={{ height: `${scroll}%`,zIndex:1 }}></div>
            {scrollPoints}
            
        </div>
    );
};

//export
export default Scroll;