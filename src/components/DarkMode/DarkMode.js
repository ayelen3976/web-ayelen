import React from "react"
import "./DarkMode.scss"
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props} className="tool">
   Dark Mode
  </Tooltip>
);
const DarkMode = () => {
  let clickedClass = "clicked"
  const body = document.body
  const lightTheme = "light"
  const darkTheme = "dark"
  let theme
  if (localStorage) {
    theme = localStorage.getItem("theme")
  }
  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme)
  } else {
    body.classList.add(lightTheme)
  }
  const switchTheme = e => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme)
      e.target.classList.remove(clickedClass)
      localStorage.setItem("theme", "light")
      theme = lightTheme
    } else {
      body.classList.replace(lightTheme, darkTheme)
      e.target.classList.add(clickedClass)
      localStorage.setItem("theme", "dark")
      theme = darkTheme
    }
  }
  return (
    <OverlayTrigger
    placement="right"
     defaultShow={true}
    overlay={renderTooltip}
  >
    <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={e => switchTheme(e)}
    ></button>
      </OverlayTrigger>
  )
}

export default DarkMode