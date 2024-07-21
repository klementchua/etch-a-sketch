const container = document.querySelector("#container");
let gridNumber = 16;
createGrid(gridNumber);
const btn = document.querySelector("#btn");



// Event Listeners
container.addEventListener("mouseover", (e) => {
    e.target.classList.add("hovering");
})

container.addEventListener("mouseout", (e) => {
    e.target.classList.remove("hovering");
})

btn.addEventListener("click", () => {
    gridNumber = parseInt(prompt("What size of the grid would you like?"));
    while (!Number.isInteger(gridNumber) || gridNumber > 100) {
        gridNumber = prompt("What size of the grid would you like?");
    }
    container.textContent = "";
    createGrid(gridNumber);
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