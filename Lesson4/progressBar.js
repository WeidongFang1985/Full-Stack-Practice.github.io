const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
let progressWidth;
prev.disabled = true;

next.addEventListener("click", () => {
    prev.disabled = false;
    currentActive++;
    progressWidth = (currentActive - 1) * 100 / (circles.length - 1);
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    if (currentActive === circles.length) {
        next.disabled = true;
    }
    progress.style.width = `${progressWidth}%`;
    update()

})

prev.addEventListener("click", () => {
    next.disabled = false;
    currentActive--;
    progressWidth = (currentActive - 1) * 100 / (circles.length - 1);
    if (currentActive < 1) {
        currentActive = 1
    }
    if (currentActive === 1) {
        prev.disabled = true;
    }
    progress.style.width = `${progressWidth}%`;
    update()
})

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active")
        }
    })
}

