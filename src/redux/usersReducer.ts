import { Dispatch } from 'redux';
import { IState, IUser } from '../interfaces'
import { UserList } from '../mock-data/userList'
export const INITITIAL_STATE: IState = {
  users: UserList
}
export const usersReducer = function (state: IState = INITITIAL_STATE, action: any) {

  debugger
  switch (action.type) {
    case "LOAD_USER": {
      console.log("usersReducer LOAD_USER", action);
      return { ...state, users: action.payload }
    }

    case "ADD_USER": {
      console.log("usersReducer ADD_USER", action);
      return { ...state, users: { [action.payload.id]: action.payload, ...state.users } }
      //return { ...state, users: { ...state.users, [action.payload.id]: action.payload } }
    }

    case "EDIT_USER": {
      debugger
      console.log("usersReducer EDIT_USER", action);
      return {
        ...state,
        users: {
          ...state.users, [action.payload.id]: action.payload
        }
      }

    }

    case "DELETE_USER": {
      console.log("usersReducer DELETE_USER", action);
      let userList = { ...state.users }
      delete userList[action.payload];
      return { ...state, users: userList }
      //let newUsersList = state.users
      //return { ...state, users: Object.keys(newUsersList)?.filter(key => key !== action.payload) }
    }

    // case "SEARCH_BY_FULL_NAME": {
    //   console.log("usersReducer SEARCH_BY_FULL_NAME", action);
    //   let val = action.payload;
    //   if (val === "")
    //     return { ...state, users: state.users }
    //   let userList = { ...state.users }
    //   const arr = Object.values(userList)
    //   const res = arr.filter((item) => {
    //     if (item.lastName !== undefined)
    //       return item.firstName.toLowerCase().includes(val.toLowerCase()) || item.lastName.toLowerCase().includes(val.toLowerCase());
    //     else
    //       return item.firstName.toLowerCase().includes(val.toLowerCase());

    //   })
    //   debugger
    //   const dictionary: { [key: string]: IUser } = Object.assign({}, ...res.map((x) => ({ [x.id.toString()]: x })));
    //   return { ...state, users: dictionary }
    // }



    default:
      return state;
  }
};
export const loadUsers = () => (dispatch: Dispatch, getState: any) => {
  fetch('../mock-data/userList').then(res => {
    return dispatch({ type: 'LOAD_USER', payload: res.json })
  })
}