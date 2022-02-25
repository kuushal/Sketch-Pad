let color = "black";
let click = true;

function createBoard(size) {
    let board = document.querySelector('.board');
    resetBoard();

    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    for (let i = 0; i < size * size; i++) {

        let square = document.createElement("div");

        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "white";

        board.insertAdjacentElement("beforeend", square);
    }
}

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        document.querySelector('.message').style.display='none';
        createBoard(input);
    } else {
        document.querySelector('.message ').style.display='flex';
    }
}

function colorSquare() {
    if (click) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }

}

function changeColor(newColor) {
    color = newColor;
}

function resetBoard() {
    let board = document.querySelector('.board');
    let square = board.querySelectorAll("div");
    square.forEach((div) => div.style.backgroundColor = "white");
}

document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != 'BUTTON') {
        click = !click;
        if (click) {
            document.querySelector('.mode').textContent = "Mode: Colouring";
        } else {

            document.querySelector('.mode').textContent = "Mode: Not Colouring";
        }
    }

})