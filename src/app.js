import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#generator").addEventListener("click", () => {
    document.querySelector("#domain").innerHTML = generateDomain();
  });
};

let generateDomain = () => {
  let pronoun = ["the", "our", "i", "you", "he", "she", "it", "we", "they"];
  let adj = [
    "great",
    "big",
    "bad",
    "clean",
    "cold",
    "full",
    "happy",
    "hard",
    "heavy"
  ];
  let noun = [
    "jogger",
    "racoon",
    "cinema",
    "music",
    "paintin",
    "dance",
    "poetry",
    "books",
    "movies"
  ];
  let dom = [".com", ".org", ".art", ".bio", ".heath"];
  return (
    randomElement(pronoun) +
    randomElement(adj) +
    randomElement(noun) +
    randomElement(dom)
  );
};

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
