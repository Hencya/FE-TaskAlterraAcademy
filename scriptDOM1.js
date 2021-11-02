const fillMe = document.getElementById("fill-me");
fillMe.innerHTML = "HALO!";

const changeAllOfMe = document.getElementsByClassName("change-all-of-me");
// console.log(changeAllOfMe);
for (let i = 0; i < changeAllOfMe.length; i++) {
  changeAllOfMe[i].innerHTML = "HALO JUGA!";
}

const containerH2 = document.querySelector("#container h2");
containerH2.innerHTML = "Apa Kabar!";

const main = document.getElementById("main");
main.innerHTML =
  "<button>Ini Button</button> <button>Ini Juga Button</button> ";
