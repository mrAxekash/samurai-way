import {UserStateType} from "../redux/users-reducer";

export const updateObjectInArray = (items: UserStateType[], itemId: number, newObjProps: { followed: boolean }, objPropsName: 'id' | 'photos' | 'name' | 'followed' | 'status' | 'location' ) => {
    return items.map(user => user[objPropsName] === itemId ? {...user, ...newObjProps} : user )
}