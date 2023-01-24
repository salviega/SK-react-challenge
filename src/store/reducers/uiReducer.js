import { actionUi } from '../actionsTypes'
const initialState = {
	laoding: false
}

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionUi.SET_LOADING:
			return { ...state, loading: action.payload }
		default:
			return state
	}
}
