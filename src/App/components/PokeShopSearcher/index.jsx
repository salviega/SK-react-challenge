import { ShoppingCartOutlined } from '@ant-design/icons'
import { Button, Col, Grid, Input } from 'antd'
import { useDispatch } from 'react-redux'
import { findPokemon } from '../../../store/actions/pokemonAction'
import { PokeShoppingCar } from '../PokeShoppingCar'
import './PokeShopSearcher.scss'

export function PokeShopSearcher() {
	const dispatch = useDispatch()

	const onSearchPokemon = event => {
		console.log(event.target.value)
		dispatch(findPokemon(event.target.value))
	}
	return (
		<div className='container'>
			<Input.Search
				className='container__searcher'
				placeholder='search...'
				onChange={event => onSearchPokemon(event)}
			/>
			<PokeShoppingCar />
		</div>
	)
}
