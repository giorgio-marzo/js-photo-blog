
//RECUPERO ELEMENTI NEL DOM


// CHIAMATA AXIOS

const contenutoCard = `https://lanciweb.github.io/demo/api/pictures/`

const ciclare = axios.get(contenutoCard).then((card)=>{
    console.log(card.data)
}) 
