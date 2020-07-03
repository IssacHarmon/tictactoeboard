let cells = document.querySelectorAll(".row > div");
let counter = 0;
let player = "p1";
let announceDiv = document.getElementsByClassName("announce")[0];

for (i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

// possible winning scenarios <-- use for the checkWin somehow that makes sense to you
// 0, 1, 2
// 3, 4, 5
// 6, 7, 8
///-------^(this is the game board layout! "REFERENCE THIS")
// 0, 4, 8
// 2, 4, 6
// 0, 3, 6
// 1, 4, 7
// 2, 5, 8
function disableCellsClicked() {
  for (i = 0; i < cells.length; i++) {
    cells[i].removeEventListener("click", cellClicked);
  }
}


//convoluted way to check a winning combo but this makes the most sense to me
//a simpler method could be to loop through an array 
function checkWin() {
  if (
    cells[0].textContent === cells[1].textContent &&
    cells[1].textContent === cells[2].textContent &&
    (cells[0].textContent === "X" || cells[0].textContent === "O")
  ) {
    announceDiv.textContent = `${player},You Win!`;
    disableCellsClicked();
  } else if (
    cells[3].textContent === cells[4].textContent &&
    cells[4].textContent === cells[5].textContent &&
    (cells[3].textContent === "X" || cells[3].textContent === "O")
  ) {
    announceDiv.textContent = `${player},You Win!`;
    disableCellsClicked();
  } else if (
    cells[6].textContent === cells[7].textContent &&
    cells[7].textContent === cells[8].textContent &&
    (cells[6].textContent === "X" || cells[6].textContent === "O")
  ) {
    announceDiv.textContent = `${player},You Win!`;
    disableCellsClicked();
  } else if (
    cells[0].textContent === cells[4].textContent &&
    cells[4].textContent === cells[8].textContent &&
    (cells[0].textContent === "X" || cells[0].textContent === "O")
  ) {
    announceDiv.textContent = `${player},You Win!`;
    disableCellsClicked();
  } else if (
    cells[2].textContent === cells[4].textContent &&
    cells[4].textContent === cells[6].textContent &&
    (cells[2].textContent === "X" || cells[2].textContent === "O")
  ) {
    announceDiv.textContent = `${player},You Win!`;
    disableCellsClicked();
  } else if (
    cells[0].textContent === cells[3].textContent &&
    cells[3].textContent === cells[6].textContent &&
    (cells[0].textContent === "X" || cells[0].textContent === "O")
  ) {
    announceDiv.textContent = `${player},You Win!`;
    disableCellsClicked();
  } else if (
    cells[1].textContent === cells[4].textContent &&
    cells[4].textContent === cells[7].textContent &&
    (cells[1].textContent === "X" || cells[1].textContent === "O")
  ) {
    announceDiv.textContent = `${player},You Win!`;
    disableCellsClicked();
  } else if (
    cells[2].textContent === cells[5].textContent &&
    cells[5].textContent === cells[8].textContent &&
    (cells[2].textContent === "X" || cells[2].textContent === "O")
  ) {
    announceDiv.textContent = `${player}, You Win!`;
    disableCellsClicked();
  } else if (counter === 9) {
    announceDiv.textContent = `It's a Draw!`;
    Swal.fire("It's a Draw!");
  }
}

//this manipulates the DOM by selecting a space and adding an X or O between the 
//borders created on the index.html
function cellClicked(event) {
  if (event.target.textContent === "X" || event.target.textContent === "O") {
    return;
  }
  counter++;
  if (counter <= 9) {
    if (player === "p1" && event.target.textContent === "") {
      event.target.textContent = "X";
      checkWin();
      player = "p2";
    } else if (player === "p2" && event.target.textContent === "") {
      event.target.textContent = "O";
      checkWin();
      player = "p1";
    }
  }
}

function gameReset() {
    //was going to write a function to reset game but created a button and styled 
    //that instead. 
}

//needs to go into each array
// hints!
// cells [1].textContent > find what something is
//if else statements!
// === operators
//if(conditionOne && condtionTwo) {}
