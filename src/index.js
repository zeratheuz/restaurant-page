import "./styles.css"

const divContent = document.querySelector("#content")
const divWelcome = document.createElement("div")
const divName = document.createElement("div")
divWelcome.textContent = `Welcome to Ichiraku Ramen!`
divName.textContent = `一楽ラーメン`
divContent.appendChild(divWelcome)
divContent.appendChild(divName)

console.log("Welcome to 一楽ラーメン")