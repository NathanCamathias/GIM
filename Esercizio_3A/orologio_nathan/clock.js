const clockCanvas = document.getElementById('clock');
const ctx = clockCanvas.getContext('2d');
const radius = clockCanvas.width / 2;
ctx.translate(radius, radius);

// Testi delle canzoni di Dua Lipa
const songLyrics = [
    "Don't show up, don't come out",
    "I'm levitating, the Milky Way",
    "I got you, moonlight, you're my starlight",
    "If you wanna run away with me, I know a galaxy",
    "One kiss is all it takes, falling in love with me",
    "You got me feeling diamond rich",
    "I should've stayed at home, 'cause I was doing better alone",
    "Did a full 180, crazy",
    "My love is like a rocket, watch it blast off",
    "I'm a fire, I'm a mess",
    "Got a lot of what you say, but I just don't hear a thing",
    "I got new rules, I count 'em",
    "I'm dancing on my own, I make the moves up as I go",
    "Can't keep up, keep up, can't keep up, no"
];

let currentLyricIndex = 0;

function drawClock() {
    ctx.clearRect(-radius, -radius, clockCanvas.width, clockCanvas.height);
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();

    ctx.strokeStyle = '#000';
    ctx.lineWidth = radius * 0.05;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#000';
    ctx.fill();
}

function drawNumbers(ctx, radius) {
    const angStep = Math.PI / 6;
    ctx.font = `${radius * 0.15}px sans-serif`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#000';

    for (let num = 1; num <= 12; num++) {
        const ang = num * angStep;
        const x = radius * 0.75 * Math.cos(ang - Math.PI / 2);
        const y = radius * 0.75 * Math.sin(ang - Math.PI / 2);
        ctx.fillText(num, x, y);
    }
}

function drawTime(ctx, radius) {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // Ora
    hour = hour % 12;
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
    drawHand(ctx, hour, radius * 0.5, radius * 0.07);

    // Minuti
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    drawHand(ctx, minute, radius * 0.8, radius * 0.07);

    // Secondi
    second = (second * Math.PI / 30);
    drawHand(ctx, second, radius * 0.9, radius * 0.02, '#FF0000');
}

function drawHand(ctx, pos, length, width, color = '#000') {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

setInterval(drawClock, 1000);
drawClock();

// Background animation
const bgCanvas = document.getElementById('background');
const bgCtx = bgCanvas.getContext('2d');
bgCanvas.width = window.innerWidth;
bgCanvas.height = window.innerHeight;

function drawBackground() {
    bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    const text = songLyrics[currentLyricIndex];
    
    bgCtx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    bgCtx.font = 'bold 80px Arial';
    bgCtx.textAlign = 'center';
    bgCtx.textBaseline = 'middle';
    const x = bgCanvas.width / 2;
    const y = bgCanvas.height / 2;
    
    for (let i = 0; i < 10; i++) {
        bgCtx.save();
        bgCtx.translate(x, y);
        bgCtx.rotate((i / 10) * 2 * Math.PI);
        bgCtx.translate(-x, -y);
        bgCtx.fillText(text, x, y);
        bgCtx.restore();
    }
}

function updateLyric() {
    currentLyricIndex = (currentLyricIndex + 1) % songLyrics.length;
    drawBackground();
}

drawBackground();
setInterval(updateLyric, 60000); // Cambia il testo ogni minuto
