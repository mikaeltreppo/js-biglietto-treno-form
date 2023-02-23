
const confirmDom = document.getElementById('confirm');
//mi dice i km inseriti
confirmDom.addEventListener('click',

    function () {
        const kmPassenger = document.getElementById('km');
        const tellKm = kmPassenger.value;
        console.log(tellKm);
    }
)
// mi dice il nome e cognome del passeggero
confirmDom.addEventListener('click',

    function () {
        const namePassenger = document.getElementById('name');
        const tellName = namePassenger.value;
        document.getElementById('tableName').innerHTML = tellName;
    }
)