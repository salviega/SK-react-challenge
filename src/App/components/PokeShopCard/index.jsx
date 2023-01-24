import { Card } from 'antd'
import { useDispatch } from 'react-redux'
import Meta from 'antd/lib/card/Meta'
import './PokeShopCard.scss'

export function PokeShopCard({ name, image, types, id, favorite }) {
	const typesString = types.map(elem => elem.type.name).join(', ')

	return (
		<Card title={name} cover={<img src={image} alt={name} />}>
			<Meta description={typesString} />
		</Card>
	)
}
