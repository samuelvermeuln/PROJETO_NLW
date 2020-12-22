    // .catch      tratamento de erro caso o then de errado - revisar depois 
    //  pode ser assim ou conforme está abaixo                 .then ( (res) => {return res.jason})    

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {

        for ( const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
        
    })
}

populateUFs()


document
    .querySelector("select[name=uf]")
    .addEventListener("change", ( ) => {
        console.log("mudei")
    })