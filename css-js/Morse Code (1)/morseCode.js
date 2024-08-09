class MorseCode {
  constructor(morseCode) {
    this.morseCodeMap = {};
    this.magnifyingGlass = null;
    this.morseCode = [morseCode];
    this.fetchMorseCodeMap();
    this.initializeElements();
  }

  // correct
  async fetchMorseCodeMap() {
    let response = await fetch("../server/morseMap.json");
    this.morseCodeMap = await response.json();
  }

  // correct
  initializeElements() {
    this.magnifyingGlass = document.getElementById("circle");
    if (this.magnifyingGlass) {
      this.addMouseMoveEvent = this.addMouseMoveEvent.bind(this);
      document.addEventListener("mousemove", this.addMouseMoveEvent);
    }
    this.createMorseCodeElements();
  }

  //correct
  createMorseCodeElements() {
    let morse_code_split = this.morseCode[0].split(" ");
    let div = document.getElementById("morseCodeContainer");
    let codeElements = document.querySelectorAll(".codeElement");
    codeElements.forEach((element) => element.remove());

    for (let i = 0; i < morse_code_split.length; i++) {
      let p = document.createElement("p");
      p.className = "codeElement";
      let joinedCode = morse_code_split[i];
      let text = document.createTextNode(joinedCode);
      p.appendChild(text);
      div.appendChild(p);
    }
  }

  addMouseMoveEvent(e) {
    this.magnifyingGlass.style.left = `${
      e.clientX - this.magnifyingGlass.offsetWidth / 2
    }px`;
    this.magnifyingGlass.style.top = `${
      e.clientY - this.magnifyingGlass.offsetHeight / 2
    }px`;

    const glassRect = this.magnifyingGlass.getBoundingClientRect();
    const elements = document.elementsFromPoint(
      glassRect.left + glassRect.width / 2,
      glassRect.top + glassRect.height / 2
    );

    const codeElement = elements.find((el) =>
      el.classList.contains("codeElement")
    );

    if (codeElement) {
      this.decodeMorseCode();
    } else {
      this.createMorseCodeElements();
    }
  }

  decodeMorseCode() {
    let morse_code_split = this.morseCode[0].split(" ");
    let div = document.getElementById("morseCodeContainer");
    let codeElements = document.querySelectorAll(".codeElement");
    codeElements.forEach((element) => element.remove());

    for (let i = 0; i < morse_code_split.length; i++) {
      let code = this.morseCodeMap[morse_code_split[i]];
      let p = document.createElement("p");
      p.className = "codeElement";
      p.innerHTML = code;
      div.appendChild(p);
    }
  }
}

const morseCodeLogic = new MorseCode("... ..- -.-. ... . ...");
