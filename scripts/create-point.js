// .catch      tratamento de erro caso o then de errado - revisar depois 
//  pode ser assim ou conforme está abaixo                 .then ( (res) => {return res.jason})    

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {

            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }

        })
}
// executando a function
populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value    

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text 

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`    

    while (citySelect.firstChild) {
        citySelect.removeChild(citySelect.firstChild)
      }


    //      target -> ele ta pegando o valor de "select[name=uf]"
    //          o value e o state.id
    // console.log(event.target.value)

    fetch(url)
        .then(res => res.json())
        .then(cities => {
            for (const city of cities) {
                citySelect.innerHTML  += `<option value="${city.id}">${city.nome}</option>`                
                }                
                citySelect.disabled = false
            })
} 


document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)
    
        
    // .addEventListener("change", getCities) não passo os ( ) -> se eu passar ela executa na hora e preciso esperar antes de execultar quando mudar ele vai execultar