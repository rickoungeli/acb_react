import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userReducer";
import axios from 'axios';
import { GrEdit } from 'react-icons/gr';
import { FiUserPlus } from 'react-icons/fi';

const Profil = () => {
    const user = useSelector(selectUser)
    const [picture, setPicture]= useState({
        url: "",
        file: null,
    })

    const [infos, setInfos] = useState({
        firstname: "",
        name: "",
        email: "",
    })

    const [password, setPassword] = useState({
        old: "",
        new: "",
        confirm: "",
    })

    const [message, setMessage] = useState({
        firstname: "",
        name: "",
        email: "",
        oldPwd: "",
        newPwd: "",
        newPwd2: ""
    })

    const [error, setError] =useState({
        infos: false,
        password: false
    })

    const [editUserInfos, setEditUserInfos] = useState(false)
    const [showPasswordForm, setShowPasswordForm] = useState(false)

    const updateUserInfos =(e) => {
        e.preventDefault()
        setEditUserInfos(false)
        /*
        checkInfosInput()
        axios.put(`users/${user.id}/updateUserInfos`, {
            firstname: infos.firstname,
            name: infos.name,
            email: infos.email
        })
        .then(() => {
            toggleDivInfos()
            gettingUser() 
        })
        .catch (err => console.log(err))
        */
    }

    const updateUserPassword = (e) =>{
        e.preventDefault()
        /*
        checkPasswordInput()
        if(!error.password){
            axios.put(`users/${user.id}/updateUserPassword`, { 
                oldPwd: password.old,
                newPwd: password.new 
            })
            .then(() => showPasswordForm())
            .catch (err => console.log(err))
        }
        */
    }
    
    const deleteUser =()=>{
        if(confirm("Etes-vous sûr de vouloir supprimer votre profil ?")){
            axios.delete(`users/${user.id}`)
            .then((res) => {
                console.log(res)
                //$store.dispatch('user', '')
                //$router.push('/')
            })
            .catch(err => console.log(err))
        }
    }

    const updateUserPicture =() => {
        const newPicture = new FormData()
        newPicture.append('image', picture.file, picture.file.name)
        newPicture.append('userId', user.id)
        axios.put(`users/${user.id}/updateUserPicture`, newPicture)
        .then(() => { 
            //gettingUser()
        })
        .catch (err => console.log(err))
    }
    
    function pictureSelected(e) {
        picture.file = e.target.files[0]
    }

    function showFileInput() {
        let fileInput = document.getElementById('file-input')
        fileInput.classList.toggle('d-none')
    }

   /*
    
    const gettingUser =() => {
        let userId = user.id
        console.log(userId);
        axios.get(`/users/${userId}`)
        .then((user) => $store.dispatch('user', user.data))
        .catch (err => console.log(err))
    }

     const checkPasswordInput =()=> {
        if(!password.old) {
            error.password = true
            message.oldPwd = "Le mot de passe ne peut pas être vide"
            document.querySelector('#message-oldpwd').classList.remove('d-none') 
            document.querySelector('#oldpwd').classList.add('border-danger') 
        }
        else if(password.old && (password.old.length<3 || password.old.length>20)) {
            error.password = true
            message.oldPwd = "Le mot de passe doit avoir entre 3 et 20 caractères"
            document.querySelector('#message-oldpwd').classList.remove('d-none') 
            document.querySelector('#oldpwd').classList.add('border-danger') 
        }
        else {
            error.password = false
            document.querySelector('#message-oldpwd').classList.add('d-none') 
            document.querySelector('#oldpwd').classList.remove('border-danger') 
        }

        if(!password.new) {
            error.password = true
            message.newPwd = "Le  nouveau mot de passe ne peut pas être vide"
            document.querySelector('#message-newpwd-1').classList.remove('d-none') 
            document.querySelector('#newpwd-1').classList.add('border-danger') 
        }
        else if(password.new && (password.new.length<3 || password.new.length>20)) {
            error.password = true
            message.newPwd = "Le nouveau mot de passe doit avoir entre 3 et 20 caractères"
            document.querySelector('#message-newpwd-1').classList.remove('d-none') 
            document.querySelector('#newpwd-1').classList.add('border-danger') 
        }
        else {
            error.password = false
            document.querySelector('#message-newpwd-1').classList.add('d-none') 
            document.querySelector('#newpwd-1').classList.remove('border-danger') 
        }

        if(!password.confirm) {
            error.password = true
            message.newPwd2 = "Le  nouveau mot de passe ne peut pas être vide"
            document.querySelector('#message-newpwd-2').classList.remove('d-none') 
            document.querySelector('#newpwd-2').classList.add('border-danger') 
        }
        else if(password.confirm && (password.confirm.length<3 || password.confirm.length>20)) {
            error.password = true
            message.newPwd2 = "Le nouveau mot de passe doit avoir entre 3 et 20 caractères"
            document.querySelector('#message-newpwd-2').classList.remove('d-none') 
            document.querySelector('#newpwd-2').classList.add('border-danger') 
        }
        else {
            if( password.confirm !== password.new) {
                error.password = true
                message.newPwd2 = "Les mots de passe ne correspondent pas"
                document.querySelector('#message-newpwd-2').classList.remove('d-none') 
                document.querySelector('#newpwd-2').classList.add('border-danger') 
            }
            else {
            error.password = false
                document.querySelector('#message-newpwd-2').classList.add('d-none') 
                document.querySelector('#newpwd-2').classList.remove('border-danger') 
            }
        }
    }

    const checkInfosInput =() => {
        if(!infos.firstname) {
            error.infos = true
            message.firstname = "Le prénom ne peut pas être vide"
            document.querySelector('#message-firstname').classList.remove('d-none') 
            document.querySelector('#firstname').classList.add('border-danger') 
        }
        else if(infos.firstname && (infos.firstname.length<2 || infos.firstname.length>30)) {
            error.infos = true
            message.firstname = "Le prénom doit avoir entre 2 et 30 caractères"
            document.querySelector('#message-firstname').classList.remove('d-none') 
            document.querySelector('#firstname').classList.add('border-danger') 
        }
        else {
            error.infos = false
            document.querySelector('#message-firstname').classList.add('d-none') 
            document.querySelector('#firstname').classList.remove('border-danger') 
        }

        if(!infos.name) {
            message.name = "nom ne peut pas être vide"
            document.querySelector('#message-name').classList.remove('d-none') 
            document.querySelector('#name').classList.add('border-danger') 
            error.infos = true
        }
        else if(infos.name && (infos.name.length<2 || infos.name.length>50)) {
            message.name = "Le nom doit avoir entre 2 et 50 caractères"
            document.querySelector('#message-name').classList.remove('d-none') 
            document.querySelector('#name').classList.add('border-danger') 
            error.infos = true
        }
        else {
            error.infos = false
            document.querySelector('#message-name').classList.add('d-none') 
            document.querySelector('#name').classList.remove('border-danger') 
        }

        var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if ( !infos.email) {
            message.email = "L'email ne peut pas être vide"
            error.infos = true
            document.querySelector('#message-email').classList.remove('d-none') 
            document.querySelector('#email').classList.add('border-danger') 
        }
        else if ( infos.email && !regex.test(infos.email) ) {
            message.email = "L'email est incorrect"
            error.infos = true
            document.querySelector('#message-email').classList.remove('d-none') 
            document.querySelector('#email').classList.add('border-danger') 
        }
        else {
            error.infos = false
            document.querySelector('#message-email').classList.add('d-none')
            document.querySelector('#email').classList.remove('border-danger')  
        }
    }
    */
    return (
        <div className='main profil'>
            <h1>MON PROFIL</h1>
            <section className='section section-picture w-100'>
                <small className="title7">Cliquez sur la photo pour modifier</small>
                
                <div className="picture" onClick={showFileInput}>
                    
                    {/*user.picture.url && <p>Votre photo</p>*/}
                    {user.pictureurl ? <img src={user.pictureurl} className="w-100 rounded-circle"/> : <FiUserPlus className='w-75 h-75' mx-auto my-auto/> }
                    
                </div>
                
                <div className="d-flex d-none" id="file-input">
                    <input type="file" onChange={pictureSelected} />
                    <button onClick={updateUserPicture}>Télécharger</button>
                </div>
    
            </section>
            <hr/>
            <section className='section user-infos'>
                <p> Mes informations <GrEdit className="pencil ms-3" onClick={() => setEditUserInfos(true)}/></p>
                
                <div className="container">
                    {!editUserInfos && <div className="text-start w-100" id="infos">
                        <p className="w-100"><span className="w-25"> Prénom : </span><span className="border-bottom w-75">{user.firstname} </span></p> 
                        <p className="w-100"><span className="w-25"> Nom : </span><span className="border-bottom w-75">{user.name} </span></p>
                        <p className="w-100"><span className="w-25"> Email : </span><span className="border-bottom w-75">{user.email} </span></p>
                        <p className="w-100"><span className="w-25"> Téléphone : </span><span className="border-bottom w-75">{user.phone} </span></p>
                        <p className="w-100"><span className="w-25"> Pays de résidence : </span><span className="border-bottom w-75">{user.country} </span></p>
                    </div>}
                    
                    {editUserInfos && <form onSubmit={(e)=>updateUserInfos(e)} className=" text-start mx-auto" id="infos-1">
                        <div className="form-group mb-2 d-flex">
                            <label className="w-25"> Prénom : </label>
                            <div className="d-flex flex-column w-75">
                                <input 
                                    type="text"
                                    value={user.firstname.trim()}
                                    className="form-control p-0 m-0 w-100" 
                                    id="firstname"
                                /> 
                                <p className="title7 text-danger mb-0" id="message-firstname">{message.firstname}</p>
                            </div>
                        </div>
                        <div className="form-group mb-2 d-flex">
                            <label className="w-25"> Nom : </label>
                            <div className="d-flex flex-column w-75">
                                <input 
                                    type="text" 
                                    value={user.name.trim()}
                                    className="form-control p-0 m-0 w-100" 
                                    id="name"
                                />
                                <p className="title7 text-danger mb-0" id="message-name">{message.name}</p>
                            </div>
                        </div>
                        <div className="form-group d-flex  mb-2">
                            <label className="w-25"> Email : </label>
                            <div className="d-flex flex-column w-75">
                                <input 
                                    type="text" 
                                    value={user.email.trim()}
                                    className="form-control p-0 m-0 w-100" 
                                    id="email"
                                />
                                <p className="title7 text-danger mb-0" id="message-email">{message.email}</p>
                            </div>
                        </div>
                        <div className="form-group d-flex  mb-2">
                            <label className="w-25"> Téléphone : </label>
                            <div className="d-flex flex-column w-75">
                                <input 
                                    type="text" 
                                    value={user.phone.trim()}
                                    className="form-control p-0 m-0 w-100" 
                                    id="phone"
                                />
                                <p className="title7 text-danger mb-0" id="message-phone">{message.phone}</p>
                            </div>
                        </div>
                        <div className="form-group d-flex  mb-2">
                            <label className="w-25"> Pays de résidence : </label>
                            <div className="d-flex flex-column w-75">
                                <input 
                                    type="text" 
                                    value={user.email.trim()}
                                    className="form-control p-0 m-0 w-100" 
                                    id="email"
                                />
                                <p className="title7 text-danger mb-0" id="message-email">{message.email}</p>
                            </div>
                        </div>
                        {error.infos && <p className="alert alert-danger" >Il y a des erreurs, veuillez vérifier votre saisie</p>}
                        <input type="submit" value="Valider" className="btn btn-secondary w-25" />
                        <button className="btn btn-danger w-25" onClick={()=>setEditUserInfos(false)}>Annuler</button>
                    </form>}
                </div>
            </section>
            <hr/>
            <section className='section user-password'>
                <a onClick={()=>setShowPasswordForm(!showPasswordForm)} href="#"> Modifier mon mot de passe :  </a>
                {showPasswordForm && <form onSubmit={(e) => updateUserPassword(e)} className="text-start mx-auto" id="password-form">
                    <div className="form-group mb-2 d-flex">
                        <label className="w-25"> Ancien : </label>
                        <div className="d-flex flex-column w-75">
                            <input 
                                type="password" 
                                value={password.old.trim()}
                                className="form-control p-0 m-0 w-100" 
                                id="oldpwd"
                            /> 
                            <p className="title7 text-danger d-none mb-0" id="message-oldpwd">{message.oldPwd}</p>
                        </div>
                    </div>
                    <div className="form-group mb-2 d-flex">
                        <label className="w-25"> Nouveau : </label>
                        <div className="d-flex flex-column w-75">
                            <input 
                                type="password" 
                                value={password.new.trim()}
                                className="form-control p-0 m-0 w-100" id="newpwd-1"
                            />
                            <p className="title7 text-danger d-none mb-0" id="message-newpwd-1">{message.newPwd}</p>
                        </div>
                    </div>
                    <div className="form-group d-flex  mb-2">
                        <label className="w-25"> Confirmer : </label>
                        <div className="d-flex flex-column w-75">
                            <input 
                                type="password" 
                                value={password.confirm.trim()}
                                className="form-control p-0 m-0 w-100" id="newpwd-2"
                            />
                            <p className="title7 text-danger d-none mb-0" id="message-newpwd-2">{message.newPwd2}</p>
                        </div>
                    </div>
                    {error.password && <p className="alert alert-danger" >Il y a des erreurs, veuillez vérifier votre saisie</p>}
                    <button className="btn btn-secondary w-25">Valider</button>
                </form>}
            </section>
            <hr/>
            <div OnClick={()=>deleteUser()} className="btn btn-danger">Supprimer mon profil</div>
        </div>
    );
};

export default Profil;