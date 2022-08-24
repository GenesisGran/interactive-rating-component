const body = document.body;
const main = document.querySelector(".container__default");
const thankYou = document.querySelector(".container__thankYou");
var value = 0;
thankYou.remove();

const numRating = document.querySelectorAll("li button");

function changeRating(e) {
  value = e.dataset.value;
}
function toogleThankYou() {
  if (value !== 0) {
    main.remove();
    body.append(thankYou);
    const rating = document.querySelector(".rating");
    rating.innerText = "You selected " + value + " out of 5";
  }
}
