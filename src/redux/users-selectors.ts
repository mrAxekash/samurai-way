import {RootReducersType} from "./redux-store";


export const getUsersPage = (state: RootReducersType) => {
	return state.usersPage
}

export const getPageSize = (state: RootReducersType) => {
	return state.usersPage.pageSize
}

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