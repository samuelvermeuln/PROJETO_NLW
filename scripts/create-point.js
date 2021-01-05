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

    // essa parte do codigo comentada serve para limpar o selector toda vez que o estado UF mudar
    // while (citySelect.firstChild) {
    //     citySelect.removeChild(citySelect.firstChild)        
    //   }
    // essa parte abaixo faz a mesma coisa e porém deixa "Selecione a Cidade" aparecendo 
    citySelect.innerHTML  = `<option value> Selecione a Cidade </option>`
    citySelect.disabled = true
    //      target -> ele ta pegando o valor de "select[name=uf]"
    //          o value e o state.id
    //console.log(event.target.value)

    fetch(url)
        .then(res => res.json())
        .then(cities => {
            for (const city of cities) {
                citySelect.innerHTML  += `<option value="${city.nome}">${city.nome}</option>`                
                }                
                citySelect.disabled = false
            })
} 

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)
    // .addEventListener("change", getCities) não passo os ( ) -> se eu passar ela executa na hora e preciso esperar antes de execultar quando mudar ele vai execultar

//                                           INICIO DO ITENS DE COLETA 

//pegar todos os li´s
const itemsToCollect = document.querySelectorAll(".items-grid li")

for ( const item of itemsToCollect) {
    item.addEventListener("click", handleselectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems= []

function handleselectedItem(event) {
    const itemLi = event.target

    // Adicionar ou remover uma classe com javaScript
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    // Verifica se existe itens selecionados, se sim 
    // pega os itens selecionados 

    const alReadySelected  = selectedItems.findIndex ( item => {
        const itemFound = item == itemId // isso será true ou false
        return itemFound
    } )

// se ja estiver selecionado 
if (alReadySelected >= 0){
    // Tira da seleção
    const filteredItems = selectedItems.filter( item => {
        const itemIsDifferent = item != itemId // tem que Retorna falta
        return itemIsDifferent
    })
    selectedItems = filteredItems
}else {
    // se não tiver selecionado 
    // adiciona á seleção
    selectedItems.push(itemId)
}

// atualiza o campo escondido com os itens selecionados (input)
collectedItems.value = selectedItems


}
