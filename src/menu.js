import ichirakuRamenWithMisoTonkotsuSoup from "./ichirakuRamenwithMisoTonkotsuSoup.webp"
import ichirakuRamenTonkotsuSoup from "./ichirakuRamenTonkotsuSoup.webp"
import akatsukiRamen from "./akatsukiRamen.png"
import takoyakiTamagoMakimono from "./takoyakiTamagoMakimono.webp"
import setSasukeFavorites from "./setSasukeFavorites.png"
import borutoLightningHamburger from "./borutoLightningHamburger.webp"
import mitsukiRamuneIceCream from "./mitsukiRamuneIceCream.png"

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

  const dishes = [
    {
      name: "Ichiraku Ramen with Miso Tonkotsu Soup:",
      imgSrc: ichirakuRamenWithMisoTonkotsuSoup,
      imgAlt: "Ichiraku Ramen With Miso Tonkotsu Soup",
      description: "The most popular ramen dish at this yatai offers a milder soup than a regular tonkotsu soup due to the addition of miso.",
      price: "Price: JP¥1210"
    },
    {
      name: "Ichiraku Ramen with Tonkotsu Soup:",
      imgSrc: ichirakuRamenTonkotsuSoup,
      imgAlt: "Ichiraku Ramen with Tonkotsu Soup",
      description: "A classic dish of Ichiraku Ramen Shop. Its soup is very rich and it is topped with pieces of thick roasted pork and uzumaki spiral-designed kamaboko (boiled fish paste) and nori (dried seaweed) with Shinobizato logomark, just to name a few.",
      price: "Price: JP¥1100"
    },
    {
      name: "Akatsuki Ramen:",
      imgSrc: akatsukiRamen,
      imgAlt: "Akatsuki Ramen",
      description: "An original Ichiraku Ramen dish only served at Nijigen no Mori. This ramen belongs to Akatsuki, an organization appearing in the NARUTO anime, wearing an outfit designed with a red cloud on a black background. This bowl of ramen depicts this color combination with two kinds of chili oil and nori seaweed. Akatsuki fans cannot miss this! Half-boiled egg (one): 110 yen. Thick pieces of roast pork (three): 275 yen. Nori seaweed with Uzumaki design (three): 110 yen.",
      price: "Price: JP¥1265"
    },
    {
      name: "Takoyaki Tamago Makimono (Takoyaki Egg Scroll):",
      imgSrc: takoyakiTamagoMakimono,
      imgAlt: "Takoyaki Tamago Makimono (Takoyaki Egg Scroll)",
      description: "Nestled deep within Nijigen no Mori's forest, this restaurant offers delicious meals made with locally sourced ingredients from Awaji Island. You'll also find a variety of dishes from the world of NARUTO. As a special bonus, every NARUTO-themed dish comes with a collectible coaster featuring an anime character for you to take home! Located conveniently near the NARUTO & BORUTO SHINOBI-ZATO theme park, it's the perfect spot to stop by after exploring.",
      price: "Price: JP¥880"
    },
    {
      name: "Set of Sasuke's Favorites (set of onigiri):",
      imgSrc: setSasukeFavorites,
      imgAlt: "Set of Sasuke's Favorites (set of onigiri)",
      description: "One onigiri, a rice ball, contains bonito flakes and is covered with sesame seeds, and another one is seasoned with salt.",
      price: "Price: JP¥770"
    },
    {
      name: "BORUTO's Lightning Hamburger:",
      imgSrc: borutoLightningHamburger,
      imgAlt: "BORUTO's Lightning Hamburger",
      description: "A hamburger appears in the anime and this dish lets you feel the world of Uzumaki BORUTO.",
      price: "Price: JP¥1320"
    },
    {
      name: "Mitsuki's Ramune Ice Cream:",
      imgSrc: mitsukiRamuneIceCream,
      imgAlt: "Mitsuki's Ramune Ice Cream",
      description: "Contrary to the mysterious aura of the character it's inspired by, the nostalgic Ramune ice cream surprises with a delightful blend of sweet chocolate sauce and whipped cream. The result is a crisp and refreshing treat that perfectly balances light sweetness with a cooling burst of flavor.",
      price: "Price: JP¥660"
    }
  ];

  class Dish {
    constructor({ name, imgSrc, imgAlt, description, price }) {
      this.name = name
      this.imgSrc = imgSrc
      this.imgAlt = imgAlt
      this.description = description
      this.price = price
    }

    create() {
      const divDish = document.createElement("div")
      divDish.classList.add("dish")

      const divDishName = document.createElement("div")
      divDishName.classList.add("text")
      divDishName.textContent = this.name

      const imgRamenMisoTonkotsuSoup = document.createElement("img")
      imgRamenMisoTonkotsuSoup.src = this.imgSrc
      imgRamenMisoTonkotsuSoup.alt = this.imgAlt

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
    dishes.forEach(dish => {
      const newDish = new Dish(dish)
      divMenu.appendChild(newDish.create())
    });
  }

  addDishes(dishes)
}