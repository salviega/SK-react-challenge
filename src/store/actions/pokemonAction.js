import { getPokemons, getPokemonDetails } from '../../services/getPokemons'
import { actionPokemon } from '../actionsTypes'

export const setPokemons = payload => ({
	type: actionPokemon.SET_POKEMONS,
	payload
})

export const setFavorite = payload => ({
	type: actionPokemon.SET_FAVORITE,
	payload
})

export const getPokemonsWithDetails =
	(pokemons = []) =>
	async dispatch => {
		const pokemonsDetailed = await Promise.all(
			pokemons.map(pokemon => {
				return getPokemonDetails(pokemon)
			})
		)

		dispatch(setPokemons(pokemonsDetailed))
	}
