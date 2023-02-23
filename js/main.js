
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
confirmDom.addEventListener('click',

    function () {
        const valuesDom = document.getElementById('select');
        const agePassenger = valuesDom.value;
 
      if(agePassenger == 'maggiorenne')
      document.getElementById('offert').innerHTML = 'Nessuno sconto';
      
      else if (agePassenger == "minorenne")
      document.getElementById('offert').innerHTML = "Sconto Junior 20%";
      else(agePassenger == 'over65')
      document.getElementById('offert').innerHTML = "Sconto Premorte 40%";
    }
)