const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 5 - 2.5;
        this.speedY = Math.random() * 5 - 2.5;
        this.color = color;
        this.alpha = 1;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 0.02;
        if (this.alpha < 0) this.alpha = 0;
    }
    draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

function createFirework(x, y) {
    const colors = ['cyan', 'magenta', 'yellow', 'lime', 'white'];
    let color = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < 50; i++) {
        fireworks.push(new Particle(x, y, color));
    }
}

canvas.addEventListener('click', (e) => {
    createFirework(e.x, e.y);
});

function animate() {
    ctx.fillStyle = 'rgba(0,0,0,0.15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((p, index) => {
        p.update();
        p.draw();
        if (p.alpha <= 0) fireworks.splice(index, 1);
    });
    requestAnimationFrame(animate);
}
animate();
