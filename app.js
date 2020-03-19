
let karl = {
  health: 100,
}

let attackChoice = {
  "slap": 7,
  "kick": 12,
  "wetWilly": 50,
}

function karlDamage(playerChoice) {
  let slapDamage = attackChoice[playerChoice]
  let newKarlHealth = karl.health - slapDamage
  karl.health = newKarlHealth
  console.log(karl.health)
  document.getElementById("healthBar").style.width = karl.health + "%"
  if (karl.health <= 50){
    document.getElementById("btn-wet-willy").classList.remove("hidden")
  }
  if (karl.health <= 0) {
    document.getElementById("healthBar").style.width = "0%"
    document.getElementById("karl-img").src = "https://upload.wikimedia.org/wikipedia/commons/9/91/Karlmarxtomb.jpg"

  }
}