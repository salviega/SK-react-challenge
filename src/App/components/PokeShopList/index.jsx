import { PokeShopCard } from '../PokeShopCard'
import './PokeShopList.scss'

export function PokeShopList({ pokemons }) {
	return (
		<div className='PokemonList'>
			{pokemons.map(pokemon => {
				return (
					<PokeShopCard
						name={pokemon.name}
						key={pokemon.name}
						image={pokemon.sprites.front_default}
						types={pokemon.types}
						id={pokemon.id}
						favorite={pokemon.favorite}
					/>
				)
			})}
		</div>
	)
}
