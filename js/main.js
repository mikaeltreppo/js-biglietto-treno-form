
document.getElementById('km').innerHTML = km;



const priceKm = 0.21;
let totPrice = priceKm * km;
let scontoSenior = (40 / 100) * totPrice;
let spesaSenior = totPrice - scontoSenior;
let scontoJunior = (20 / 100) * totPrice;
let spesaJunior = totPrice - scontoJunior;

const confirmDom = document.getElementById('confirm');


//mi dice i km inseriti
confirmDom.addEventListener('click',

    function () {
        const kmPassenger = document.getElementById('km');
        const tellKm = kmPassenger.value;
        console.log(tellKm);
    }
)
// mi dice il nome e cognome del passeggero e lo stampa al posto giusto
confirmDom.addEventListener('click',

    function () {
        const namePassenger = document.getElementById('name');
        const tellName = namePassenger.value;
        document.getElementById('tableName').innerHTML = tellName;
    }
)
// mi dice la tipologia di sconto
confirmDom.addEventListener('click',

    function () {
        const valuesDom = document.getElementById('select');
        const agePassenger = valuesDom.value;

        if (agePassenger == 'maggiorenne')
            document.getElementById('offert').innerHTML = 'Nessuno sconto';

        else if (agePassenger == "minorenne")
            document.getElementById('offert').innerHTML = "Sconto Junior 20%";
        else if (agePassenger == 'over65')
            document.getElementById('offert').innerHTML = "Sconto Over 40%";
    }
)
//codice biglietto generator
confirmDom.addEventListener('click',
    function () {

        const ticketNumber = Math.floor(Math.random() * 90001);
        document.getElementById('ticketCode').innerHTML = ticketNumber;
    })

//numero seduta generator
confirmDom.addEventListener('click',
    function () {

        const seatNumber = Math.floor(Math.random() * 56);
        document.getElementById('seatN').innerHTML = seatNumber;
    })









//costo biglietto
confirmDom.addEventListener('click',
    function () {
        const valuesDom = document.getElementById('select');
        const agePassenger = valuesDom.value;

        if (agePassenger == 'maggiorenne')
            document.getElementById('cost').innerHTML = parseInt(totPrice);

        else if (agePassenger == "minorenne")
            document.getElementById('cost').innerHTML =parseInt(spesaJunior);
        else if (agePassenger == 'over65')
            document.getElementById('cost').innerHTML = spesaSenior;
    }
    )