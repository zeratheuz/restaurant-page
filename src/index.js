import "./styles.css"

const divContent = document.querySelector("#content")
const divName = document.createElement("div")
divName.textContent = `Welcome to Ichiraku Ramen! 一楽ラーメン`
divContent.appendChild(divName)

console.log("Welcome to 一楽ラーメン")