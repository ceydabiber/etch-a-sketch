const gridContainer = document.querySelector('.grid-container');

function  createGrid(size){
    const totalSquares = size*size;
    
    gridContainer.innerHTML = '';

    for (let i = 0; i< totalSquares; i++){
        const square = document.createElement('div');
        square.classList.add('grid-square');
        gridContainer.appendChild(square);
    

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = '#E6D9A2';
        });

   }
}

createGrid(16);