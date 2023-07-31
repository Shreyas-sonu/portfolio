let page = document.getElementById("portfolio-contents");
let anime = document.getElementById("anime-block");

console.log("attached");
const showUp = () => {
  page.style.display = "block";
  anime.remove();
  console.log("showing");
};
setTimeout(showUp, 5500);
