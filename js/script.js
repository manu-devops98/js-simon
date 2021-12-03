/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

// prendo il container html 
const container = document.querySelector('.container');
const counter = document.querySelector('.counter');
    // inserisco nel container 5 numeri random:
    //   - creo ciclo per generare 5 numeri random in array:
let numbRand = [];
for (let i = 0; i < 5; i++) {
    numbRand.push(getRndInteger(1,100));
    console.log(numbRand);
    container.innerHTML += `<h2 class="number">${numbRand[i]}</h2>`;  
}

    // creo timer di 30 secondi:
        // - timer parte d 30 secondi poi decresce
        // -- timer arriva a zero allora blocco il timer
let seconds = 30;
const timer = setInterval(() => {
    if (seconds > 0) {
        seconds -= 1;
        counter.innerHTML = `<h1>Tempo rimasto: ${seconds}</h1>`;
        container.append(counter);

    } else if (seconds == 0) {
        clearInterval(timer); 
        container.innerHTML = ''; 
    }
}, 1000);















    // FUNZIONI         
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}




 

