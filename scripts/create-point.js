function popularteUFs () {
    const ufselect = document.querySelector("select[same=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    // .catch      tratamento de erro caso o then de errado - revisar depois 
    //  pode ser assim ou conforme está abaixo                 .then ( (res) => {return res.jason})
    .then ( res    =>   res.jason (  )   )
    .then ( )
}

// document
//         .querySelector("select[name=uf]")
//         .addEventListener("change",     ()  =>  {
//             console.log("mudei")
//         }    )