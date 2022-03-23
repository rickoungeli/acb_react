import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Attention from '../../images/attention.png'

const Register = (props) => {
    const [alert, setAlert] = useState('')
    const [code, setCode] = useState('') //code d'accès transmis aux membres du groupe whatsapp
    const [user, setUser] = useState({ 
        name: '',
        firstname: '',
        email: '',
        password: '',
        passwordConfirm: ''
     })
    
    const handleCodeSubmit = (e) => {
        e.preventDefault()
        const checkCode = props.checkCode(code)
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        const checkName = props.checkName(user.name)
        const checkFirstname = props.checkFirstname(user.firstname)
        const checkEmail = props.checkEmail(user.email)
        const checkPassword = props.checkPassword(user.password)
        const checkPasswordConfirm = props.checkPasswordConfirm(user.password, user.passwordConfirm)
        const checkResultArray=[checkName, checkFirstname, checkEmail, checkPassword, checkPasswordConfirm]

        const arrayCompare = props.arrayCompare(checkResultArray, [false, false, false, false, false])
        //console.log(arrayCompare);
        
        if ( props.arrayCompare(checkResultArray, [false, false, false, false, false]) !== false) {
            setAlert('')
            
            const data = new FormData()
            data.append('function', 'insertUserIntoBdd')
            data.append('name', props.htmlEntities(user.name).trim().toUpperCase()) 
            data.append('firstname', props.htmlEntities(user.firstname).trim())  
            data.append('email', user.email) 
            data.append('password', user.password)
            
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function(){               
                if (this.readyState == 4 && this.status == 200) {
                    if(this.response==='') {
                        setAlert("Echec : l'inscription n'a pas réussi")
                    } else {
                        if(this.response==='Vous avez été enregistré avec succès'){
                            setAlert(this.response)
                            setUser({
                                name: '',
                                firstname: '',
                                email: '',
                                password: '',
                                passwordConfirm: ''
                            })
                            setTimeout(() => {
                                setAlert('')
                            }, 2000);
                        }
                        setAlert(this.response)
                        //window.location = '/'
                    }
                } 
                else if (this.readyState == 4 && this.status != 200) {
                    setAlert("Echec");
                }
                
            }
            xhr.open("POST", `https://www.acb92.com/dao/user.dao.php`, true)
            //xhr.open("POST", `http://localhost/acb92bis/dao/user.dao.php`, true)
            xhr.send(data)
            
        } else {
            setAlert('Il y a des erreurs')
        }  
    }
    
    return (
        <div className='main register'>
            
            {code==='1992'? (
                <form className='loginForm' onSubmit = {e => handleSubmit(e)}>
                    <h1 className="">S'inscrire</h1>
                    <p className="">Vous avez déjà un compte? <NavLink to="/login">Se connecter</NavLink></p>
                    {alert && <p className='alert'>{alert}</p> }
                    <div className="form-group">
                        <input 
                            type="text" 
                            placeholder="Nom" 
                            value = {user.name} 
                            onChange={(e) =>setUser({...user, name: props.htmlEntities(e.target.value).trim().toUpperCase()})} 
                            style = {props.messageName? props.borderRed : props.borderGreen}
                        />
                        {props.messageName && <p className="inputMessage">{props.messageName}</p> }
                    </div>

                    <div className="form-group">
                        <input 
                            type="text" 
                            placeholder="Prénom" 
                            value = {user.firstname} 
                            onChange={(e) =>setUser({...user, firstname: props.htmlEntities(e.target.value).trim()})} 
                            style = {props.messageFirstname? props.borderRed : props.borderGreen}
                        />
                        {props.messageFirstname && <p className="inputMessage">{props.messageFirstname}</p> }
                    </div>

                    <div className="form-group">
                        <input 
                            type="text" 
                            placeholder="Email" 
                            value = {user.email} 
                            onChange={(e) =>setUser({...user, email: props.htmlEntities(e.target.value).trim()})} 
                            style = {props.messageEmail? props.borderRed : props.borderGreen}
                        />
                        {props.messageEmail && <p className="inputMessage">{props.messageEmail}</p> }
                    </div>

                    <div className="form-group">
                        <input 
                            type="password" 
                            placeholder="Mot de passe" 
                            value = {user.password} 
                            onChange={(e) =>setUser({...user, password: props.htmlEntities(e.target.value).trim()})} 
                            style = {props.messagePassword? props.borderRed : props.borderGreen}
                        />
                        <p className="inputMessage">{props.messagePassword}</p>
                    </div>

                    <div className="form-group">
                        <input 
                            type="password" 
                            placeholder="Confirmer mot de passe" 
                            value = {user.passwordConfirm} 
                            onChange={(e) =>setUser({...user, passwordConfirm: props.htmlEntities(e.target.value).trim()})} 
                            style = {props.messagePasswordConfirm? props.borderRed : props.borderGreen}
                        />
                        <p className="inputMessage">{props.messagePasswordConfirm}</p>
                    </div>
                                    
                    <button>✅ Envoyer ✅</button>
                    <small>En cliquant sur envoyer, vous acceptez nos <a href='www'>conditions générales</a> et notre politique des coockies</small>
                    
                </form>
            ) : (
                <form className='loginForm' onSubmit = {e => handleCodeSubmit(e)}>
                    <div className='fs-1 text-center'><img src={Attention} alt="Attention"/></div>
                    <input 
                        type="text" 
                        placeholder="Veuillez renseigner le code d'accès" 
                        value = {code} 
                        onChange={(e) =>setCode(e.target.value)} 
                        style = {props.messageCode? props.borderRed : props.borderGreen}
                    />
                    {props.messageCode && <p className="inputMessage">{props.messageCode}</p> }
                    <small>Il s'agit d'un code communiqué au groupe whatsapp des ACB92</small>
                    <button>✅ Envoyer ✅</button>
                </form>
            ) }
        </div>
    );
};

export default Register;