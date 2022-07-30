// Prompts user for a number to use to form new sketch grid.
let gridPrompt = () => {
    let gridSize = undefined;
    
    while (gridSize > 100 || gridSize == undefined)
    {
        gridSize = prompt("Enter a size for the grid: ");
        if (gridSize <= 100){
            return parseInt(gridSize);
        }

        else{
            alert("That number is too large Please enter a smaller number");
            continue;
        }
    }
};

let gridDraw = (dimension) => {
    
    for (i = 0; i < dimension; i++){
      const row = document.createElement("div")
      rowH = 90 / dimension;
      row.style.height = rowH + 'vh';
      row.classList.add('gridRow');
        
        for (j = 0; j < dimension; j++){
            const column = document.createElement("div");
            colW = 90 / dimension;
            column.classList.add('gridCol');
            column.style.width = colW + 'vw';
            column.style.height = rowH + 'vh';
            row.appendChild(column);
        }
        
        let gridBox = document.querySelector('.gridBox');
        gridBox.appendChild(row);
    }
};





//Add an event listener to the button
let gridBtn = document.getElementById("newGrid");
gridBtn.addEventListener("click", gridDraw(gridPrompt()));//Placeholder, full draw will replace this