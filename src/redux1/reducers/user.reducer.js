import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/user.action"


const initialState = {
    isLoading: false,
    user: {
        id: '',
        name: '',
        firstname: '',
        isConnected: false,
        token: ''
    },
    error: ''
}

const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case LOGIN : 
            return { 
                ...state, 
                isLoading: true 
            }

        case LOGIN_SUCCESS : 
            
            return { 
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                firstname: action.payload.firstname,
                token: action.payload.token,
                isConnected: action.payload.isConnected,
                isLoading : false,
                //error: ''
            }
        
        case LOGIN_ERROR :
            return {
                ...state,
                isLoading: false,
                user: {},
                error: action.payload
            }

        default : return state
    }
}

export default userReducer