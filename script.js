function iniziaGioco() {
    const risposta = prompt("Indovinello: Sono una città con una sirenetta e tante biciclette. Come mi chiamo?");
    
    if (risposta.toLowerCase() === "copenhagen") {
        alert("Esatto! 🎉 Il tuo regalo è un viaggio a Copenhagen questo maggio! ✈️");
    } else {
        alert("Quasi! 😉 Riprova...");
        iniziaGioco(); // Torna all'indovinello
    }
}