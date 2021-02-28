import {USER_REGISTER_SUCCESS, USER_LOGIN_SUCCESS, LOGOUT_SUCCESS}from '../constants';
const initialState = {
    currentUser:null
}
export const user = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                currentUser:{name:action.payload.name, email:action.payload.email,
                    passwors:action.payload.password}
            }
        case USER_LOGIN_SUCCESS:
            return{
                ...state,currentUser:action.payload
            }
        case LOGOUT_SUCCESS:
            return{
                ...state , currentUser:{}
            }

        default:
            return state
     }
 }