import ichirakuRamenWithMisoTonkotsuSoup from "./IchirakuRamenwithMisoTonkotsuSoup.webp"
export function menu(divContent) {
  divContent.innerHTML = ''

  const divMenu = document.createElement("div")
  const divMessage = document.createElement("div")
  const divName = document.createElement("div")

  divMenu.classList.add("decoration")
  
  divName.textContent = `一楽ラーメン`
  divMessage.textContent = `Menu:`

  divMenu.appendChild(divName)
  divMenu.appendChild(divMessage)
  
  const divDishName = document.createElement("div")
  divDishName.classList.add("text")
  divDishName.textContent = "Ichiraku Ramen with Miso Tonkotsu Soup:"

  const imgRamenMisoTonkotsuSoup = document.createElement("img")
  imgRamenMisoTonkotsuSoup.src = ichirakuRamenWithMisoTonkotsuSoup
  imgRamenMisoTonkotsuSoup.alt = "Ichiraku Ramen With Miso Tonkotsu Soup"
  
  divMenu.appendChild(divDishName)
  divMenu.appendChild(imgRamenMisoTonkotsuSoup)

  divContent.appendChild(divMenu)
} 