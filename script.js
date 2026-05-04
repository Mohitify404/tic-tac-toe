const board=document.querySelector('.board');

let winner=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];
function checkwinner(){

    for(let[idx0,idx1,idx2] of winner){
        if(boardarray[idx0]!='E' && boardarray[idx0]==boardarray[idx1] && boardarray[idx1]==boardarray[idx2]) return 1;
    }

return 0;
}   

let boardarray=new Array(9).fill('E');
let turn=0
let totalturn=0;

const printer=(event)=>{
    const elemnt=event.target;
    if(boardarray[elemnt.id]=='E'){
        totalturn++;
    if(turn==0){
        elemnt.innerHTML="O";
        boardarray[elemnt.id]='O';
        if(checkwinner()){
const w=document.querySelector('.winning-message')
w.innerHTML='winner is O 🏆 '
board.removeEventListener('click',printer);
return;
    }
    
        turn++;
    }
    else{
         elemnt.innerHTML="X";
               boardarray[elemnt.id]='X';
                       if(checkwinner()){
const w=document.querySelector('.winning-message')
w.innerHTML='winner is x 🏆 '
board.removeEventListener('click',printer);
return;     
// 👉 removeEventListener only stops future clicks
// 👉 It does NOT stop the current function execution thats why retrun
        }

        turn--;
    }
}
if(totalturn==9){
const w=document.querySelector('.winning-message')
w.innerHTML='draw 🤝';
}



}

board.addEventListener('click',printer);

const btn=document.getElementById('restartButton')
btn.addEventListener('click',(event)=>{
    const divs=document.querySelectorAll('.cell');
for(let i=0;i<divs.length;i++){
divs[i].innerHTML="";
}
turn=0; totalturn=0;
boardarray=new Array(9).fill('E');
document.querySelector('.winning-message').innerHTML="";
board.addEventListener('click',printer);


})
document.getElementById("darkModeBtn").addEventListener("click",()=>{
const body=document.querySelector("body");
body.className="dark";


})