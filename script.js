// Accessing the DOM
let btn = document.querySelector("button");
let image = document.querySelector("img");
let para = document.querySelector("p");
const tossSound = new Audio("/ts.wav");
// Styling
btn.style.fontSize = "18px";
btn.style.padding = "2px";
image.style.width = "200px";
image.style.height = "200px";
para.style.fontSize = "2rem";
para.style.fontWeight = "bold";
para.style.color = "black";

function toss() {
  let num = Math.floor(Math.random() * 10) + 1;
  console.log(num);
  tossSound.play();

  if (num <= 5) {
    image.src = "/coins/front.webp";
    para.innerText = "Tails";
  } else {
    image.src = "/coins/back.webp";
    para.innerText = "Heads";
  }

  btn.innerText = "Toss again";

  // Add the flip class to trigger the animation
  image.classList.add("flip");
  para.classList.add("fade-in");

  setTimeout(() => {
    // Remove the flip class after animation completes
    image.classList.remove("flip");
    para.classList.remove("fade-in");
  }, 500); // Adjust the delay according to your animation duration
}
btn.addEventListener("click", toss);
