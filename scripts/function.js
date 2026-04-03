'use strict';

// --- Pulizia Testo ---

const pulisciTesto = testo => {

    // Trasforma in maiuscolo, toglie spazi ai lati e spazi interni
    return testo.toUpperCase().trim().split(" ").join("");
};