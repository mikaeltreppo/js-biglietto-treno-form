//generali

const confirmDom = document.getElementById('confirm');
//mi dice i km inseriti
confirmDom.addEventListener('click',

    function () {
// mi dice il nome e cognome del passeggero e lo stampa al posto giusto
        const namePassenger = document.getElementById('name');
        const tellName = namePassenger.value;
        document.getElementById('tableName').innerHTML = tellName;
// mi dice la tipologia di sconto
        const valuesDom = document.getElementById('select');
        const agePassenger = valuesDom.value;
        if (agePassenger == 'maggiorenne')
            document.getElementById('offert').innerHTML = 'Nessuno sconto';
        else if (agePassenger == "minorenne")
            document.getElementById('offert').innerHTML = "Sconto Junior 20%";
        else if (agePassenger == 'over65')
            document.getElementById('offert').innerHTML = "Sconto Over 40%";
//codice biglietto generator
        const ticketNumber = Math.floor(Math.random() * 90001);
        document.getElementById('ticketCode').innerHTML = ticketNumber;
//numero seduta generator
        const seatNumber = Math.floor(Math.random() * 56);
        document.getElementById('seatN').innerHTML = seatNumber;
//costo biglietto
        const km = document.getElementById('km');
        const priceKm = 0.21;
        let totPrice = priceKm * km.value;
        let scontoSenior = (40 / 100) * totPrice;
        let spesaSenior = totPrice - scontoSenior;
        let scontoJunior = (20 / 100) * totPrice;
        let spesaJunior = totPrice - scontoJunior;
        if (agePassenger == 'maggiorenne')
            document.getElementById('cost').innerHTML = parseInt(totPrice);
        else if (agePassenger == "minorenne")
            document.getElementById('cost').innerHTML = parseInt(spesaJunior);
        else if (agePassenger == 'over65')
            document.getElementById('cost').innerHTML = parseInt(spesaSenior);
    }
)