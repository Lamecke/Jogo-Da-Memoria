const emojis = [
  "🐶",
  "🐶",
  "🐱",
  "🐱",
  "🦝",
  "🦝",
  "🐷",
  "🐷",
  "🐗",
  "🐗",
  "🐼",
  "🐼",
  "🐸",
  "🐸",
  "🐹",
  "🐹",
];

let openedCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuffleEmojis[i];
  document.querySelector(".game").appendChild(box);
  box.onclick = handleClick;
}

function handleClick() {
  if (openedCards.length < 2) {
    this.classList.add("boxOpen");
    openedCards.push(this);
  }

  if (openedCards.length === 2) {
    setTimeout(checkMatch, 1000);
  }
}
function checkMatch() {
  if (openedCards[0].innerHTML === openedCards[1].innerHTML) {
    openedCards[0].classList.add("boxMatch");
    openedCards[1].classList.add("boxMatch");
  } else {
    openedCards[0].classList.remove("boxOpen");
    openedCards[1].classList.remove("boxOpen");
  }
  openedCards = [];
  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    alert("Voce Venceu");
  }
}
