let newbtn = document.querySelectorAll(".box")
let reset = document.querySelector("#replay")
let messagebox = document.querySelector("#messagebox")
const winner =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

]
let turn = "X";
newbtn.forEach((button)=>{
   button.addEventListener("click" , ()=>{
       button.innerText = turn
       button.disabled =true;
       if(check())
       {
        
        messagebox.innerText= `The winner is ${turn}`;
        messagebox.style.color = "green"
        return;
       }
       if(nowinner())
       {
        messagebox.innerText= `It's a draw`;
        messagebox.style.color = "red";
        return;
       }
       if(turn === "X")
        {
            turn = "O";
        }
        else{
            turn = "X";
        }
        messagebox.innerText =`It's ${turn} turn now`;
    })
})
const nowinner =()=>
{
    let iosornot = 0;
    newbtn.forEach((button)=>{
        if(button.innerText === "O" || button.innerText ==="X")
        {
           iosornot++;
        }
    })
    return iosornot ==9;
}
const check =()=>{
    for(let pattern of winner){
        let pos0 =newbtn[pattern[0]].innerText;
        let pos1 =newbtn[pattern[1]].innerText;
        let pos2 =newbtn[pattern[2]].innerText;
        if(pos0 !="" &&pos1 !="" &&pos2 !="" )
        {
            if(pos0 ==pos1 &&pos1 ==pos2)
            {    
                newbtn.forEach(button => button.disabled =true);
               return true;
            }
        }
    }
    return false;
}


reset.addEventListener("click",()=>{
    for (let box of newbtn) {
        box.disabled = false;
        turn ="X";
        box.innerText="";
        messagebox.innerText ="Restart... X starts the game"
        messagebox.style.color = "black"
        }
})