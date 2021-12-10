
import {IState} from '../interfaces'
import {UserList} from '../mock-data/userList'
export const INITITIAL_STATE: IState = {
    users: UserList
}
export const usersReducer = function (state: IState = INITITIAL_STATE, action: any) {
    
    
    switch (action.type) {
      case "ADD_USER":{
        console.log("usersReducer ADD_USER", action);
        return {...state, users: {...state.users, [action.payload.id]: action.payload} }
      }
        
      case "DELETE_USER":{
        console.log("usersReducer DELETE_USER", action);
          let newUsersList = state.users
          return {...state, users: Object.keys(newUsersList)?.filter(key => key !== action.payload)}
      }
      default:
        return state;
    }
  };