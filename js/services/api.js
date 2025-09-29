async function getPokemons() {
    try {
        const url = 'https://pokeapi.co/api/v2/pokemon';
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error no se pudo obtener los Pokemons:', error);
        return [];
    }
    
}
getPokemons();