import { actionPokemon } from '../actionsTypes'
const initialState = {
	pokemons: [],
	loading: false
}

export const pokemonsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionPokemon.SET_POKEMONS:
			return { ...state, pokemons: action.payload }
		case actionPokemon.SET_FAVORITE:
			const newPokemonsList = [...state.pokemons]
			const currentPokemonIndex = newPokemonsList.findIndex(pokemon => {
				return pokemon.id === action.payload.pokemonId
			})

			if (currentPokemonIndex < 0) {
				return state
			}

			newPokemonsList[currentPokemonIndex].favorite =
				!newPokemonsList[currentPokemonIndex].favorite

			return { ...state, pokemons: newPokemonsList }
		default:
			return state
	}
}
