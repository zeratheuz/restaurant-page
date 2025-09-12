import "./styles.css"
import {home} from "./home.js"
import {menu} from "./menu.js"
import {about} from "./about.js"

const divContent = document.querySelector("#content")
const homeButton = document.querySelector("#home")
const menuButton = document.querySelector("#menu")
const aboutButton = document.querySelector("#about")

homeButton.addEventListener("click", () => home(divContent))
homeButton.click()

menuButton.addEventListener("click", () => menu(divContent))

aboutButton.addEventListener("click", () => about(divContent))

console.log("Welcome to 一楽ラーメン")