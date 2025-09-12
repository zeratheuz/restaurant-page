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

  divText.textContent = `Yo! Haven't tried Ichiraku Ramen yet?! It's amazing! Believe it! It hits like a Rasengan! —Dattebayo!`

  divWelcome.appendChild(divName)
  divWelcome.appendChild(divMessage)
  divWelcome.appendChild(imgIchirakuRamen)
  divWelcome.appendChild(divText)

  divContent.appendChild(divWelcome)
} 