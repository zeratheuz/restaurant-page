import ichirakuRamenTeuchi from "./images/ichirakuRamenTeuchi.jpg"

export function about(divContent) {
  divContent.innerHTML = ''

  const divWelcome = document.createElement("div")
  const divMessage = document.createElement("div")
  const divName = document.createElement("div")

  divWelcome.classList.add("decoration")
  divMessage.classList.add("title")


  divMessage.textContent = `About Ichiraku Ramen!`
  divName.textContent = `一楽ラーメン`

  divWelcome.appendChild(divName)
  divWelcome.appendChild(divMessage)

  const imgIchirakuRamen = document.createElement("img")
  const divText = document.createElement("div")
  divText.classList.add("text")

  imgIchirakuRamen.src = ichirakuRamenTeuchi
  imgIchirakuRamen.alt = "Ichiraku Ramen Teuchi"
  divText.textContent = `Serving Konoha since before the Third Shinobi War! Famous for rich flavor, an amazing secret broth and being Naruto Uzumaki's favorite spot.`

  divWelcome.appendChild(imgIchirakuRamen)
  divWelcome.appendChild(divText)


  divContent.appendChild(divWelcome)
} 