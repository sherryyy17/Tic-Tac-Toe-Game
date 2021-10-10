//2D Array declaration
var matrix = new Array(3);
for(let i = 0; i < matrix.length; i++){
    matrix[i] = new Array(3);
}

let player1 = true; //chance of player 1

function fill(event, e){

    //indexes of selected cell
    let i = e.id.slice(0,1);
    let j = e.id.slice(-1);

    if(player1)
    {
        matrix[i][j] = 'X';
        e.style.background = 'url(./cross.png) center no-repeat';
        e.style.backgroundSize = 'cover';
        player1 = false; //toggle chance
    }
    else
    {
        matrix[i][j] = 'O';
        e.style.background = 'url(./zero.jpg) center no-repeat';
        e.style.backgroundSize = 'cover';
        player1 = true;
    }

    //result
    let res = validateWinner();

    if(res == 'X'){
        document.getElementById("result").innerHTML = "Player 1 wins!!! Please click Reset to start a New game."; 
    }

    else if(res == 'O'){
        document.getElementById("result").innerHTML = "Player 2 wins!!! Please click Reset to start a New game."; 
    }
    else
        return;
}

function validateWinner(){
    //check for rows
    for(let i=0;i<3;i++){
       if(matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2]){
           return matrix[i][0];
       } 
    }

    //check for cols
    for(let j=0;j<3;j++){
        if(matrix[0][j] == matrix[1][j] && matrix[1][j] == matrix[2][j])
            return matrix[0][j];
    }

    //check for daignols
    if(( matrix[1][1] == matrix[0][0] && matrix[1][1] == matrix[2][2] ) || ( matrix[1][1] == matrix[2][0] && matrix[1][1] == matrix[0][2] ))
        return matrix[1][1];

    return 'no';
}

function reset(){
    location.reload();
}