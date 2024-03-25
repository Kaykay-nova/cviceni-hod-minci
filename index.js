const padlOrel = Math.random() < 0.5;
const result = document.querySelector(".vysledek")
const coin = document.querySelector(".mince")

if (padlOrel) {
  result.textContent = "Padl orel"
  coin.classList.add("mince--orel")
} else {
  result.textContent = "Padla panna"
  coin.classList.add("mince--panna")
};




