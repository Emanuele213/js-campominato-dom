const eleGrid = document.querySelector('.main-container');
const eleSend = document.querySelector('.mod-btn'); 
const difficulty = document.querySelector('#difficolta');
const eleStart = document.querySelector('.start-screen');
let victory = [];
const square = document.querySelectorAll('.sq');

eleSend.addEventListener('click', function () { 
    const eleDifficulty = difficulty.value;
    eleStart.classList.add('hidden');
    eleGrid.classList.remove('hidden');
    eleGrid.replaceChildren();

if (eleDifficulty == 'easy') {
    for (let i = 1; i <= 100; i++) {
        const eleSq = document.createElement('div');
        eleSq.classList.add('sq');
        eleGrid.append(eleSq);
        eleSq.append([i]);
    }

    // SELEZIONE QUADRATINI
    const square = document.querySelectorAll('.sq');   //array per TUTTI i quadratini
    
    for (let i = 0; i < 100; i++) {   //for per selezionare un quadratino
        square[i].addEventListener('click', 
            function() {
                square[i].classList.add('overlay'); 
            }
        )
    }

     // MINE RANDOM
    let mines = [];   //array per le mine
    const howManyMines = 16;   //numero di mine (si può cambiare)

    while(mines.length < howManyMines) {   //questo while va avanti finché non ha elementi pari al numero di mine (howManyMines)
        let numMina = Math.floor(Math.random() * 100) + 1;
        if(mines.indexOf(numMina) === -1) {   //controllo per vedere se un numero è già uscito
            mines.push(numMina);   //solo se il numero non è già uscito viene pushato all'interno dell'array per le mine
        }
    }

    // SELEZIONE MINA
    for (let i = 0; i < 100; i++) {   //questo for avviene tante volte quanto il numero di quadratini (howMany)
        square[i].addEventListener('click', function() {
                let victory = document.querySelectorAll('.overlay');   //questo serve per contare il punteggio finale
                if(mines.includes(i+1)) {
                    for(i=0; i<howManyMines; i++) {   // questo for avviene tante volte quanto il numeri di mine (howManyMines)
                        square[mines[i]-1].classList.add('exploded');   //seleziona TUTTE le mine quando ne viene cliccata una
                    }
                    eleGrid.innerHTML += `<div class="endgame"> <div>Hai perso!</div> <div class="score">Punteggio: ${victory.length - 1}</div> </div>`;  //schermata finale
                }
            }
        )
    }

    // VITTORIA
    for (let i = 0; i < 100; i++) {
        square[i].addEventListener('click', 
            function() {
                let victory = document.querySelectorAll('.overlay');   //questo serve per contare il punteggio finale e controllare se si ha vinto (nel prossimo if)
                if(victory.length === 100 - howManyMines && document.querySelectorAll('.exploded').length === 0){   //controlla se tutte le caselle sono state selezionate e se non ci sono mine esplose (il controllo per le mine serve nel caso in cui selezioni una mina proprio come ultima scelta prima di vincere)
                    for(i=0; i<howManyMines; i++) {
                        square[mines[i]-1].classList.add('disinnescata');   //rende tutte le mine verdi nel caso di vittoria
                    }
                    eleGrid.innerHTML += `<div class="endgame"> <div>Hai vinto!</div> <div class="score">Punteggio: ${victory.length}</div> </div>`;   //schermata finale
                }
            }
        )
    }

}else if (eleDifficulty == 'hard') {
    for (let i = 1; i <= 81; i++) {
        const eleSq = document.createElement('div');
        eleSq.classList.add('sq', 'hard');
        eleGrid.append(eleSq);
        eleSq.append([i]);
    }

    // SELEZIONE QUADRATINI
    const square = document.querySelectorAll('.sq');   //array per TUTTI i quadratini
    
    for (let i = 0; i < 81; i++) {   //for per selezionare un quadratino
        square[i].addEventListener('click', 
            function() {
                square[i].classList.add('overlay'); 
            }
        )
    }

     // MINE RANDOM
    let mines = [];   //array per le mine
    const howManyMines = 16;   //numero di mine (si può cambiare)

    while(mines.length < howManyMines) {   //questo while va avanti finché non ha elementi pari al numero di mine (howManyMines)
        let numMina = Math.floor(Math.random() * 81) + 1;
        if(mines.indexOf(numMina) === -1) {   //controllo per vedere se un numero è già uscito
            mines.push(numMina);   //solo se il numero non è già uscito viene pushato all'interno dell'array per le mine
        }
    }

    // SELEZIONE MINA
    for (let i = 0; i < 81; i++) {   //questo for avviene tante volte quanto il numero di quadratini (howMany)
        square[i].addEventListener('click', function() {
                let victory = document.querySelectorAll('.overlay');   //questo serve per contare il punteggio finale
                if(mines.includes(i+1)) {
                    for(i=0; i<howManyMines; i++) {   // questo for avviene tante volte quanto il numeri di mine (howManyMines)
                        square[mines[i]-1].classList.add('exploded');   //seleziona TUTTE le mine quando ne viene cliccata una
                    }
                    eleGrid.innerHTML += `<div class="endgame"> <div>Hai perso!</div> <div class="score">Punteggio: ${victory.length - 1}</div> </div>`;  //schermata finale
                }
            }
        )
    }

    // VITTORIA
    for (let i = 0; i < 81; i++) {
        square[i].addEventListener('click', 
            function() {
                let victory = document.querySelectorAll('.overlay');   //questo serve per contare il punteggio finale e controllare se si ha vinto (nel prossimo if)
                if(victory.length === 81 - howManyMines && document.querySelectorAll('.exploded').length === 0){   //controlla se tutte le caselle sono state selezionate e se non ci sono mine esplose (il controllo per le mine serve nel caso in cui selezioni una mina proprio come ultima scelta prima di vincere)
                    for(i=0; i<howManyMines; i++) {
                        square[mines[i]-1].classList.add('disinnescata');   //rende tutte le mine verdi nel caso di vittoria
                    }
                    eleGrid.innerHTML += `<div class="endgame"> <div>Hai vinto!</div> <div class="score">Punteggio: ${victory.length}</div> </div>`;   //schermata finale
                }
            }
        )
    }

}else if (eleDifficulty == 'crazy') {
    for (let i = 1; i <= 49; i++) {
        const eleSq = document.createElement('div');
        eleSq.classList.add('sq', 'crazy');
        eleGrid.append(eleSq);
        eleSq.append([i]);
    }

    // SELEZIONE QUADRATINI
    const square = document.querySelectorAll('.sq');   //array per TUTTI i quadratini
    
    for (let i = 0; i < 49; i++) {   //for per selezionare un quadratino
        square[i].addEventListener('click', 
            function() {
                square[i].classList.add('overlay'); 
            }
        )
    }

     // MINE RANDOM
    let mines = [];   //array per le mine
    const howManyMines = 16;   //numero di mine (si può cambiare)

    while(mines.length < howManyMines) {   //questo while va avanti finché non ha elementi pari al numero di mine (howManyMines)
        let numMina = Math.floor(Math.random() * 49) + 1;
        if(mines.indexOf(numMina) === -1) {   //controllo per vedere se un numero è già uscito
            mines.push(numMina);   //solo se il numero non è già uscito viene pushato all'interno dell'array per le mine
        }
    }

    // SELEZIONE MINA
    for (let i = 0; i < 49; i++) {   //questo for avviene tante volte quanto il numero di quadratini (howMany)
        square[i].addEventListener('click', function() {
                let victory = document.querySelectorAll('.overlay');   //questo serve per contare il punteggio finale
                if(mines.includes(i+1)) {
                    for(i=0; i<howManyMines; i++) {   // questo for avviene tante volte quanto il numeri di mine (howManyMines)
                        square[mines[i]-1].classList.add('exploded');   //seleziona TUTTE le mine quando ne viene cliccata una
                    }
                    eleGrid.innerHTML += `<div class="endgame"> <div>Hai perso!</div> <div class="score">Punteggio: ${victory.length - 1}</div> </div>`;  
                }
            }
        )
    }

    // VITTORIA
    for (let i = 0; i < 49; i++) {
        square[i].addEventListener('click', 
            function() {
                let victory = document.querySelectorAll('.overlay');   //questo serve per contare il punteggio finale 
                if(victory.length === 49 - howManyMines && document.querySelectorAll('.exploded').length === 0){   
                    for(i=0; i<howManyMines; i++) {
                        square[mines[i]-1].classList.add('disinnescata');   //rende tutte le mine verdi nel caso di vittoria
                    }
                    eleGrid.innerHTML += `<div class="endgame"> <div>Hai vinto!</div> <div class="score">Punteggio: ${victory.length}</div> </div>`;  
                }
            }
        )
    }
}
});