import "./styles.css"
import {home} from "./home.js"
// import home from "./menu.js"
// import home from "./about.js"

const divContent = document.querySelector("#content")
const homeButton = document.querySelector("#home")
const menuButton = document.querySelector("#menu")
const aboutButton = document.querySelector("#about")

homeButton.addEventListener("click", () => home(divContent))
home(divContent)

menu.addEventListener("click", () => {
  divContent.innerHTML = ''  
  const divWelcome = document.createElement("div")
  const divName = document.createElement("div")
  divWelcome.textContent = `Ramen!`
  divName.textContent = `一楽ラーメン`
  divContent.appendChild(divWelcome)
  divContent.appendChild(divName)
})

about.addEventListener("click", () => {
  divContent.innerHTML = ''  
  const divWelcome = document.createElement("div")
  const divName = document.createElement("div")
  divWelcome.textContent = `Ohayoooooooooo!`
  divName.textContent = `一楽ラーメン`
  divContent.appendChild(divWelcome)
  divContent.appendChild(divName)
})

console.log("Welcome to 一楽ラーメン")