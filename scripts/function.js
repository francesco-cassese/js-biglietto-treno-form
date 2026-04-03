'use strict';

//======================================================
// CONTROLLI
//======================================================

// --- Pulizia Testo ---

const pulisciTesto = testo => {

    // Trasforma in maiuscolo, toglie spazi ai lati e spazi interni
    return testo.toUpperCase().trim().split(" ").join("");
};

// --- Controllo la presenza del testo ---

const controllaStringa = (input, pulizia) => {

    // Pulizia Testo
    const inputPulito = pulizia(input);

    // Gestione campo vuoto
    if (inputPulito === "") {
        return -1;
    }
    return inputPulito;
}

// --- Controllo validità numero ---
const controllaNumero = input => {

    // Conversione da stringe in numero
    const numeroValidato = parseInt(input);

    //Controllo che sia un numero
    if (isNaN(numeroValidato)) {
        return 0;
    }

    //Controllo che non sia minore 0 uguale a 0
    if (numeroValidato <= 0) {
        return 1;
    }
    return numeroValidato;
}

//======================================================
//CALCOLO
//======================================================

const calcoloBiglietto = (eta, km, prezzoAlKm, sogliaMinore, sogliaSenior, scontoMinore, scontoSenior) => {

    //Variabile costo base biglietto
    const prezzoBase = (km * prezzoAlKm);
    let prezzoFinale = prezzoBase;

    if (eta < sogliaMinore) {
        prezzoFinale -= (prezzoBase * scontoMinore / 100);
        return prezzoFinale.toFixed(2);

    } else if (eta >= sogliaSenior) {
        prezzoFinale -= (prezzoBase * scontoSenior / 100);
        return prezzoFinale.toFixed(2);
    } else {
        return prezzoBase.toFixed(2);
    }
}