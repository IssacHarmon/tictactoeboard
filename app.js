let cells = document.querySelectorAll('.row > div');

let wincombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

let counter = 0;


let player = "p1"

function winCheck() {
    for (let i = 0; i < wincombos.length; i++) {
        
        
    }
}

function cellClicked(event) {
    counter++
    winCheck()
    if (counter <= 9) {

        if (player === "p1" && event.target.textContent === "") {
            event.target.textContent = 'X'
            player = "p2"

        } else if (player === "p2" && event.target.textContent === "") {
            event.target.textContent = 'O'
            player = "p1"

        }
    } else {
        console.log("it's a draw!")
    }


}
//needs to go into each array 


// hints!
// cells [1].textContent > find what something is
//if else statements!
// === operators
//if(conditionOne && condtionTwo) {}