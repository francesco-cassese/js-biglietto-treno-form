# JS Biglietto Treno Form 🚂

## 📌 Descrizione
Evoluzione del calcolatore per biglietti ferroviari: in questa versione, l'interazione avviene tramite un form HTML. Il programma acquisisce i dati inseriti dall'utente, calcola il prezzo finale applicando le eventuali scontistiche e mostra il risultato direttamente in pagina.

## 🎯 Obiettivo
Passare dalla logica pura in console a un'applicazione interattiva completa, gestendo la lettura degli input e la manipolazione del DOM per l'output.

### Focus Tecnico:
- **Form Handling:** Recupero dei valori dai campi di input (`<input>`) e dai menu a tendina (`<select>`) tramite la proprietà `.value`.
- **Event Listening:** Utilizzo del metodo `.addEventListener` sul bottone "Genera" per scatenare il calcolo al click.
- **Logica di Sconto:** - Tariffa base: **0.21€ al km**.
    - Sconto Junior (**20%**): applicato se l'età è inferiore ai 18 anni.
    - Sconto Silver (**40%**): applicato se l'età è superiore ai 65 anni.

---

## 🛠️ Tecnologie Utilizzate
- **HTML5:** Creazione del form e della struttura del biglietto.
- **CSS3:** Stilizzazione per rendere l'interfaccia chiara e gradevole.
- **JavaScript (ES6+):** Gestione degli eventi, calcolo matematico e aggiornamento dinamico degli elementi della pagina.

---

## 🧪 Flusso di Esecuzione
1. **Input:** L'utente inserisce i chilometri e seleziona la fascia d'età.
2. **Elaborazione:** Al click sul bottone, JS trasforma le stringhe in numeri ed esegue il calcolo.
3. **Output:** Viene generato il prezzo finale e visualizzato all'interno di un'area dedicata della pagina.

---
IL TUO BIGLIETTO È PRONTO PER IL DOWNLOAD! 🎫

*Esercizio Boolean - Corso Full Stack Web Development*