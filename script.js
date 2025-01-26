const wishes = [
  "🌟 Chúc mừng sinh nhật bé Ming 🌟",
  "🎂 Chúc bé qua tuổi mới 🎂",
  "✨ Ngày càng học giỏi ✨",
  "✨ Ngày càng xinh đẹp ✨",
  "Tự tin và tích cực hơn nữa ✨✨✨",
  "Mãi vui tươi hehehehee",
  "💖 Anh yêu em 💖"

];

function createStars() {
  const starsContainer = document.createElement("div");
  starsContainer.className = "stars";
  for (let i = 0; i < 200; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty("--duration", `${Math.random() * 3 + 1}s`);
    starsContainer.appendChild(star);
  }
  document.body.appendChild(starsContainer);
}

function createEmoji() {
  const emojis = ["💖", "⭐", "✨", "🎉", "🎂", "🎈"];
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * window.innerWidth + "px";
  emoji.style.top = "-50px";
  document.body.appendChild(emoji);
  const animation = emoji.animate(
    [
      {
        transform: "translateY(0) rotate(0deg)"
      },
      {
        transform: `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 360}deg)`
      }
    ],
    {
      duration: 3000,
      easing: "linear"
    }
  );
  animation.onfinish = () => emoji.remove();
}



let emojiInterval;
async function typeWriter(text) {
  const wishesElement = document.getElementById("wishes");
  wishesElement.style.opacity = 1;
  wishesElement.innerHTML = "";
  wishesElement.className = "wishes neon-text";
  for (let char of text) {
    wishesElement.innerHTML += char;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

document.getElementById("startBtn").addEventListener("click", async () => {
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("wishesContainer").classList.remove("hidden");

  emojiInterval = setInterval(createEmoji, 300);
  for (let wish of wishes) {
    await typeWriter(wish);
  }

  const cakeWrapper = document.getElementById("cake");
  cakeWrapper.style.display = "block"; // Hiển thị bánh kem
  cakeWrapper.classList.remove("hidden"); // Loại bỏ lớp hidden nếu có
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Đợi một chút trước khi hiển thị bánh kem

});


createStars();

let honey = document.getElementById("body");
function fullScreen() {
  honey.requestFullscreen();
}
