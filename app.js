let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


//turn as at fisrt it's X then suppose to be o 
let turno = true;   //player x , player o

//here at this indexes there is pattern of winning the game
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked ")
       if(turno){ //player o
        box.innerText = "o"
        box.classList.add("x") //color
        turno = false;
       }else{ //player x
        box.innerText = "X";
        box.classList.add("o");
        turno = true;
       }
       box.disabled = true;  //disabled after one click 
       checkWinner();
    });
});

const disabledBoxes = () =>{ ///made function of disable , after one winning the game button should disbale 
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledBoxes = () =>{ //enable again for new game (reset game)
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""; //empty the inner text for reset game
        box.classList.remove("x","o");
    }
}


const showWinner=(winner) =>{
    msg.innerText = `congratulation winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes(); // call here after declaring the winner 
}

const checkWinner = ()=>{
    for(let pattern of winPatterns){
            let pos1val =  boxes [pattern[0]].innerText;
            let pos2val = boxes [pattern[1]].innerText;
            let pos3val = boxes [pattern[2]].innerText;

            if(pos1val != "" && pos2val != "" && pos3val != ""){
                if(pos1val === pos2val && pos2val == pos3val){
                    console.log("winner" , pos1val);

                    showWinner(pos1val);
                }
            }
    }
}

const resetGame = () =>{
    turno = true;
    enabledBoxes(); // call enable fun
    msgContainer.classList.add("hide");
}
//reset game logic for both new and reset game
newGameBtn.addEventListener("click" ,resetGame)
resetBtn.addEventListener("click" ,resetGame);




