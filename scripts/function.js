'use strict';

//======================================================
// CONTROLLI
//======================================================

// --- Pulizia Testo ---

const pulisciTesto = testo => {

    // Trasforma in maiuscolo, toglie spazi ai lati e spazi interni
    return testo.toString().trim().split(" ").join("");
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

    //Controllo prima la stringa
    const numStringaValidato = input.trim().replace(',', '.');

    // Conversione da stringe in numero
    const numeroValidato = parseFloat(numStringaValidato);

    if (numeroValidato === "") {
        return -1;
    }

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

const calcoloBiglietto = (eta, km) => {

    //Variabile costo base biglietto
    const prezzoBase = (km * 0.21);
    let prezzoFinale = prezzoBase;

    if (eta < 18) {
        prezzoFinale -= (prezzoBase * 20 / 100);
        return prezzoFinale.toFixed(2);

    } else if (eta >= 65) {
        prezzoFinale -= (prezzoBase * 40 / 100);
        return prezzoFinale.toFixed(2);
    } else {
        return prezzoBase.toFixed(2);
    }
}