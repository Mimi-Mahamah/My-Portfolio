import React, { useState } from "react";
import Lottie from 'react-lottie-segments';
import animationData from './lotties/toggle.json';
import { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from "./theme.js";



// forceFlag is used to specify that the segment should take effect immediately.

export default function Lottie2() {

    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }






    const [sequence, setSequence] = useState({
        segments: [0,1],
        forceFlag: true
    })





    const options = {
        loop: false,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const animate = () => {
        let start = sequence.segments[0];
        let stop = sequence.segments[1];

        if (stop === 1 || stop === 481) {
            start = 28;
            stop = 259;
          } else {
            start = 299;
            stop = 481;
          }

        setSequence({
        segments: [start,stop],
        forceFlag: true
    })
        }


    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

            <GlobalStyles/>
        <div className = "toggle" >
        <div onClick={() => themeToggler() }>
        <div onClick={() => animate()}>
            <Lottie 
            options = { options }
            isClickToPauseDisabled={true}
            playSegments={sequence}
            />
        </div>
        </div>
        </div >
        </ThemeProvider>
    );
}
// e=>setTheme(theme.mode === 'dark' ? {mode:'light'} : {mode:'dark'