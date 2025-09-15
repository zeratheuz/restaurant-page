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

  imgIchirakuRamen.src = ichirakuRamenTeuchi
  imgIchirakuRamen.alt = "Ichiraku Ramen Teuchi"
  divText.textContent = `Founded decades ago, Ichiraku Ramen is the meeting spot for ramen lovers in Konoha.  
With a secret recipe passed down through generations, our ramen brings flavor and tradition in every bowl.`

  divWelcome.appendChild(imgIchirakuRamen)
  divWelcome.appendChild(divText)


  divContent.appendChild(divWelcome)
} 