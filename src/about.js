export function about(divContent) {
  divContent.innerHTML = ''

  const divWelcome = document.createElement("div")
  const divMessage = document.createElement("div")
  const divName = document.createElement("div")

  divWelcome.classList.add("decoration")
  
  divMessage.textContent = `About Ichiraku Ramen!`
  divName.textContent = `一楽ラーメン`
  
  divWelcome.appendChild(divMessage)
  divWelcome.appendChild(divName)

  divContent.appendChild(divWelcome)
} 