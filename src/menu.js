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

  class Dish {
    constructor({name, imgSrc, imgAlt, description, price}) {
      this.name = name
      this.imgSrc = imgSrc
      this.imgAlt = imgAlt
      this.description = description
      this.price = price
    }

    create() {
      const divDish = document.createElement("div")

      const divDishName = document.createElement("div")
      divDishName.classList.add("text")
      divDishName.textContent = this.name

      const imgRamenMisoTonkotsuSoup = document.createElement("img")
      imgRamenMisoTonkotsuSoup.src = ichirakuRamenWithMisoTonkotsuSoup
      imgRamenMisoTonkotsuSoup.alt = this.alt

      const description = document.createElement("p")
      description.textContent = this.description

      const buttonPrice = document.createElement("button")
      buttonPrice.textContent = this.price
      description.appendChild(buttonPrice)

      divDish.appendChild(divDishName)
      divDish.appendChild(imgRamenMisoTonkotsuSoup)
      divDish.appendChild(description)

      return divDish
    }
  }

  function addDishes(dishes) {
    
  }

  divMenu.appendChild(divDish)
}