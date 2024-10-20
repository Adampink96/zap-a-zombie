//dom nodes grabbed
const brainsBtn = document.getElementById("brains-btn");
const brainsDisplay = document.getElementById("brains-display");
const bpsDisplay = document.getElementById("bps-display");
const resetBtn = document.getElementById("reset");
const audio1 = document.getElementById("audio1");

async function getData() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const data = await response.json();
  console.log(data);
}
getData();

let brains = Number(localStorage.getItem("brains")) || 0;
brainsDisplay.textContent = brains;
let bps = Number(localStorage.getItem("dps")) || 0;

bpsDisplay.textContent = bps;

//logic
setInterval(function () {
  brains = brains + bps;
  brainsDisplay.textContent = brains;
  localStorage.setItem("bps", bps);
}, 1000);

//get brains when button clicked
brainsBtn.addEventListener("click", function () {
  brains = brains + 1;
  brainsDisplay.textContent = brains;
  localStorage.setItem("brains", brains);
});

const upgrades = [
  {
    id: 1,
    name: "machette",
    cost: 100,
    increase: 10,
    mp3: "sword.mp3",
  },
  {
    id: 2,
    name: "handgun",
    cost: 150,
    increase: 15,
    mp3: "handgun.mp3",
  },
  {
    id: 3,
    name: "uzi",
    cost: 140,
    increase: 20,
    mp3: "uzi.mp3",
  },
  {
    id: 4,
    name: "assult rifle",
    cost: 200,
    increase: 25,
    mp3: "assultrifle.mp3",
  },
  { id: 5, name: "grenade", cost: 500, increase: 50, mp3: "grenade.mp3" },
  {
    id: 6,
    name: "molotov",
    cost: 600,
    increase: 100,
    mp3: "molo.mp3",
  },
  {
    id: 7,
    name: "flamethrower",
    cost: 800,
    increase: 200,
    mp3: "flamethrower.mp3",
  },
  {
    id: 8,
    name: "rocket launcher",
    cost: 1000,
    increase: 500,
    mp3: "rocket.mp3",
  },
  {
    id: 9,
    name: "nuke",
    cost: 1200,
    increase: 1000,
    mp3: "nuke.mp3",
  },
  {
    id: 10,
    name: "brain power",
    cost: 1500,
    increase: 2000,
    mp3: "brainpower.mp3",
  },
];

function createUpgrades() {
  //console.log("createUpgrades");
  const container = document.getElementById("upgrade-container");
  for (let i = 0; i < upgrades.length; i = i + 1) {
    const para = document.createElement("p");
    para.textContent =
      upgrades[i].name +
      " - " +
      upgrades[i].cost +
      " - " +
      upgrades[i].increase +
      " - ";
    const btn = document.createElement("button");
    btn.textContent = "click here for  an upgrade";
    container.appendChild(para);
    container.appendChild(btn);
    btn.addEventListener("click", function () {
      if (brains >= upgrades[1].cost) {
        brains = brains - upgrades[i].cost;
        bps = bps + upgrades[i].increase;
        bpsDisplay.textContent = bps + upgrades[i].increase;
        brainsDisplay.textContent = brains - upgrades[i].cost;
        audio1.src = upgrades[i].mp3;
        audio1.play();
        console.log("brains:", brains, "bps", bps);
        localStorage.getItem("bpsDisplay", bpsDisplay);
        localStorage.getItem("bps", bps);
        localStorage.setItem("brains", brains);
        localStorage.setItem("bps", bps);
      } else {
        console.log("not enough brains");
        alert("not enough brains, step your game up");
      }
    });
  }
}
createUpgrades();

resetBtn.addEventListener("click", function () {
  brains = 0;
  bps = 0;
  bpsDisplay.textContent = 0;

  localStorage.clear("brains", brains, "bps", bps, "bpsDisplay", bpsDisplay);
});
