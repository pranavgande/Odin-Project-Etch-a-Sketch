const container = document.getElementById('grid container');
const button = document.getElementById('reset-button');


function createGrid(size){
    container.innerHTML = '';
    const squareSize = 960/size;

    for(i=0;i<size*size;i++){
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

     square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = 'black';
    });

    container.appendChild(square);
    }
}

// Initial grid
createGrid(16);

// Resize button logic
button.addEventListener('click', () => {
  let newSize = prompt("Enter new grid size (1 - 100):");
  newSize = parseInt(newSize);

  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Invalid input. Please enter a number between 1 and 100.");
    return;
  }

  createGrid(newSize);
});