let buttons = document.querySelectorAll("button");
let wonMessage = document.getElementById("won_message");

let flag = true;

const winPositions = [[0,1,2],
                      [0,3,6],
                      [1,4,7],
                      [2,5,8],
                      [2,4,6],
                      [3,4,5],
                      [6,7,8],
                      [0,4,8]];


const checkWinner = ()=>{
    for (let winPosition of winPositions){

        let pos1 = buttons[winPosition[0]].innerHTML;
        let pos2 = buttons[winPosition[1]].innerHTML;
        let pos3 = buttons[winPosition[2]].innerHTML;
        if (pos1===pos2 && pos2===pos3 && pos1 !== ""){
            return true;
        }
    
    };
    return false;
}
let totalClicks = 0;
buttons.forEach(button => {
    button.addEventListener('click', () =>{
        if (flag===true){
            button.innerHTML = 'X';
            flag = false;
        }
        else{
            button.innerHTML = 'O';
            flag = true;
        };
        button.disabled = true;
        totalClicks ++;

        let check = checkWinner();
        console.log("check is ", check)
        if (check){
            buttons.forEach(button => {
                button.disabled = true;
            });

            let wonPlayer = flag ? "O": "X";
    
            wonMessage.innerText = `${wonPlayer} won🎉`
        }
        else if(!check && totalClicks===9){
            wonMessage.innerText = "It is a draw!"
        }
        
    })

    
    
});




