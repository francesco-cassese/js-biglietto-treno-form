'use strict';

// --- COLLEGAMENTI ---

const inputNome = document.querySelector('.input-name');
const inputKm = document.querySelector('.input-km');
const selectEta = document.querySelector('.select-age');
const formTicket = document.querySelector('#ticket-form');
const containerTicket = document.querySelector('#container-ticket');
const btnRestart = document.getElementById('btn-restart');
const btnEnd = document.getElementById('btn-end');


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

    //Se i dati sono validati
    if (datiValidati) {

        const etaSelezionata = parseInt(selectEta.value);             //Converto i numeri in interi 

        let nomeOfferta = "Biglietto Standard";                       //Definisco i nomi dell'offerta
        if (etaSelezionata < 18) nomeOfferta = "Sconto Under 18";
        if (etaSelezionata >= 65) nomeOfferta = "Sconto Senior";

        const prezzoTotaleBiglietto = calcoloBiglietto(etaSelezionata, numeroValidato);    //Calcolo il prezzo del biglietto

        //Genero i dati causali
        const carrozza = Math.floor(Math.random() * 12) + 1;  //DA 1 a 12
        const posto = Math.floor(Math.random() * 80) + 1 + "A";  //Da 1 a 80  
        const pnr = Math.random().toString(36).substring(2, 8).toUpperCase();

        //Ignetto tutto nell'html
        containerTicket.innerHTML = `
         <div class="col-12 mx-auto">
                    <section class="ticket">
                        <div class="ticket-header">
                            <h3>Dettagli Passeggero</h3>
                        </div>
                        <div class="ticket-body">
                            <div class="details d-flex justify-content-around">
                                <div class="detail-item d-flex flex-column">
                                    <span class="label">PASSEGGERO</span>
                                    <span class="value">${inputNome.value}</span>
                                </div>
                                <div class="detail-item d-flex flex-column">
                                    <span class="label">CARROZZA</span>
                                    <span class="value">${carrozza}</span>
                                </div>
                                <div class="detail-item d-flex flex-column">
                                    <span class="label">POSTO</span>
                                    <span class="value">${posto}</span>
                                </div>
                                <div class="detail-item d-flex flex-column">
                                    <span class="label">OFFERTA</span>
                                    <span class="value">${nomeOfferta}</span>
                                </div>
                                <div class="detail-item d-flex flex-column">
                                    <span class="label">PREZZO</span>
                                    <span class="value">&euro;${prezzoTotaleBiglietto}</span>
                                </div>
                            </div>
                        </div>
                        <div class="ticket-footer">
                            <div class="barcode">
                                <div class="barcode-mock">*${pnr}*</div>
                                <span class="pnr">PNR: ${pnr}</span>
                            </div>
                        </div>
                    </section>
                    <div class="d-flex justify-content-center gap-3 mt-4">
                        <button id="btn-restart" class="btn btn-outline-danger">Continua gli acquisti</button>
                        <button id="btn-end" class="btn btn-danger">Fine / Stampa</button>
                    </div>
                </div>`;

        //Rimuovo la classe d-none
        containerTicket.classList.remove('d-none');

        //Collego i bottoni sotto la card
        const btnRestart = document.getElementById('btn-restart');
        const btnEnd = document.getElementById('btn-end');

        //Se l'utente preme il bottone restart aggiungi la classe d-none
        btnRestart.addEventListener('click', () => {
            containerTicket.classList.add('d-none');
        });

        //Se l'utente preme il bottone fine gli mando l'allert
        btnEnd.addEventListener('click', () => {
            alert("Grazie per aver viaggiato con Sfreccia Rossa Ma Non Troppo!");
        });

        //Stampo in console
        console.log(`il passeggero ${nomeValidato} di età ${etaSelezionata} percorrerà ${numeroValidato}km quindi pagherà: ${prezzoTotaleBiglietto}`);

        //Resetto tutto
        inputNome.value = '';
        inputKm.value = '';
        selectEta.value = '';
    }
}

formTicket.addEventListener('submit', rimuoviRefresh);

