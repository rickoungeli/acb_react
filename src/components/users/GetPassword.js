import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const GetPassword = () => {
    const [email, setEmail] = useState('')
    const [alert, setAlert] = useState('')
    const [alert1, setAlert1] = useState('')
    const [message, setMessage] = useState({
        email: '',
    })
    let ctrl = 0

    const handleSubmit = e => {
        e.preventDefault()
        //envoie d'email
    }

    return (
        <main className="container col-lg-8 bg-white rounded-2 perso-main" style={{minHeight: 500}}>

            <div className="row no-gutters w-100">
                <form onSubmit={(e)=>handleSubmit(e)} className="form col-12 col-md-8 col-lg-6  mx-auto bg-white shadow-sm p-3 rounded border border-secondary">
                    <div className="d-flex bg-dark text-white p-2 rounded-top text-center mx-auto mb-2">
                        <h3 className="text-white text-center mt-2">MOT DE PASSE OUBLIE</h3>
                    </div>
                    {alert !== "" && <div className='alert alert-danger my-0' role='alert'>{alert}</div> }
                    {alert1 !== "" && (
                        <div className='alert alert-success my-0' role='alert'>
                            <p className='fw-bold mb-1'>{alert1}</p>
                            <p>Vous allez recevoir un lien de réinitialisation de votre mot de passe par courriel. Cela peut prendre quelques minutes.</p>
                        </div>)}

                    {ctrl === 0 &&  <p className='mr-2 my-3 text-center'>Pour réinitialiser votre mot de passe, veuillez taper l’adresse électronique associé à votre compte </p>}
                    
                    <div className="form-group mb-2 mt-2 d-flex">
                        <label className="w-25">Email</label>
                        <div className="d-flex flex-column w-75">
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Veuiller taper l'email" 
                                value={email} 
                                required
                            />
                            <p className="title7 text-danger d-none mb-0" id="message-email">{message.email}</p>
                        </div>
                    </div>

                    <hr className="mb-1"/>

                    <div className="row no-gutters">
                        <input type="submit" value="Envoyer" className="btn btn-primary btn-block col-11 mx-auto border-rounded"/>
                    </div>

                </form>
            </div>
        </main>
    );
};

export default GetPassword;