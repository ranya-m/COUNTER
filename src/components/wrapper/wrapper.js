import React from "react";
import "./wrapper.css";

import PhotoBox from "../likedislike/likedislike";

// photo imports
import photo from "../img/1.jpg";
import photo2 from "../img/2.jpg";
import photo3 from "../img/3.jpg";
import photo4 from "../img/4.jpg";
import photo5 from "../img/5.jpg";
import photo6 from "../img/6.jpg";

// **************

import { createContext, useState } from "react"; 
import ReactSwitch from "react-switch";

export const ThemeContext = createContext("null");  

function WrapperApp() {

        const [theme, setTheme] = useState("light");
        const toggleTheme = () => {
            setTheme((current) => (current === "light" ? "dark" : "light"))
        };

        

        return (
          <ThemeContext.Provider value={{theme, toggleTheme}}>
    
            <div id="wrapper" className={theme}>
                <div className="switchTheme">
                  <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                  <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
                </div>
                <h1>Welcome to the CatHub</h1>
                <PhotoBox src={photo}/>
            </div>
    
          </ThemeContext.Provider> 
        );
} 

export default WrapperApp;
