import { ProfileController } from "./controllers/ProfileController.js";
import { ProjectController } from "./controllers/ProjectController.js";
import { CTFController } from "./controllers/CTFController.js";

// Wire up all three MVC slices
ProfileController.init();
ProjectController.init();
CTFController.init();

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Hero terminal: types out a short intro sequence once on load.
const script = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "aslam rofi — developer & ctf player" },
  { type: "cmd", text: "cat interests.txt" },
  { type: "out", text: "web exploitation, crypto, forensics, building tools" },
  { type: "cmd", text: "./run.sh --hire-me" },
  { type: "out", text: "[ok] resume sent. talk soon." }
];

const body = document.getElementById("terminal-body");
let lineIndex = 0;

function typeLine() {
  if (lineIndex >= script.length) return;
  const item = script[lineIndex];
  const el = document.createElement("p");
  el.className = "line";
  body.appendChild(el);

  if (item.type === "cmd") {
    let i = 0;
    const prefix = `<span class="prompt-sym">$</span> `;
    const type = () => {
      el.innerHTML = prefix + item.text.slice(0, i) + '<span class="caret"></span>';
      i++;
      if (i <= item.text.length) {
        setTimeout(type, 32);
      } else {
        el.innerHTML = prefix + item.text;
        lineIndex++;
        setTimeout(typeLine, 260);
      }
    };
    type();
  } else {
    el.innerHTML = `<span class="out">${item.text}</span>`;
    lineIndex++;
    setTimeout(typeLine, 380);
  }
}

// Respect reduced-motion preference: render instantly instead of animating.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduceMotion) {
  body.innerHTML = script.map(item =>
    item.type === "cmd"
      ? `<p class="line"><span class="prompt-sym">$</span> ${item.text}</p>`
      : `<p class="line"><span class="out">${item.text}</span></p>`
  ).join("");
} else {
  typeLine();
}
