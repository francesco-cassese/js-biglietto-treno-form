'use strict';

// --- COLLEGAMENTI ---

const inputNome = document.querySelector('.input-name');
const inputKm = document.querySelector('.input-km');
const selectEta = document.querySelector('.select-age');
const btnTicket = document.querySelector('#btn-ticket');
const formTicket = document.querySelector('#ticket-form');


const rimuoviRefresh = event => {
    event.preventDefault();

    // --- Variabili ---

    let datiValidati = false;
    let numeroValidato = 0;

    // --- CONTROLLI ---

    const nomeValidato = controllaStringa(inputNome.value, pulisciTesto);

    //Controllo form nome
    if (nomeValidato === -1) {                                      //Se la funzione restituisce -1 (Campo vuoto)
        alert('Bello il tuo nome..., ah no non lo hai scritto');    //Alert
    } else {

        //Controllo form Km
        numeroValidato = controllaNumero(inputKm.value);

        if (numeroValidato === -1) {                                //Se la funzione restituisce -1 (Campo vuoto)
            alert('I km non si scrivono da soli... Purtroppo!!!');  //Alert
        }
        else if (numeroValidato === 0) {                             //Se restituisce 0 (L'utente non ha scritto numeri)
            alert('I chilometri non si scrivono... si contano! Usa le cifre per favore.'); //alert

        } else if (numeroValidato === 1) {                           //Se restituisce 1 (Ha aggiunto un numero negativo o 0)
            alert('Anche il viaggio più corto inizia con un passo... almeno una DAI!!!'); //alert
        } else {
            datiValidati = true;
        }
    }


    if (datiValidati) {

        const etaSelezionata = parseInt(selectEta.value);

        const prezzoTotaleBiglietto = calcoloBiglietto(etaSelezionata, numeroValidato);

        console.log(`il passeggero ${nomeValidato} di età ${etaSelezionata} percorrerà ${numeroValidato}km quindi pagherà: ${prezzoTotaleBiglietto}`);

        inputNome.value = '';
        inputKm.value = '';
        selectEta.value = '';
    }
}

formTicket.addEventListener('submit', rimuoviRefresh);

