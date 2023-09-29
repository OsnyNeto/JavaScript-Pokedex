const pokemon_detail = document.getElementById('pokemon_detail');
const pokemon_detail2 = document.getElementById('pokemon_detail2');
const number_pokemon = (window.location.href).split('?')[1];
let id_podkemon = number_pokemon - 1;
const limit = 10;
let offset = (window.location.href).split('?')[2];
let url = `https://pokeapi.co/api/v2/pokemon/${number_pokemon}`;




pokeApi.getPokemonsDetalhamento(url).then((pokemons = []) => {
    
    const newHtml = `
            
            <li class="pokemon ${pokemons.type}">
                <span class="number">#${pokemons.number}</span>
                <h1 class="name">${pokemons.name} </h1>
        
                <div class="detail">
                    <img src="${pokemons.photo}" alt="${pokemons.name}">
                </div>
            </li>
            <li class="pokemon ${pokemons.type}">       
                <span>Type</span>
                <div class="detail_types">
                    <ol class="types">                       
                        ${pokemons.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                    </ol>
                </div>
                <span>Ability</span>                    
                <div class="detail_types">
                    
                    <ol class="abilitys">
                        ${pokemons.abilitys.map((ability) => `<li class="ability ${ability}">${ability}</li>`).join("")}
                    </ol>
                </div>
                
                    
                        <button onclick="location.href='index.html'" id="button_voltar"class="detail_types ${pokemons.type} types type">Voltar</button>
                    
                       
            </li>
            
            `;
    pokemon_detail.innerHTML += newHtml;
    const newHtml2 = `
        <li class="pokemon moves ${pokemons.type} ">
            <span>Moves</span>
            <div class="detail_types"> 
               
                <ol class="moves">
                ${pokemons.moves.map((move) => `<li class="move ${move}">${move}</li>`).join("")}
                </ol>
            <div>
        </li>
    `;
    pokemon_detail2.innerHTML += newHtml2;

   
})
