const container = document.querySelector("#container");
let gridNumber = 16;
createGrid(gridNumber);
const btns = document.querySelector("#btns");
let cursorStatus;
let rainbowMode = false;



// Event Listeners
document.addEventListener("mousedown", () => {
    cursorStatus = true;
})

document.addEventListener("mouseup", () => {
    cursorStatus = false;
})

container.addEventListener("mouseover", (e) => {
    if (cursorStatus && e.target !== container) {
        if (rainbowMode === true) {
            rainbowColouring(e.target);
        } else {
            e.target.style.backgroundColor = "black";
        }
    }
})
container.addEventListener("mousedown", (e) => {
    if (e.target !== container) {
        if (rainbowMode === true) {
            rainbowColouring(e.target);
        } else {
            e.target.style.backgroundColor = "black";
        }
    }
})

btns.addEventListener("click", (e) => {
    switch (e.target.id) {
    case "reset":
        gridNumber = parseInt(prompt("What size of the grid would you like?"));
        container.textContent = "";
        createGrid(gridNumber);
    case "rainbow":
        if (rainbowMode) {
            rainbowMode = false
        } else {
            rainbowMode = true;
        }
    }
})


// Functions
function createGrid(n) {
    for (let i = 1; i <= n; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("rowDiv");
        for (let i = 1; i <= n; i++) {
            const columnDiv = document.createElement("div");
            columnDiv.classList.add("columnDiv");
            columnDiv.style.cssText = `width: ${640/n}px; height: ${640/n}px`;
            rowDiv.appendChild(columnDiv);
        }
        container.appendChild(rowDiv);
    }
}

function rainbowColouring(element) {
    const randomR = Math.floor(Math.random() * 255);
    const randomG = Math.floor(Math.random() * 255);
    const randomB = Math.floor(Math.random() * 255);
    element.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}