/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let result = [];

  for (let p = 0; p < pronoun.length; p++) {
    pronoun[p];
    for (let a = 0; a < adj.length; a++) {
      adj[a];
      for (let n = 0; n < noun.length; n++) {
        noun[n];
        console.log(pronoun[p] + adj[a] + noun[n]);
        result.push(pronoun[p] + adj[a] + noun[n] + ".com");
      }
    }
  }

  let resultFinal = document.getElementById("result");

  for (let i = 0; i < result.length; i++) {
    let url = result[i];
    let item = document.createElement("li");
    item.innerText = url;
    resultFinal.appendChild(item);
  }
};
