document.querySelector('button').addEventListener('click',getFetch)

async function getFetch(){
    const pokeData= await fetch('https://pokeapi.co/api/v2/ability', {
        headers:{
            'Accept': 'application/json'
        }
    });
    const pokeObj= await pokeData.json()
    console.log(pokeObj)

    
for(let i= 0; i < pokeObj.results.length; i++){
    document.querySelector('h2').innerHTML+= "<p>" + pokeObj.results[i].name + " </p>"

}

}