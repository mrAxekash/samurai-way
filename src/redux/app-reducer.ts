import {AnyAction, Dispatch} from "redux";
import {authThunkCreator} from "./auth-reducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {RootReducersType} from "./redux-store";


const initialState = {
	isAuthorised: false
}

export const appReducer = (state: InitialStateType = initialState, action: AllActionAppType) => {
	switch (action.type) {
		case "AUTHORISE-SUCCESS": {
			return {...state, isAuthorised: true}
		}
		default: return state
	}
}

//thunks

export const initialised = () => (dispatch : ThunkDispatch<RootReducersType, unknown, AnyAction>) => {

	let promise = dispatch(authThunkCreator())

	Promise.all([promise])
		.then(() => {
			dispatch(changeAuthorisedSuccess())
		})
}

//types

type InitialStateType = typeof initialState

export type AllActionAppType = ReturnType<typeof changeAuthorisedSuccess>

//actions

export const changeAuthorisedSuccess = () => {
	return {
		type: 'AUTHORISE-SUCCESS'
	} as const
}
