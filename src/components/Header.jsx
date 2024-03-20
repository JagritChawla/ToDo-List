import { useState } from "react"
import logo from "../assets/logo.png"
import { useEffect } from "react";
export const Header = () => {
    const [theme,setTheme] = useState( JSON.parse(localStorage.getItem("theme_in_LocalStorage")) || "dark"); 

    useEffect(()=>{
        localStorage.setItem("theme_in_LocalStorage",JSON.stringify(theme));
        document.querySelector('html').removeAttribute("class");
        document.documentElement.classList.add(theme);
        console.log("changed ",theme)

    },[theme])


  return (
    <header>
        <div className="logo">
            <img src={logo} alt="Taskmate Logo" />
            <span>Taskmate</span>
        </div>
        <div className="themeSelector">

            <span onClick={()=> {setTheme("light"); console.log(theme)}} className={theme =="light" ? "light activeTheme" : "light"}></span>

            <span onClick={()=> {setTheme("medium"); console.log(theme)}}className={theme =="medium" ? "medium activeTheme" : "medium"}></span>
            <span onClick={()=> {setTheme("dark"); console.log(theme)}} className={theme =="dark" ? "dark activeTheme" : "dark"}></span>
            <span onClick={()=> {setTheme("gOne"); console.log(theme)}} className={theme =="gOne" ? "gOne activeTheme" : "gOne"}></span>
            <span onClick={()=> {setTheme("gTwo"); console.log(theme)}} className={theme =="gTwo" ? "gTwo activeTheme" : "gTwo"}></span>
            <span onClick={()=> {setTheme("gThree"); console.log(theme)}} className={theme =="gThree" ? "gThree activeTheme" : "gThree"}></span>
        </div>
    </header>
  )
}
