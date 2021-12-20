

import { Dispatch } from 'redux';
import {IState} from '../interfaces'
import {UserList} from '../mock-data/userList'
export const INITITIAL_STATE: IState = {
    users: {}
}
export const usersReducer = function (state: IState = INITITIAL_STATE, action: any) {
    
    
    switch (action.type) {
      case "LOAD_USER":{
        console.log("usersReducer LOAD_USER", action);
        return action.payload
      }

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
  export const loadUsers = () => (dispatch: Dispatch, getState: any ) => {
fetch('').then(res => res.json)
  }