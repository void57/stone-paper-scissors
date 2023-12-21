let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreInPara = document.querySelector("#user-score");
const compScoreInPara = document.querySelector("#comp-score");

const generateCompChoice = () =>{

    const options = ["stone","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    let chs = choices[randIdx];

    choices.forEach((choice) => {
        choice.style.border = "none"; 
        choice.style.borderRadius = "0"; 
        choice.style.opacity = "1"; 
    });

        choices.forEach((choice) => {
            chs.style.border = "5px solid black";
            chs.style.borderRadius = "50%";
            chs.style.opacity = "0.5";
        });
    return options[randIdx];
};


const drawGame =() =>{
    msg.innerHTML = "Game was Draw. Play again.";
    msg.style.color = "#030302"
    msg.style.backgroundColor = "#ebe307"
}

const showWinner = (userWin,userChoice,compChoice) =>{

    if(userWin === true){
        userScore++;
        userScoreInPara.innerHTML = userScore;
        msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else if(userWin === false){
        compScore++;
        compScoreInPara.innerHTML = compScore;
        msg.innerHTML = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame =(userChoice) =>{
    //Generate computer choice
    const compChoice = generateCompChoice();

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "stone"){
            //scissors,paper
            if(compChoice === "paper"){
                userWin = false;
            }else{
                userWin = true;
            }
        }else if(userChoice === "paper"){
            //stone,scirroe
            if(compChoice === "stone"){
                userWin = true;
            }else{
                userWin = false;
            }
        }else{
            //stone,paper
            if(compChoice === "stone"){
                userWin = false;
            }else{
                userWin = true;
            }
        }
        showWinner(userWin,userChoice,compChoice);
    }    
};


choices.forEach ((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
