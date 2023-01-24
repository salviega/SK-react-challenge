import { Card, Button } from 'antd'
import { useDispatch } from 'react-redux'
import Meta from 'antd/lib/card/Meta'
import './PokeShopCard.scss'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { listPokemon } from '../../../store/actions/pokemonAction'

export function PokeShopCard(props) {
	const { name, image, types, id } = props
	const dispatch = useDispatch()
	const typesString = types.map(elem => elem.type.name).join(', ')

	const buyPokemon = () => {
		dispatch(listPokemon(id))
	}

	return (
		<Card
			title={name}
			cover={<img src={image} alt={name} />}
			extra={
				<Button
					type='primary'
					icon={<ShoppingCartOutlined />}
					onClick={buyPokemon}
				>
					Buy
				</Button>
			}
		>
			<Meta description={typesString}></Meta>
		</Card>
	)
}
