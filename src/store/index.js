import {
	applyMiddleware,
	combineReducers,
	compose,
	legacy_createStore as createStore
} from 'redux'
import thunk from 'redux-thunk'
import { pokemonsReducer } from './reducers/pokemonReducer'
import { uiReducer } from './reducers/uiReducer'

const reducers = combineReducers({
	ui: uiReducer,
	pokemons: pokemonsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
)
