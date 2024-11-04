const numPlayer = Math.floor (Math.random() * 6) + 1;
console.log("Numero giocatore: " + numPlayer);

const numComputer = Math.floor (Math.random() * 6) + 1;
console.log("Numero computer: " + numComputer);

if (numPlayer > numComputer) {
    console.log("Player win!");
} else if (numPlayer < numComputer) {
    console.log("Computer win!");    
} else {
    console.log("Draw!");
}