import axios from 'axios'

export async function getPokemons() {
	const response = await axios.get(
		'https://pokeapi.co/api/v2/pokemon?limit=151'
	)
	return response.data.results
}

export async function getPokemonDetails(pokemon) {
	const response = await axios.get(pokemon.url)
	return response.data
}
