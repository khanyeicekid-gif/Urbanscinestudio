function drawCanvas(id, title, icon) {

  const canvas = document.getElementById(id);

  const ctx = canvas.getContext("2d");

  // Background

  ctx.fillStyle = "#1a1a1a";

  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Neon border

  ctx.strokeStyle = "orange";

  ctx.lineWidth = 3;

  ctx.strokeRect(5, 5, canvas.width - 10, canvas.height - 10);

  // Icon

  ctx.fillStyle = "orange";

  ctx.font = "60px Arial";

  ctx.textAlign = "center";

  ctx.fillText(icon, canvas.width / 2, 110);

  // Title

  ctx.fillStyle = "#ffffff";

  ctx.font = "18px Arial";

  ctx.fillText(title, canvas.width / 2, 160);

}

// Draw canvas images

drawCanvas("canvas1", "Leakage Repair", "🔧");

drawCanvas("canvas2", "Toilet Installation", "🚽");

drawCanvas("canvas3", "Geyser Installation", "🔥");

console.log("Canvas gallery loaded successfully ✅");