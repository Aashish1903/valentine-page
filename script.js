const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");


yesBtn.addEventListener("click", () => {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });

  document.body.innerHTML = `
    <div class="yes-screen">
      <h2>💕💕💕💕  Yayyy..!! 💕💕💕💕</h2>
      <h3>You just made my dayyy..!! 😍😍😍</h3>
    </div>
  `;
});


noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 80;
  const y = Math.random() * 80;

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "%";
  noBtn.style.top = y + "%";
});

noBtn.addEventListener("touchstart", () => {
  const x = Math.random() * 80;
  const y = Math.random() * 80;
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "%";
  noBtn.style.top = y + "%";
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 7) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

function createSunflower() {
  const sunflower = document.createElement("div");
  sunflower.classList.add("sunflower");
  sunflower.innerText = "🌻";
  sunflower.style.left = Math.random() * 100 + "vw";
  sunflower.style.animationDuration = (Math.random() * 3 + 7) + "s";

  document.body.appendChild(sunflower);

  setTimeout(() => {
    sunflower.remove();
  }, 6000);
}

setInterval(createSunflower, 400);
setInterval(createHeart, 400);



