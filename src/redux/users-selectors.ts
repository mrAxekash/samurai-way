import {RootReducersType} from "./redux-store";
import {createSelector} from "reselect";


const getUsersPage = (state: RootReducersType) => {
	return state.usersPage
}

export const getUsers = createSelector(getUsersPage,(usersPage) => {
	return usersPage
})

const getPageSize = (state: RootReducersType) => {
	return state.usersPage.pageSize
}

export const pageSize = createSelector(getPageSize, (pageSize: number) => {
	return pageSize
})

export const getTotalUsersCount = (state: RootReducersType) => {
	return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: RootReducersType) => {
	return state.usersPage.currentPage
}

export const getIsFetching = (state: RootReducersType) => {
	return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: RootReducersType) => {
	return state.usersPage.followingInProgress
}