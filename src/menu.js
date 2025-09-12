import ichirakuRamenWithMisoTonkotsuSoup from "src/IchirakuRamenwithMisoTonkotsuSoup.webp"
export function menu(divContent) {
  divContent.innerHTML = ''

  const divWelcome = document.createElement("div")
  const divMessage = document.createElement("div")
  const divName = document.createElement("div")

  divWelcome.classList.add("decoration")
  
  divName.textContent = `一楽ラーメン`
  divMessage.textContent = `Menu:`

  const imgRamenMisoTonkotsuSoup = document.createElement("img")
  imgRamenMisoTonkotsuSoup.src = ichirakuRamenWithMisoTonkotsuSoup
  imgRamenMisoTonkotsuSoup.alt = "Ichiraku Ramen With Miso Tonkotsu Soup"
  
  divWelcome.appendChild(divName)
  divWelcome.appendChild(divMessage)

  divContent.appendChild(divWelcome)
} 