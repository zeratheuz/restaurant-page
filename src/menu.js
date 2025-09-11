export function menu(divContent) {
  divContent.innerHTML = ''

  const divWelcome = document.createElement("div")
  const divMessage = document.createElement("div")
  const divName = document.createElement("div")

  divWelcome.classList.add("decoration")
  
  divMessage.textContent = `Menu of Ichiraku Ramen!`
  divName.textContent = `一楽ラーメン`
  
  divWelcome.appendChild(divMessage)
  divWelcome.appendChild(divName)

  divContent.appendChild(divWelcome)
} 