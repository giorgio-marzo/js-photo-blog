
//RECUPERO ELEMENTI NEL DOM

const pos = document.getElementById(`num`)
const foto = document.getElementById(`foto`)
const data = document.getElementById(`date`)
const luogo = document.getElementById(`zona`)
const riga = document.querySelector(`.row`) 

//DICHIARO VARIABILE VUOTA DOVE INSERIRE SUCCESIVAMENTE HTML
let colGen = '';

// CHIAMATA AXIOS E CICLO ARRAY

const contenutoCard = `https://lanciweb.github.io/demo/api/pictures/`

axios.get(contenutoCard).then((card)=>{
    const array = card.data

    console.log(array)

    array.forEach((elementi) => {
        posNum = elementi
        
        //destrutturo array
        const {id, title, date, url}= posNum
        console.log(posNum)

        //creo le col da appendere

        colGen += `<div class="colu-lg-3" id="${id}">
                    <div class="polaroid">
                        <div class="margine">

                            <div class="puntina">
                                <img src="./img/pin.svg" alt="">
                            </div>

                                <div class="fotografia d-flex js-center" id="foto">
                                    <img class="sfondo" src=${url} alt="">
                                </div>
                            <div class="data" id="date">${date}</div>
                            <div class="luogo titoli " id="zona"><h2>${title.toUpperCase()}</h2></div>
                            
                        </div>
                    </div>
                </div>`
        
    });


    riga.innerHTML = colGen


}) 

