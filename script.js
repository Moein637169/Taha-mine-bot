
function predict() {
  const bombCount = parseInt(document.getElementById('bombCount').value);
  const grid = document.getElementById('grid');
  const message = document.getElementById('message');
  grid.innerHTML = "";
  message.innerText = "";

  if (isNaN(bombCount) || bombCount < 2 || bombCount > 25) {
    message.innerText = "تعداد بمب باید بین 2 تا 25 باشد.";
    return;
  }

  let cells = Array(25).fill("💎");
  let placed = 0;
  while (placed < bombCount) {
    let rand = Math.floor(Math.random() * 25);
    if (cells[rand] !== "💣") {
      cells[rand] = "💣";
      placed++;
    }
  }

  cells.forEach(c => {
    const div = document.createElement("div");
    div.className = "cell";
    div.innerText = c;
    grid.appendChild(div);
  });
}
