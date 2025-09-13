import ichirakuRamenWithMisoTonkotsuSoup from "./IchirakuRamenwithMisoTonkotsuSoup.webp"
export function menu(divContent) {
  divContent.innerHTML = ''

  const divMenu = document.createElement("div")
  const divMessage = document.createElement("div")
  const divName = document.createElement("div")

  divMenu.classList.add("decoration")
  divMessage.classList.add("title")

  divName.textContent = `一楽ラーメン`
  divMessage.textContent = `Menu:`

  divMenu.appendChild(divName)
  divMenu.appendChild(divMessage)

  divContent.appendChild(divMenu)

  const divDish = document.createElement("div")

  const divDishName = document.createElement("div")
  divDishName.classList.add("text")
  divDishName.textContent = "Ichiraku Ramen with Miso Tonkotsu Soup:"

  const imgRamenMisoTonkotsuSoup = document.createElement("img")
  imgRamenMisoTonkotsuSoup.src = ichirakuRamenWithMisoTonkotsuSoup
  imgRamenMisoTonkotsuSoup.alt = "Ichiraku Ramen With Miso Tonkotsu Soup"

  const description = document.createElement("p")
  description.textContent += "The most popular ramen dish at this yatai offers a milder soup than a regular tonkotsu soup due to the addition of miso."

  const buttonPrice = document.createElement("button")
  buttonPrice.textContent = "Price: JP¥1210"
  description.appendChild(buttonPrice)

  divDish.appendChild(divDishName)
  divDish.appendChild(imgRamenMisoTonkotsuSoup)
  divDish.appendChild(description)

  divMenu.appendChild(divDish)
} 