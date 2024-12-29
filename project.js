const userEmail = localStorage.getItem('userEmail');
console.log('Logged in as:', userEmail);


let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgConatainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true; //playerX, playerO
let count=0;// To Track Draw

const winPatterns=[
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame=()=>{
   turnO=true;
   count=0;
   enableBoxes();
   msgConatainer.classList.add("hide");
};

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    // console.log("box was clicked");
    if(turnO){  //playerO
     box.innerHTML="O";
     turnO=false;
     box.style.color="#8F0E00";
    }else{     //playerX
      box.innerHTML="X";
      turnO=true;
      box.style.color="#061826";
    }
    box.disabled=true;
    count++;

   let isWinner = checkWinner();
    
   if(count===9 && !isWinner){
    gameDraw();
   }
  });
});

const gameDraw=()=>{
  msg.innerText=`Game was a Draw.`;
  msgConatainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
};

const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
};

const showWinner=(winner)=>{
  msg.innerText=`Congratulations, Winner is ${winner}`;
  msgConatainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner=()=>{
  for( let pattern of winPatterns) {
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
        // console.log("winner",pos1Val);
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);