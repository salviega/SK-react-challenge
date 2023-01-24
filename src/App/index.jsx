import { Col, Spin } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../services/getPokemons'
import { getPokemonsWithDetails } from '../store/actions/pokemonAction'
import { setLoading } from '../store/actions/uiAction'
import { PokeShopList } from './components/PokeShopList'
import { PokeShopSearcher } from './components/PokeShopSearcher'
import './App.scss'
import logo from '../assets/images/pokeshop.png'

function App() {
	const pokemons = useSelector(state => state.pokemons.pokemonsFound)
	const loading = useSelector(state => state.ui.loading)
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchPokemons = async () => {
			dispatch(setLoading(true))
			const pokemonsRes = await getPokemons()
			dispatch(getPokemonsWithDetails(pokemonsRes))
			dispatch(setLoading(false))
		}

		fetchPokemons()
	}, [])

	return (
		<div className='app'>
			<Col span={4} offset={10}>
				<img src={logo} alt='PokeShop' />
			</Col>
			<Col span={12} offset={9}>
				<PokeShopSearcher />
			</Col>
			{loading ? (
				<Col offset={12}>
					<Spin spinning size='large' />
				</Col>
			) : (
				<PokeShopList pokemons={pokemons} />
			)}
		</div>
	)
}

export default App
