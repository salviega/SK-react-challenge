import { getPokemonDetails } from '../../services/getPokemons'
import { actionPokemon } from '../actionsTypes'

export const buyPokemon = payload => ({
	type: actionPokemon.BUY_POKEMONS,
	payload
})

export const findPokemon = payload => ({
	type: actionPokemon.FIND_POKEMON,
	payload
})

export const listPokemon = payload => ({
	type: actionPokemon.LIST_POKEMON,
	payload
})

export const setFavorite = payload => ({
	type: actionPokemon.SET_FAVORITE,
	payload
})

export const setPokemons = payload => ({
	type: actionPokemon.SET_POKEMONS,
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
