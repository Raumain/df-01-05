const dots = [];
const mouse = { x: 0, y: 0 };

for (let i = 0; i < 10; i++) {
    const dot = document.createElement("div");
    dot.style.position = "fixed";
    dot.style.width = "10px";
    dot.style.height = "10px";
    dot.style.backgroundColor = "cyan";
    dot.style.borderRadius = "50%";
    dot.style.pointerEvents = "none";
    dot.style.zIndex = "9999";
    dot.style.boxShadow = "0 0 5px white";
    document.body.appendChild(dot);
    dots.push(dot);
}

window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

function animate() {
    let x = mouse.x;
    let y = mouse.y;

    dots.forEach((dot, index) => {
        const nextDot = dots[index + 1] || dots[0];
        dot.style.left = x + "px";
        dot.style.top = y + "px";
        x += (nextDot.offsetLeft - dot.offsetLeft) * 0.5;
        y += (nextDot.offsetTop - dot.offsetTop) * 0.5;
    });
    requestAnimationFrame(animate);
}
animate();