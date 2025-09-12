import ichirakuImage from "./ichirakuramen.jpg" 

export function home(divContent) {
  divContent.innerHTML = ''

  const divWelcome = document.createElement("div")
  const divMessage = document.createElement("div")
  const divName = document.createElement("div")
  const divText = document.createElement("div")

  divWelcome.classList.add("decoration")
  divMessage.classList.add("welcome")
  divText.classList.add("text")
  
  divMessage.textContent = `Welcome to Ichiraku Ramen!`
  divName.textContent = `一楽ラーメン`

  const imgIchirakuRamen = document.createElement("img")
  imgIchirakuRamen.src = ichirakuImage
  imgIchirakuRamen.alt = "Ichiraku Ramen"

  divText.textContent = `Yo! If you haven’t tried Ichiraku Ramen yet, what are you even doin’ with your life?! After missions, training, or just hangin’ out—it’s my number one spot, believe it! The noodles are crazy good, the broth hits like a Rasengan to the soul. It’s not just food—it’s like, a whole experience, y’know? So quit standin’ around and come chow down with me! I’ll even race ya there! Last one to finish their bowl’s a rotten kunai—Dattebayo!`
  
  divWelcome.appendChild(divName)
  divWelcome.appendChild(divMessage)
  divWelcome.appendChild(imgIchirakuRamen)
  divWelcome.appendChild(divText)

  divContent.appendChild(divWelcome)
} 