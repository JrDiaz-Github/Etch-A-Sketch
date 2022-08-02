// Prompts user for a number to use to form new sketch grid.
let gridPrompt = () => {
    let gridSize = undefined;
    
    while (gridSize > 100 || gridSize == undefined)
    {
        gridSize = prompt("Enter a size for the grid: ");
        if (gridSize <= 100 && gridSize > 0){
            return parseInt(gridSize);
        }

        else{
            alert("Invalid Entry, please enter a number between 1 and 100");
            continue;
        }
    }
};

//Draws the grid and readys the elements for drawing
let gridDraw = (dimension) => {
    
    for (i = 0; i < dimension; i++){
      let row = document.createElement("div")
      rowH = 90 / dimension;
      row.style.height = rowH + 'vh';
      row.classList.add('gridRow');
        
        for (j = 0; j < dimension; j++){
            let column = document.createElement("div");
            colW = 100 / dimension;
            column.classList.add('gridCol');
            column.style.width = colW + 'vw';
            column.style.height = rowH + 'vh';
            column.style.background = 'white';
            row.appendChild(column);
        }
        
        let gridBox = document.querySelector('.gridBox');
        gridBox.appendChild(row);
    }

    gridSetup();
};

//Add a hover event listener to change the color of a block
function gridSetup(){
    let sketchGrid = document.getElementsByClassName('gridCol');
    for (i = 0; i < sketchGrid.length; i++){
        let currCol = sketchGrid[i];
        currCol.addEventListener('mouseover', function() { 
            colorChange(currCol); 
        });
    }
};

//Resets the gridBox to ready a new draw
function gridReset(){
    const gridBox = document.querySelector('.gridBox');
    const Rows = document.querySelectorAll('.gridRow');
    for (i = 0; i < Rows.length; i++){
        gridBox.removeChild(Rows[i]);
    }
}

//Draws the initial 16 x 16 grid
gridDraw(16);



function colorChange(item){
    item.style.background = 'black';
}

//Add an event listener to the button
let gridBtn = document.getElementById("newGrid");
gridBtn.addEventListener("click", function() {
    gridReset();
    gridDraw(gridPrompt()); }
);
