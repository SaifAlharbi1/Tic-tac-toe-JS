let getAllSquare = document.getElementsByClassName('square')
let turn = document.querySelector('.TURN')
let wonX = document.querySelector('.won-x')
let wonO = document.querySelector('.won-o')
let draw = document.querySelector('.draw')
let alret = document.querySelector('.alret-message')
let message = document.querySelector('.message')
let close = document.querySelector('.close')
let startGame = "X"
let endGame = false , checkDraw = []
let arrGame = [
    '0','1','2',
    '3','4','5',
    '6','7','8'
]
for (const square of getAllSquare) {
    square.addEventListener('click', function(){

        if(!isFinite(arrGame[square.dataset.value]))
        {
            return
        }
        if(endGame)
        {
            return
        }
        arrGame[square.dataset.value] = startGame
        checkWinner(startGame)

        square.innerHTML = startGame
        startGame = startGame == "X" ? "O" : "X"
        
        turn.innerText = `${startGame} TURN`
    })
}

function checkWinner(winnerName)
{
    if( arrGame[0] == arrGame[1] && arrGame[1] == arrGame[2] ||
        arrGame[3] == arrGame[4] && arrGame[4] == arrGame[5] ||
        arrGame[6] == arrGame[7] && arrGame[7] == arrGame[8] ||

        arrGame[0] == arrGame[3] && arrGame[3] == arrGame[6] ||
        arrGame[1] == arrGame[4] && arrGame[4] == arrGame[7] ||
        arrGame[2] == arrGame[5] && arrGame[5] == arrGame[8] ||

        arrGame[0] == arrGame[4] && arrGame[4] == arrGame[8] ||
        arrGame[2] == arrGame[4] && arrGame[4] == arrGame[6]
        ){
        
        // alert message how won
        alret.classList.add('scale-1')
        message.innerHTML = `${winnerName} won!`
        // alert(`${winnerName} won!`)
        if(winnerName == "X") 
        {
            wonX.innerHTML = parseInt(wonX.innerHTML) + 1
        }
        else if(winnerName == "O")
        {
            wonO.innerHTML = parseInt(wonO.innerHTML) + 1
        }
        endGame = true
    } else {
        checkDraw += 1
        if(checkDraw.length == 9)
        {
            draw.innerHTML = parseInt(draw.innerHTML) + 1
            alret.classList.add('scale-1')
            message.innerHTML = "draw!"
            // alert(`draw!`)
        }
    }
}

function Reset()
{
    for (const square of getAllSquare) {
        square.innerHTML = ""
    }
    arrGame = [
        '0','1','2',
        '3','4','5',
        '6','7','8'
    ]
    checkDraw = []
    endGame = false
    startGame = "X"
    turn.innerHTML = `X TURN`
    alret.classList.remove('scale-1')
}

close.addEventListener("click",function(){
    alret.classList.remove('scale-1')
})