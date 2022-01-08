/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const generateDomain = () => {
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
  let domain = [".com", ".org", ".art", ".bio", ".heath"];

  window.onload = () => {
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < domain.length; k++) {
            document.querySelector("#domain").inerHTML =
              document.querySelector("#domain").innerHTML +
              pronoun[i].concat(adj[j], noun[k], domain[l], "</br>");
          }
        }
      }
    }
  };
};
