document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const bgMusic = document.getElementById("bgMusic");
  const rejectMusic = document.getElementById("rejectMusic");
  const beeImg = document.getElementById("mainBee");
  const mainTitle = document.getElementById("mainTitle");
  const btnGroup = document.getElementById("btnGroup");
  const world = document.getElementById("world");
  const scrollWrapper = document.getElementById("scroll-wrapper");
  const lyricsContainer = document.getElementById("lyrics-container");

  const lyricsData = [
    { time: 0.0, text: "" },
    { time: 19.0, text: "KISS ME" },
    { time: 21.0, text: "" },
    { time: 22.0, text: "OUT OF THE BEARDED BARLEY" },
    { time: 24.0, text: "" },
    { time: 25.0, text: "NIGHTLY" },
    { time: 26.0, text: "" },
    { time: 27.0, text: "BESIDE THE GREEN, GREEN GRASS" },
    { time: 28.0, text: "" },
    { time: 29.0, text: "SWING, SWING" },
    { time: 30.0, text: "" },
    { time: 31.0, text: "SWING THE SPINNING STEP" },
    { time: 33.0, text: "" },
    { time: 34.0, text: "YOU WEAR THOSE SHOES<br>AND I WILL WEAR THAT DRESS" },
    { time: 36.0, text: "" },
    { time: 37.0, text: "OH" },
    { time: 38.0, text: "" },
    { time: 39.0, text: "KISS ME" },
    { time: 40.0, text: "" },
    { time: 41.0, text: "ME BENEATH THE MILKY TWILIGHT" },
    { time: 42.0, text: "" },
    { time: 43.0, text: "LEAD ME" },
    { time: 44.0, text: "" },
    { time: 45.0, text: "OUT ON THE MOONLIT FLOOR" },
    { time: 48.0, text: "" },
    { time: 49.0, text: "LIFT YOUR OPEN HAND" },
    { time: 50.0, text: "" },
    {
      time: 51.0,
      text: "STRIKE UP THE BAND<br>AND MAKE THE FIREFLIES DANCE,<br>SILVER MOON'S SPARKLING",
    },
    { time: 57.0, text: "" },
    { time: 59.0, text: "SO KISS ME" },
    { time: 68.0, text: "" },
    { time: 70.0, text: "KISS ME" },
    { time: 71.0, text: "" },
    { time: 72.0, text: "DOWN BY THE BROKEN TREE HOUSE" },
    { time: 74.0, text: "" },
    { time: 75.0, text: "SWING ME" },
    { time: 76.0, text: "" },
    { time: 77.0, text: "UPON ITS HANGING TIRE" },
    { time: 79.0, text: "" },
    { time: 80.0, text: "BRING, BRING" },
    { time: 81.0, text: "" },
    {
      time: 82.0,
      text: "BRING YOUR FLOWERED HAT<br>WE'LL TAKE THE TRAIL MARKED ON YOUR <br>FATHER'S MAP",
    },
    { time: 87.0, text: "" },
    { time: 88.0, text: "OH" },
    { time: 89.0, text: "" },
    { time: 90.0, text: "KISS ME" },
    { time: 91.0, text: "" },
    { time: 92.0, text: "BENEATH THE MILKY TWILIGHT<br>LEAD ME" },
    { time: 95.0, text: "" },
    { time: 96.0, text: "OUT ON THE MOONLIT FLOOR" },
    { time: 98.0, text: "" },
    { time: 99.0, text: "LIFT YOUR OPEN HAND" },
    { time: 100.0, text: "" },
    {
      time: 101.0,
      text: "STRIKE UP THE BAND<br>AND MAKE THE FIREFLIES DANCE,<br>SILVER MOON'S SPARKLING",
    },
    { time: 106.0, text: "" },
    { time: 109.0, text: "SO KISS ME" },
    { time: 120.0, text: "" },
  ];

  const TIME_OFFSET = 0.0;

  let lastText = "";

  bgMusic.addEventListener("timeupdate", () => {
    const currentTime = bgMusic.currentTime - TIME_OFFSET;
    let currentText = "";
    for (let i = 0; i < lyricsData.length; i++) {
      if (currentTime >= lyricsData[i].time) {
        currentText = lyricsData[i].text;
      } else {
        break;
      }
    }

    if (lastText !== currentText) {
      lastText = currentText;
      if (currentText === "") {
        lyricsContainer.style.opacity = "0";
      } else {
        lyricsContainer.innerHTML = currentText;
        lyricsContainer.style.opacity = "1";
      }
    }
  });

  let noScale = 1;
  let yesScale = 1;
  let timeoutId = null;

  noBtn.addEventListener("click", () => {
    noScale -= 0.1;
    yesScale += 0.2;

    noBtn.style.transform = `scale(${noScale})`;
    yesBtn.style.transform = `scale(${yesScale})`;

    const texts = [
      "are you sure?",
      "really sure?",
      "think again!",
      "last chance!",
      "surely not?",
      "you might regret this!",
      "give it another thought!",
      "are you absolutely certain?",
      "have a heart!",
      "don't be so cold!",
    ];

    noBtn.innerHTML = texts[Math.floor(Math.random() * texts.length)];

    beeImg.src = "media/rejection.webp";

    rejectMusic.currentTime = 0;
    rejectMusic.volume = 0.5;
    rejectMusic.play().catch((e) => console.log("Audio play failed:", e));

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      beeImg.src = "media/02ce7945c01a4d62f78e480ca9c51f00.gif";
    }, 1500);
  });

  yesBtn.addEventListener("click", () => {
    bgMusic.volume = 0.5;
    bgMusic.play().catch((e) => console.log("Audio play failed:", e));

    mainTitle.innerHTML = `YAYYY! 🥰<br><span style="font-size: 1.5rem; font-weight: 500;">Enjoy your gift! 🎁</span>`;
    btnGroup.style.display = "none";

    setTimeout(() => {
      mainTitle.style.transition = "opacity 1s ease";
      mainTitle.style.opacity = 0;

      setTimeout(() => {
        world.style.transform = "translate(0, -25vh)";

        setTimeout(() => {
          scrollWrapper.classList.add("flying");
        }, 2000);
      }, 1000);
    }, 1500);
  });
});
