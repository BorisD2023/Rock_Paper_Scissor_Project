//  Button einbinden
// const stoneBtn = document.querySelector("#stein");
// const paperBtn = document.querySelector("#papier");
// const scissorBtn = document.querySelector("#schere");
// Output einbinden
let outputHumanWin = document.querySelector(".human-win")
let outputAiWin = document.querySelector(".ai-win")
let mainOutput = document.querySelector(".output")
let counter = document.querySelector(".counter");

// Variablen vergeben
// Schere, Stein, Papier Variable
let rock = "Rock";
let paper = "Paper";
let scissor = "Scissor";
// KI-Auswahl, User-auswahl und Runden 
let aiChoose;
let humanChoose;
let roundsCounter = 0;

// Buttons Funktion
const stoneButton = () => {
// Speicherung der Auswahl in die Variable
    humanChoose = rock;
    console.log("Human choose Rock!");
    // Initierung der KI Auswahl
    aiTurn()
    console.log(aiChoose);
    // Anzahl gespielter Runden erhöhen
    roundsCounter ++;
    // Initierung der Funktion wer gewinnt
    whoWin();
    // Initierung der Funktion Anzahl Runden 
    roundsToPlay();
};

// stoneBtn.addEventListener("click", () => {
//     // Speicherung der Auswahl in die Variable
//     humanChoose = rock;
//     console.log("Human choose Rock!");
//     // Initierung der KI Auswahl
//     aiTurn()
//     console.log(aiChoose);
//     // Anzahl gespielter Runden erhöhen
//     roundsCounter ++;
//     // Initierung der Funktion wer gewinnt
//     whoWin();
//     // Initierung der Funktion Anzahl Runden 
//     roundsToPlay();
// })

const paperButton = () =>{
     // Speicherung der Auswahl in die Variable
     humanChoose = paper;
     console.log("Human choose Paper!");
     // Initierung der KI Auswahl
     aiTurn()
     console.log(aiChoose);
     // Anzahl gespielter Runden erhöhen
     roundsCounter ++;
     // Initierung der Funktion wer gewinnt
     whoWin();
     // Initierung der Funktion Anzahl Runden 
     roundsToPlay();
}

// paperBtn.addEventListener("click", () => {
//     // Speicherung der Auswahl in die Variable
//     humanChoose = paper;
//     console.log("Human choose Paper!");
//     // Initierung der KI Auswahl
//     aiTurn()
//     console.log(aiChoose);
//     // Anzahl gespielter Runden erhöhen
//     roundsCounter ++;
//     // Initierung der Funktion wer gewinnt
//     whoWin();
//     // Initierung der Funktion Anzahl Runden 
//     roundsToPlay();
// })

const scissorButton = () =>{
    // Speicherung der Auswahl in die Variable
    humanChoose = scissor;
    console.log("Human choose Scissor!");
    // Initierung der KI Auswahl
    aiTurn()
    console.log(aiChoose);
    // Anzahl gespielter Runden erhöhen
    roundsCounter ++;
    // Initierung der Funktion wer gewinnt
    whoWin();
    // Initierung der Funktion Anzahl Runden 
    roundsToPlay();
}

// scissorBtn.addEventListener("click", () => {
//     // Speicherung der Auswahl in die Variable
//     humanChoose = scissor;
//     console.log("Human choose Scissor!");
//     // Initierung der KI Auswahl
//     aiTurn()
//     console.log(aiChoose);
//     // Anzahl gespielter Runden erhöhen
//     roundsCounter ++;
//     // Initierung der Funktion wer gewinnt
//     whoWin();
//     // Initierung der Funktion Anzahl Runden 
//     roundsToPlay();
// })

// Zähler, wer wie oft gewonnen hat
let winCountAi = 0;
let winCountHuman = 0;

// Funktion, wann wer gewinnt

const whoWin = () => {
    // Human-Section
    if (humanChoose === rock && aiChoose === scissor){
        console.log("Human Win!");
        mainOutput.innerHTML = `${humanChoose} <sup>(Human)</sup> beats ${aiChoose} <sub>(AI)</sub>.<br><strong>You</strong> Win!`;
        // Zählerstand aktualisieren
        winCountHuman += 1;
    }else if (humanChoose === paper && aiChoose === rock){
        console.log("Human Win!");
        mainOutput.innerHTML = `${humanChoose} <sup>(Human)</sup> beats ${aiChoose} <sub>(AI)</sub>.<br><strong>You</strong> Win!`;
        // Zählerstand aktualisieren
        winCountHuman += 1;
    }else if (humanChoose === scissor && aiChoose === paper){
        console.log("Human Win!");
        mainOutput.innerHTML = `${humanChoose} <sup>(Human)</sup> beats ${aiChoose} <sub>(AI)</sub>.<br><strong>You</strong> Win!`;
        // Zählerstand aktualisieren
        winCountHuman += 1;
    // KI-Section
    }else if (aiChoose === rock && humanChoose === scissor){
        console.log("AI Win!");
        mainOutput.innerHTML = `${aiChoose}<sub>(AI)</sub> beats ${humanChoose}<sup>(Human)</sup>.<br><span>AI</span> Win!`;
        // Zählerstand aktualisieren
        winCountAi += 1;
    }else if (aiChoose === paper && humanChoose === rock){
        console.log("AI Win!");
        mainOutput.innerHTML = `${aiChoose}<sub>(AI)</sub> beats ${humanChoose}<sup>(Human)</sup>.<br><span>AI</span> Win!`;
        // Zählerstand aktualisieren
        winCountAi += 1;
    }else if (aiChoose === scissor && humanChoose === paper){
        console.log("AI Win!");
        mainOutput.innerHTML = `${aiChoose}<sub>(AI)</sub> beats ${humanChoose}<sup>(Human)</sup>.<br><span>AI</span> Win!`;
        // Zählerstand aktualisieren
        winCountAi += 1;
    // Unentschieden
    }else{
        console.log("DRAW!");
        mainOutput.innerHTML = `It´s a <span>DRAW!</span> You both chose ${humanChoose}.`
    }
    // Gewinnanzahl ins HTML schreiben
    outputHumanWin.innerHTML = winCountHuman;
    outputAiWin.innerHTML = winCountAi;
}

// Radiobuttons Funktion
const roundsToPlay = () => {
    const radioBtn = Number(document.querySelector(`input[name="rounds"]:checked`).value);
    console.log(radioBtn);
    if(radioBtn === 5){
        // Rundenzähler Style Änderung
        document.querySelector(".radio-btn").style.display = "none";
        counter.innerHTML = `${roundsCounter} / 5`;
        if(roundsCounter === 5){
            winCounter();
        }
    }
    if (radioBtn === 10) {
        // Rundenzähler Style Änderung
        document.querySelector(".radio-btn").style.display = "none";
        counter.innerHTML = `${roundsCounter} / 10`;
        if (roundsCounter === 10){
            winCounter();
        }
    }
    if (radioBtn === 15) {
        // Rundenzähler Style Änderung
        document.querySelector(".radio-btn").style.display = "none";
        counter.innerHTML = `${roundsCounter} / 15`;
        if (roundsCounter === 15){
            winCounter();
        }
    }
    if (radioBtn === 20) {
        // Rundenzähler Style Änderung
        document.querySelector(".radio-btn").style.display = "none";
        counter.innerHTML = `${roundsCounter} / 20`;
        if (roundsCounter === 20){
            winCounter();
        }
    }
}

// KI-Auswahlfunktion
const aiTurn = () => {
    // KI-Zufallskalkulation
    aiChoose = Math.floor(Math.random() * 3);
    // KI-Möglichkeiten
    if (aiChoose === 0) {
        aiChoose = rock;
        console.log("AI choose Stone!");
    }else if (aiChoose === 1) {
        aiChoose = paper;
        console.log("AI choose Paper!");
    }else{
        aiChoose = scissor;
        console.log("AI choose Scissor!");
    }
}

// Gewinnerzähler Funktion
const winCounter = () => {
    if (winCountHuman > winCountAi) {
        mainOutput.innerHTML = "<strong>Human</strong> winns!<br>AI: <span>I will be back!</span>";
    }else if (winCountAi > winCountHuman){
        mainOutput.innerHTML = "<span>Terminator</span> winns!<br>AI: <span>Hasta la vista, baby!</span>";
    } else{
        mainOutput.innerHTML = "It`s a draw!<br>AI: <span>The Armageddon will come!</span>";
    }
}

// Reset Funktion
document.querySelector("#reset-btn").addEventListener("click", () => {
    winCountAi = 0;
    winCountHuman = 0;
    roundsCounter = 0;
    counter.innerHTML = ""
    outputHumanWin.innerHTML = "0"
    outputAiWin.innerHTML = "0"
    document.querySelector(".radio-btn").style.display = "grid";
    mainOutput.innerHTML = "Let´s Play!"
})

// Style Change

const changeStyle = () =>{

    let checkbox = document.querySelector(".checkBox").checked;

    if (checkbox === true) {
        document.querySelector("main").classList.add("style-change")
        document.querySelector(".firstSection").classList.add("background")
    }else{
        document.querySelector("main").classList.remove("style-change") 
        document.querySelector(".firstSection").classList.remove("background") 
    }
}