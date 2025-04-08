
//RECUPERO ELEMENTI NEL DOM

const pos = document.getElementById(`num`)
/*const foto = document.getElementById(`foto`)
const data = document.getElementById(`date`)
const luogo = document.getElementById(`zona`)*/

// QUESTI ID NON VANNO BENE PERCHE SONO AGGIUNTI 6 VOLTE. ID = "1 VOLTA SOLA"

const riga = document.querySelector(`.row`)




//DICHIARO VARIABILI VUOTA DOVE INSERIRE SUCCESIVAMENTE HTML
let colGen = '';


// CHIAMATA AXIOS E CICLO ARRAY

const contenutoCard = `https://lanciweb.github.io/demo/api/pictures/`

axios.get(contenutoCard).then((card)=>{ //INZIO FUNZIONE CHE CONTIENE TUTTO PROGRAMMA ASINCRONO
    const array = card.data

    console.log(array)

    // ciclco array
    array.forEach((elementi) => { // INIZIO CICLO
        posNum = elementi
        
        //destrutturo array
        const {id, title, date, url}= posNum
        console.log(posNum)

        //creo le col da appendere

        colGen += `<div class="colu-lg-3">
                    <div class="polaroid posizione${id}">
                        <div class="margine">

                            <div class="puntina">
                                <img src="./img/pin.svg" alt="">
                            </div>

                                <div class="fotografia d-flex js-center" >
                                    <img class="sfondo" src=${url} alt="">
                                </div>
                            <div class="data" >${date}</div>
                            <div class="luogo titoli " ><h2>${title.toUpperCase()}</h2></div>
                            
                        </div>
                    </div>
                </div>`


       

        
    }); // FINE CICLO


    riga.innerHTML = colGen
    


    

    // definisco variabile (dentro axios) che prende nel tutti gli elementi con "polaroid"
    const polaroid = document.querySelectorAll(`.pol aroid`)

    console.log(polaroid)
   

    const hoverlay = document.querySelector(`.hoverlay`)
    const chiudi = document.querySelector(`.bottone`)
    



    // funzione che rimuove dalla classe hovelay "d-none" rimuovendo hoverlay
    chiudi.addEventListener(`click`, function(){

        hoverlay.classList.add(`d-none`)   
        
    })

    //funziune che aggiunge di nuovo hoverlay

    polaroid.addEventListener(`click`, function(){

        hoverlay.classList.add(`d-none`)   
        
    })


}) // FINE ASINCRONO




