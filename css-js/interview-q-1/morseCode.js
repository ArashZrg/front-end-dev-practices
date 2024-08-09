class MorseCode {
  constructor() {
    this.morseCodeMap = {};
    this.magnifyingGlass = null;
    this.morseCode = [
      "-",
      "....",
      ".",
      "-.--",
      ".--",
      "..",
      ".-..",
      ".-..",
      "-...",
      "---",
      "--",
      "-...",
      "-",
      "....",
      ".",
      ".--",
      ".-",
      "-",
      "-.-.",
      "....",
      "-",
      "---",
      ".--",
      ".",
      ".-.",
    ];

    this.fetchMorseCodeMap()
      .then((map) => {
        this.morseCodeMap = map;
        this.initializeElements();
        this.addMouseMoveEvent();
      })
      .catch((error) => console.error("Error fetching Morse code map:", error));
  }

  async fetchMorseCodeMap() {
    const response = await fetch("../server/morseMap.json");
    return response.json();
  }

  initializeElements() {
    this.magnifyingGlass = document.getElementById("circle");
    this.createMorseCodeElements();
  }

  createMorseCodeElements() {
    const container = document.getElementById("morseCodeContainer");

    for (let i = 0; i < this.morseCode.length; i++) {
      if (this.morseCode[i] !== "") {
        const p = document.createElement("p");
        p.textContent = this.morseCode[i];
        p.id = `${i}`;
        p.classList.add("codeElement");
        container.appendChild(p);
      }
    }
  }

  decodeMorseCode(morseCode) {
    return this.morseCodeMap[morseCode] ?? morseCode;
  }

  addMouseMoveEvent() {
    document.addEventListener("mousemove", (x) => {
      this.magnifyingGlass.style.left = x.clientX;
      this.magnifyingGlass.style.top = x.clientY;
    });
  }
}

const morseCodeLogic = new MorseCode();
