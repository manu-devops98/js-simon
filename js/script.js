/* Descrizione:
Visualizzare in pagina 5 numeri casuali poi fateli sparire.
 Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

// prendo il container html 
const container = document.querySelector('.container');
const counter = document.querySelector('.counter');
//     // inserisco nel container 5 numeri random:
//     //   - creo ciclo per generare 5 numeri random in array:
    let seconds = 30;
const timer = setInterval(() => {
    if (seconds > 0) {
        seconds -= 1;
        container.innerHTML = `<h1>Tempo rimasto: ${seconds}</h1>`;
    } else if (seconds == 0) {
        clearInterval(timer); 
        container.innerHTML = ''; 
    }
}, 2000);

let numbRand = [];
for (let i = 0; i < 5; i++) {
    numbRand.push(getRndInteger(1,100));
    console.log(numbRand); //consolelog
    container.innerHTML += `<h2 class="number">${numbRand[i]}</h2>`;
    if (numbRand.length == 5) {
       setTimeout(() => {
           let numbersCorrect = 0;
           let arrayUserNumber = [];
        for (let x = 1; x <= 5; x++) {
            const userNumber = parseInt(prompt(`inserisci numero visualizzato`));
            arrayUserNumber.push(userNumber);
        console.log(arrayUserNumber);//consolelog
        console.log('usernumber',userNumber);//consolelog
            if (numbRand.includes(userNumber)) {
                numbersCorrect += 1;
                if (numbersCorrect == numbRand.length) {
                    container.innerHTML = `<h1>Congratulazioni, hai indovinato tutti i numeri</h1>`;
                console.log('numbersCorrect if',numbersCorrect);//consolelog 
                } else if (numbersCorrect < numbRand.length) {
                    container.innerHTML = `<h1>Peccato, hai indovinato ${numbersCorrect} numeri : ${arrayUserNumber}</h1>`;
                console.log('numbers else', numbersCorrect);//consolelog            
                } 
            } else if (!(numbRand.includes(userNumber))) {
                container.innerHTML = `<h1>Peccato, hai indovinato ${numbersCorrect} numeri : ${arrayUserNumber}</h1>`;
            } 
        }
    }, 33 * 1000); 
    } 
}

    // FUNZIONI         
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}




 

