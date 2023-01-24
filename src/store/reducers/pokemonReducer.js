import { actionPokemon } from '../actionsTypes'
const initialState = {
	pokemons: [],
	pokemonsFound: [],
	pokemonsListed: []
}

export const pokemonsReducer = (state = initialState, action) => {
	const pokemons = [...state.pokemons]
	const pokemonsListed = [...state.pokemonsListed]
	switch (action.type) {
		// case actionPokemon.SET_FAVORITE:
		// 	const newPokemonsList = [...state.pokemons]
		// 	const currentPokemonIndex = newPokemonsList.findIndex(pokemon => {
		// 		return pokemon.id === action.payload.pokemonId
		// 	})

		// 	if (currentPokemonIndex < 0) {
		// 		return state
		// 	}

		// 	newPokemonsList[currentPokemonIndex].favorite =
		// 		!newPokemonsList[currentPokemonIndex].favorite

		// 	return { ...state, pokemons: newPokemonsList }
		case actionPokemon.BUY_POKEMONS:
			return { ...state, pokemonsListed: [] }

		case actionPokemon.FIND_POKEMON:
			let pokemonsFound = pokemons.filter(pokemon =>
				pokemon.name.includes(action.payload)
			)
			if (pokemonsFound === []) pokemonsFound = pokemons
			return { ...state, pokemonsFound: pokemonsFound }

		case actionPokemon.LIST_POKEMON:
			const pokemonFound = pokemons.find(
				pokemon => pokemon.id === action.payload && pokemon
			)
			pokemonsListed.push(pokemonFound)

			return { ...state, pokemonsListed: pokemonsListed }

		case actionPokemon.SET_POKEMONS:
			return {
				...state,
				pokemons: action.payload,
				pokemonsFound: action.payload
			}
		default:
			return state
	}
}
