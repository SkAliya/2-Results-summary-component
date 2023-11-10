// fetch('https://server.com/data.json')
const data = [
  {
    category: "Reaction",
    score: 80,
    color: "#ff5757",
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    color: "#ffb01f",
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    color: "#00bd91",
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    color: "#1125d4",
    icon: "./assets/images/icon-visual.svg",
  },
];

const par = document.querySelector(".sections");
data.map((current, i) => {
  let html = `<li class="section">
  <div class="set-1">
      <img
        src=${current.icon}
        alt="Icon Image Of Reaction"
        />
        <p class="bigger-text">${current.category}</p>
        </div>
        <p class="bigger-text2"><span class="marks">${current.score} </span>/ 100</p>
        </li>`;
  par.insertAdjacentHTML("beforeend", html);
  const data2 = document.querySelectorAll(".bigger-text");
  data2.forEach((curr, ind) => {
    if (i === ind) curr.style.color = current.color;
  });

  const bgColor = document.querySelectorAll(".section");
  bgColor.forEach((curr, ind) => {
    let col;
    const hexToRgb = (hex) =>
      hex
        .replace(
          /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
          (m, r, g, b) => "#" + r + r + g + g + b + b
        )
        .substring(1)
        .match(/.{2}/g)
        .map((x) => parseInt(x, 16));

    col = hexToRgb(current.color);
    if (i === ind)
      curr.style.backgroundColor = `rgba(${col[0]}, ${col[1]},${col[2]}, 0.112)`;
  });
});
