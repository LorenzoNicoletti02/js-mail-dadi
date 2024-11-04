const mail = ["giuseppe@gmail.com", "loris@gmail.com", "olga@gmail.com"]
const askMail = prompt("Inserisci la tua email;")
let mailValid = false; // Email non c'è

for (let i = 0; i < mail.length; i++) {
    if (mail[i] === askMail) {
        mailValid = true; // Email è nella lista
    }
}

if (mailValid) {
    console.log("Email valida, Benvenuto!");
} else {
    console.log("Email non valida");
}