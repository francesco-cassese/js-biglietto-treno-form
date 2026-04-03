'use strict';

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

const controllaNumero = (input) => {

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
