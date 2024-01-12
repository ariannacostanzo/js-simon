const logSomething = (something) => console.log(something);

// * 1. Generare 5 numeri casuali da 1 a 100 e stamparli in pagina
// * 2. Creare un timer che parte da 30 e finisce a 0 e mostrarlo in pagina
// * 3. Quando il timer arriva a 0 devo fare sparire i numeri e fare comparire 5 input
// * 4. I valori che l'utente inserisce negli input devono essere confrontati con i numeri casuali generati
// * 5. In base agli input dell'utente faccio apparire in pagina un messaggio relativo al risultato

//!Raccolgo tutti gli elementi della pagina che mi servono
const numbersContainer = document.getElementById('numbers-container');
const countdownContainer = document.getElementById('countdown');

//!----------------------------
//!funzioni
//!----------------------------

//Genero 5 numeri casuali diversi e li inserisco in elementi liste, mostro tutto in pagina
const generateRandomNumbers = () => {

    const randomNumbers = [];
    
    while (randomNumbers.length < 5) {
        
        //Genero numeri finchè l'array non ne ha 5 diversi tra loro
        const randomNumber = Math.floor(Math.random() * 100) +1;

        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
            
            //creo 5 <li> che avranno come testo il numero casuale del ciclo e queste le appendo all'<ul>
            //lo metto all'interno dell'if altrimenti mostrerei in pagina anche i numeri che sono ripetuti
            const listElement = document.createElement('li');
            listElement.innerText = randomNumber;
            numbersContainer.appendChild(listElement);
        }
    }

    logSomething(randomNumbers)
    return randomNumbers;
}

//nascondo tutto al fine countdown

const hideEverything = () => {
    countdownContainer.classList.add('d-none');
    numbersContainer.classList.add('d-none');
};


//!-----------------------------
//!SVOLGIMENTO DELLA LOGICA
//!-----------------------------

//All'avvio della pagina genero 5 numeri casuali diversi (potrei mettere un button che fa iniziare tutto)
generateRandomNumbers();


//Gestisco il countdown
let countdown = 5;
countdownContainer.innerText = countdown;

const countdownInterval = setInterval( () => {
    countdownContainer.innerText = --countdown;

    //quando il countdown arriva a 0 finisce l'intervallo countdown
    if (countdown === 0) {
        
        clearInterval(countdownInterval);

        //nascondo tutto dopo mezzo secondo altrimenti non vedo nemmeno lo 0
        setTimeout(hideEverything, 500)
        
    }



},1000)