const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const maxRecords=151;//Primeira geração dos pokemons
const limit = 10;
let offset = 0;


function loadPokemonItens(offset, limit) {
    // function convertPokemonToLi(pokemon) {
    //     return `
    //     <li class="pokemon ${pokemon.type}">
    //                 <span class="number">#${pokemon.number}</span>
    //                 <span class="name">${pokemon.name} </span>
    
    //                 <div class="detail">
    //                     <ol class="types">                       
    //                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
    //                     </ol>
    //                     <img src="${pokemon.photo}"
    //                         alt="${pokemon.name}">
    //                 </div>
    //             </li>
    //     `
    // }
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon => `
            <li class="pokemon ${pokemon.type}">
                        <span class="number">#${pokemon.number}</span>
                        <span class="name">${pokemon.name} </span>
        
                        <div class="detail">
                            <ol class="types">                       
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                            </ol>
                            <a href="/ProjetoPokedex/detail.html?${pokemon.number}?${offset}"><img src="${pokemon.photo}"
                                alt="${pokemon.name}"></a>
                        </div>
                    </li>
            `)).join("");
        pokemonList.innerHTML += newHtml;

        
        // 2º versão
        // const newList = pokemons.map((pokemon)=>{
        //     return convertPokemonToLi(pokemon);
        // });

        // const newHtml = newList.join("");


        //  pokemonList.innerHTML += newHtml;


        // 1º versão
        // const listItens = [];
        // for (let i = 0; i < pokemons.length; i++) {
        //     const pokemon = pokemons[i];
        //     listItens.push(convertPokemonToLi(pokemon));
        //    // pokemonList.innerHTML += convertPokemonToLi(pokemon);
        //    // pokemonList.innerHTML = pokemonList.innerHTML + convertPokemonToLi(pokemon);
        // }
        // console.log(listItens);
    })

}
loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
    offset+=limit;
    const qtdRecordNextPage = offset+limit;
    if(qtdRecordNextPage>=maxRecords){
        const newLimit = maxRecords-offset;
        loadPokemonItens(offset,newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    }else{
        loadPokemonItens(offset, limit)
    }

})