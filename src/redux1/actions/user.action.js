import axios from "axios";

export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

//Action pour afficher le spinner
export const login = (data) => {
    return {
        type: LOGIN,
        payload: data
    }
}

export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload : user
    }
}

export const loginError = (error) => {
    return {
        type : LOGIN_ERROR,
        payload : error
    }
}

//Action pour connecter un utilisateur (login)
export const getUserFromBdd = (data) => {
    console.log('tentative de Login')

    return (dispatch) => {
        dispatch(login())

        return axios.post("users/login", data)
        .then((res) => {
            console.log(res.data);
            //localStorage.setItem('user', JSON.stringify(res.data.user))
            if (res.status === 200) {
                dispatch(loginSuccess(res.data));
            } else {
                dispatch(loginError(res.data.message));
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch(loginError(err.message))
        });
    }
}
    /*
    
    



//Action pour crééer un utilisateur(Signup)
export const addUser = (data) => {
    return (dispatch) => {
        return axios.post("users/signup", data)
        .then((res) => {
            if (res.status === 201) {
                dispatch({ type: ADD_USER, payload: data });
            } else {
                console.log(res.status);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }
}



*/