import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Badge, Button, Drawer } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyPokemon } from '../../../store/actions/pokemonAction'
import { notification } from 'antd'
import './PokeShoppingCar.scss'

export function PokeShoppingCar() {
	const [open, setOpen] = useState(false)
	const [api, contextHolder] = notification.useNotification()
	const dispatch = useDispatch()
	const pokemonsListed = organizeList(
		useSelector(state => state.pokemons.pokemonsListed)
	)
	const pokemonsTotal = pokemonsListed.length

	const showDrawer = () => {
		setOpen(true)
	}

	const onClose = () => {
		setOpen(false)
	}

	const onBuy = placement => {
		api.success({
			message: 'Purchase succesful',
			description: ' ',
			duration: 1
		})
		dispatch(buyPokemon())
	}

	return (
		<>
			{contextHolder}
			<Badge count={pokemonsTotal}>
				<Button
					shape='circle'
					icon={<ShoppingCartOutlined />}
					onClick={showDrawer}
				/>
			</Badge>
			<Drawer title='Shopping' placement='right' onClose={onClose} open={open}>
				{pokemonsListed.length !== 0 &&
					pokemonsListed.map((pokemon, index) => (
						<div className='shopping-car' key={index}>
							<p className='shopping-car__text'>
								{pokemon.count}x {pokemon.item.name}{' '}
							</p>
							{
								<Button
									className='shopping-car__button'
									type='primary'
									danger
									icon={<DeleteOutlined />}
								></Button>
							}
						</div>
					))}
				{pokemonsTotal !== 0 && (
					<Button
						type='primary'
						icon={<ShoppingCartOutlined />}
						onClick={() => onBuy('topRight')}
					>
						Buy
					</Button>
				)}
			</Drawer>
		</>
	)
}

function organizeList(list) {
	let newList = []

	const listOrganized = list.reduce(
		(a, c) => a.set(c, (a.get(c) || 0) + 1),
		new Map()
	)
	const destructList = [...listOrganized]

	destructList.map(pokemon => {
		const item = {
			count: pokemon[1],
			item: pokemon[0]
		}
		newList.push(item)
	})

	newList.sort((a, b) => {
		let fa = a.item.name.toLowerCase(),
			fb = b.item.name.toLowerCase()

		if (fa < fb) {
			return -1
		}
		if (fa > fb) {
			return 1
		}
		return 0
	})

	return newList
}
