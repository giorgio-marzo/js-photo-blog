
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
        console.log(posNum)
        

        
    });
}) 

