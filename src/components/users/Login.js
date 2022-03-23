import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../../features/userReducer';
import { AiOutlineMail } from 'react-icons/ai';
import { BsKeyFill } from 'react-icons/bs';


const Login = (props) => {
    const dispatch = useDispatch()
    const [alert, setAlert] = useState("");
    const [checkbox, setCheckbox] = useState(true)
    const [email, setEmail] = useState(localStorage.getItem('email')? localStorage.getItem('email') : '')
    const [password, setPassword] = useState(localStorage.getItem('password')? localStorage.getItem('password') : '')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const checkEmail = props.checkEmail(email);
        const checkPassword = props.checkPassword(password);
        const checkResultArray = [checkEmail, checkPassword];

        if (props.arrayCompare(checkResultArray, [false, false]) !== false) {
            setAlert("");

            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function(){
                
                if (this.readyState == 4 && this.status == 200) {
                    if(this.response==='false') {
                        setAlert("Email ou mot de passe incorrect")
                    } else {
                        //Mise en cache
                        if(checkbox){
                            localStorage.setItem('email', email)
                            localStorage.setItem('password', password)
                        } else {
                            localStorage.removeItem('email')
                            localStorage.removeItem('password')
                        }

                        //Mise en Store
                        dispatch(login({
                            name:JSON.parse(this.response).name,
                            firstname: JSON.parse(this.response).firstname,
                            email: JSON.parse(this.response).email,
                            isAdmin: JSON.parse(this.response).isAdmin,
                            state: JSON.parse(this.response).state,
                            id: JSON.parse(this.response).id,
                            loggedIn: true
                        }))
                        //window.location = '/'
                    }
                } 
                else if (this.readyState == 4 && this.status != 200) {
                    setAlert('erreur : '+ this.status);
                }
            }
            xhr.open("GET", `https://www.acb92.com/dao/user.dao.php?function=getOneUserFromBdd&email=${email}&password=${password}`, true)
            //xhr.open("GET", `http://localhost/acb92bis/dao/user.dao.php?function=getOneUserFromBdd&email=${email}&password=${password}`, true)
            xhr.send()

        } else {
            setAlert("Il y a des erreurs");
        }
    }
    
    return (
        <div className="main">
            <form className="loginForm" onSubmit={e => handleSubmit(e)}>
                <h1 className="">Se connecter</h1>
                <p className="">
                Vous n'avez pas de compte?{" "}
                <NavLink to="/register">S'inscrire</NavLink>
                </p>
                {alert && <p className="alert">{alert}</p>}
                <div className="form-group">
                    <div className="form-group-input d-flex align-items-center">
                        <AiOutlineMail className="text-white"/>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(props.htmlEntities(e.target.value).trim())}
                            style={props.messageEmail ? props.borderRed : props.borderGreen}
                        />
                    </div>
                    {props.messageEmail && (
                        <p className="inputMessage" id="message-email">
                        {props.messageEmail}
                        </p>
                    )}
                </div>

                <div className="form-group">
                    <div className="form-group-input d-flex align-items-center rounded">
                        <BsKeyFill className="text-white"/>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Mot de passe" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={props.messagePassword ? props.borderRed : props.borderGreen}
                        />
                    </div>
                    <p className="inputMessage" id="message-pwd">
                        {props.messagePassword}
                    </p>
                </div>

                <div className="checkbox-group">
                    <label htmlFor="checkbox">Se souvenir de moi</label>
                    <input
                        type="checkbox"
                        id="checkbox"
                        name="checkbox"
                        checked={checkbox}
                        onChange={(e) => setCheckbox(e.target.checked)}
                    />
                </div>

                <button>✅ Envoyer ✅</button>
                <p className="">
                <NavLink to="/password_forget">Mot de passe oublié?</NavLink>
                </p>
            </form>
        </div>
    );
};

export default Login;
