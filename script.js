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
  const popoutSubtitle = document.getElementById("popout-subtitle");
  const finalMessage = document.getElementById("final-message");
  const bee2Wrapper = document.getElementById("bee2Wrapper");
  const bee2 = document.getElementById("bee2");
  const finalBtnGroup = document.getElementById("finalBtnGroup");
  const ewBtn = document.getElementById("ewBtn");
  const kissyBtn = document.getElementById("kissyBtn");
  const kissRejectMusic = document.getElementById("kissRejectMusic");
  const mainBeeWrapper = document.getElementById("mainBeeWrapper");

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
    { time: 109.0, text: "SO KISS ME?..." },
    { time: 120.0, text: "" },
  ];

  const popoutData = [
    { start: 10.0, end: 16.0, text: "<span style='color: #eab308;'>Bees</span>— they remind me of you." },
    { start: 19.0, end: 27.0, text: "I'm thankful they exist, not simply because of their contributions to our ecosystem, but also because they gave you something to adore, something you end up telling me about." },
    { start: 30.0, end: 35.0, text: "Funny how <span style='color: #eab308;'>bees</span> somehow helped me fall in love" },
    { start: 39.0, end: 49.0, text: "I love the way you observe things, you deeply study and know them. And you even jokingly feel for them sometimes, \"what if hurt yung hito sa sinasabi mo\" HOW ADORABLE" },
    { start: 52.0, end: 56.0, text: "AT KAHIT AKO NAG TRA-TRANSITION NA SA KUNG ANO YUNG MINAMAHAL KO SAYO GRABE" },
    { start: 70.0, end: 80.0, text: "Thank you for changing my perspective about things, I can say I can see better now because of you. SALAMIN YARRRRRRRN GAGAAHAHAHAHAHA" },
    { start: 82.0, end: 90.0, text: "I used to always think nothing in this lifetime would matter in the end" },
    { start: 92.0, end: 99.0, text: "but you showed me the great relevance of things, regardless if big or small. you notice the unnoticed, love the unloved." },
    { start: 102.0, end: 115.0, text: "When I look at the furthest future, all I see is void — nothingness, just an empty strong shade of black, but you reminded me that I am still living in the present, where things do still matter, where you and I still exist." }
  ];

  const TIME_OFFSET = 0.0;

  let lastText = "";
  let isTwilight = false;
  const twilightOverlay = document.getElementById("twilight-overlay");
  let finalSceneTriggered = false;

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

    if (currentTime >= 109.0 && !finalSceneTriggered) {
      finalSceneTriggered = true;
      scrollWrapper.style.animationPlayState = "paused";

      bee2Wrapper.style.display = "block";

      // Force hardware reflow to flush the new transform start state
      void bee2Wrapper.offsetWidth;

      bee2Wrapper.style.transform = "translateX(0)";

      setTimeout(() => {
        finalBtnGroup.style.display = "flex";
      }, 2000);
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

    // Maintain twilight through "OUT ON THE MOONLIT FLOOR"
    isTwilight =
      (currentTime >= 41.0 && currentTime < 48.0) ||
      (currentTime >= 92.0 && currentTime < 98.0);

    if (isTwilight) {
      twilightOverlay.style.opacity = "1";
      lyricsContainer.classList.add("twilight-text");
    } else {
      twilightOverlay.style.opacity = "0";
      lyricsContainer.classList.remove("twilight-text");
    }

    let currentPopout = "";
    for (let i = 0; i < popoutData.length; i++) {
      if (currentTime >= popoutData[i].start && currentTime <= popoutData[i].end) {
        currentPopout = popoutData[i].text;
        break;
      }
    }

    if (popoutSubtitle.innerHTML !== currentPopout) {
      if (currentPopout === "") {
        popoutSubtitle.style.opacity = "0";
      } else {
        popoutSubtitle.innerHTML = currentPopout;
        popoutSubtitle.style.opacity = "1";
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
      "umay sayo",
      "HUUUYYY",
      "Babe naman e",
      "last chance!",
      "isa..",
      "ge ha",
      "give it another thought!",
      "hayek lang",
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

    document.getElementById("yurikBadge").style.opacity = "1";

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

  let ewScale = 1;
  let kissyScale = 1;
  let finalTimeoutId = null;

  ewBtn.addEventListener("click", () => {
    ewScale -= 0.1;
    kissyScale += 0.2;

    ewBtn.style.transform = `scale(${ewScale})`;
    kissyBtn.style.transform = `scale(${kissyScale})`;

    const texts = [
      "umay sayo",
      "HUUUYYY",
      "Babe naman e",
      "last chance!",
      "isa..",
      "ge ha",
      "give it another thought!",
      "hayek lang",
      "have a heart!",
      "don't be so cold!",
    ];

    ewBtn.innerHTML = texts[Math.floor(Math.random() * texts.length)];

    beeImg.src = "media/kissreject.webp";
    kissRejectMusic.currentTime = 0;
    kissRejectMusic.play().catch((e) => console.log(e));

    if (finalTimeoutId) {
      clearTimeout(finalTimeoutId);
    }

    finalTimeoutId = setTimeout(() => {
      beeImg.src = "media/02ce7945c01a4d62f78e480ca9c51f00.gif";
    }, 1500);
  });

  kissyBtn.addEventListener("click", () => {
    mainBeeWrapper.style.transform = "translateX(20px)";
    bee2Wrapper.style.transform = "translateX(-20px)";
    finalBtnGroup.style.display = "none";

    setTimeout(() => {
      scrollWrapper.style.animationPlayState = "running";
    }, 1000);

    setTimeout(() => {
      finalMessage.style.display = "flex";
      finalMessage.innerHTML = `<p>The moment our paths crossed, something inside me started burning once more, I feel life more deeply now, pain hurts more, food tastes better, music sounds deeper, and love feels real.</p><br><p>I'm hoping that I get to spend many many more months with you.</p><br><p style="font-weight: 600; font-size: 2rem; margin-top: 20px;">I LOVE YOU LILIANE</p>`;

      void finalMessage.offsetWidth;
      finalMessage.style.opacity = "1";
    }, 5000);

    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100vw";
    container.style.height = "100vh";
    container.style.pointerEvents = "none";
    container.style.zIndex = "50";
    document.body.appendChild(container);

    for (let i = 0; i < 40; i++) {
      setTimeout(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "absolute";
        heart.style.left = 45 + Math.random() * 10 + "vw";
        heart.style.bottom = "50vh";
        heart.style.fontSize = Math.random() * 2 + 1 + "rem";
        heart.style.opacity = "1";
        heart.style.transition = "all 2s ease-out";
        container.appendChild(heart);

        void heart.offsetWidth;

        const xMove = (Math.random() - 0.5) * 200;
        heart.style.transform = `translate(${xMove}px, -60vh) scale(1.5)`;
        heart.style.opacity = "0";

        setTimeout(() => heart.remove(), 2500);
      }, i * 150);
    }
  });
});
