import {UserAction, UserModel} from '../actions/userActions'

type UserState={
    user:UserModel
    error: string |undefined
}
const initialState={
    user: {} as UserModel,
    error:undefined
}
const UserReducer=(state:UserState=initialState,actions:UserAction)=>{
switch(actions.type){
    case 'ON_LOGIN':
        return{
            ...state,
            user:actions.payload
        }
    case 'ON_ERROR':
        return{
            ...state,
            error:actions.payload
        }
    default:
        return state;
}
};
export {UserReducer}