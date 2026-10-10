console.log("JS Connected");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turno = true;

const winPattern=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

    
];
const resetGame = () =>{
    turno = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        if(turno){
            box.innerText = "O";
            turno = false;
        }
        else{
            box.innerText="X";
            turno = true;

        }
        box.disable = true;
        checkWinner();
        
    });
});
const disableBoxes = () =>{
    for(let box of boxes){
        box.disable = true;
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disable = false;
        box.innerText ="";

    }
};
const showWinner= (winner) => {
    msg.innerText = `🎉Congratulation! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};
const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !=="" && pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                return;
            }
        }
    let allFilled = [...boxes].every(
        (box)=> box.innerText!==""
        );
    if(allFilled){
        msg.innerText="🤝 Match Draw!";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
    
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
