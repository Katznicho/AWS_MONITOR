
export const initialState = {
    user:null
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'REGISTER_USER':
            return {
                ...state,
                user,
            }

           
    default:
        return state
    }
}