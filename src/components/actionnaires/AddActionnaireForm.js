import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toggleModale, selectEleve } from '../../features/eleveReducer';
import { selectUser } from "../../features/userReducer";

const AddActionnaireForm = ( {countries} ) => {
    const eleve = useSelector(selectEleve)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const [alert, setAlert] = useState('')
    const [name, setName] = useState('')
    const [firstname, setFirstname] = useState('')
    const [adress, setAdress] = useState('')
    const [ville, setVille] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('RD Congo')
    const [phone, setPhone] = useState('')
    const [dnaiss, setDnaiss] = useState('')
    const [nationalite, setNationalite] = useState('')
    const [messageName, setMessageName] = useState('')
    const [messageFirstname, setMessageFirstname] = useState('')
    const [messageAdress, setMessageAdress] = useState('')
    const [messageVille, setMessageVille] = useState('')
    const [messagePhone, setMessagePhone] = useState('')
    const [messageDnaiss, setMessageDnaiss] = useState('')
    const [messageNationalite, setMessageNationalite] = useState('')
    const borderRed = { border: "1px solid red" };
    const borderGreen = { border: "1px solid Green" };

    const arrayCompare = (arrayA, arrayB) => {
        for (let i = 0; i < arrayA.length; i++) {
          if (arrayA[i] !== arrayB[i]) {
            return false;
          }
        }
    };

    const checkName = (name) => {
        if (!name) {
          setMessageName("Le nom est obligatoire");
          return true;
        } else if (name.length < 2 || name.length > 100) {
          setMessageName("Veuillez taper un nom valide svp");
          return true;
        } else {
          setMessageName("");
          return false;
        }
    };
    
    const checkFirstname = (firstname) => {
        if (firstname.length < 2 || firstname.length > 100) {
          setMessageFirstname("Veuillez taper un prénom valide svp");
          return true;
        } else {
          setMessageFirstname("");
          return false;
        }
    };

    const checkAdress = (adress) => {
        if (!adress) {
          setMessageAdress("L'adresse est obligatoire svp");
          return true;
        } else if (adress.length < 2 || adress.length > 100) {
          setMessageAdress("Veuillez taper une adresse valide svp");
          return true;
        } else {
          setMessageAdress("");
          return false;
        }
    };

    const checkVille = (ville) => {
        if (!ville) {
          setMessageVille("Le nom de la Ville est obligatoire svp");
          return true;
        } else if (ville.length < 2 || ville.length > 100) {
          setMessageVille("Veuillez taper un nom de ville valide svp");
          return true;
        } else {
          setMessageVille("");
          return false;
        }
    };

    const checkNationalite = (nationalite) => {
        if (!nationalite) {
          setMessageNationalite("Votre nationalité est obligatoire svp");
          return true;
        } else {
          setMessageNationalite("");
          return false;
        }
    };

    const checkDnaiss = (dnaiss) => {
        if (!dnaiss) {
          setMessageDnaiss("Votre date de naissance est obligatoire svp");
          return true;
        } else {
          setMessageDnaiss("");
          return false;
        }
    };

    const htmlEntities = (str) => {
        return String(str)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;");
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        checkName(name)
        checkFirstname(firstname)
        checkAdress(adress)
        checkVille(ville)
        checkNationalite(nationalite)
        checkDnaiss(dnaiss)
        const checkResultArray=[checkName, checkFirstname, checkAdress, checkVille, checkNationalite, checkDnaiss]
        //arrayCompare(checkResultArray, [false, false, false, false, false, false])

        if ( arrayCompare(checkResultArray, [false, false, false, false, false, false]) !== false) {
            setAlert('')
            
            const data = new FormData()
            data.append('function', 'insertActionnaireIntoBdd')
            data.append('name', htmlEntities(name).trim().toUpperCase()) 
            data.append('firstname', htmlEntities(firstname).trim())  
            data.append('adress', htmlEntities(adress).trim())  
            data.append('ville', htmlEntities(ville).trim())  
            data.append('country', htmlEntities(selectedCountry))  
            data.append('phone', htmlEntities(phone).trim())  
            data.append('nationalite', htmlEntities(nationalite).trim())  
            data.append('dnaiss', htmlEntities(dnaiss))  
            data.append('iduser', user.id)  
            
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function(){               
                if (this.readyState == 4 && this.status == 200) {
                    if(this.response==='') {
                        setAlert("Echec : l'opération n'a pas réussi")
                    } else {
                        if(this.response==='Vous avez été enregistré avec succès'){
                            setAlert(this.response)
                            setName('')
                            setFirstname('')
                            setAdress('')
                            SetVille('')
                            setPhone('')
                            setDnaiss('')
                            setNationalite('')

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
            xhr.open("POST", `${process.env.REACT_APP_API_URL}actionnaires.dao.php`, true)
            xhr.send(data)
            
        } else {
            setAlert('Il y a des erreurs')
        }
    }

    return (
        <>
        {eleve &&
        <div className="overlay">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-primary">Ajout d'un actionnaire</h5>
                        <button type="button" className="close" onClick={()=> dispatch(toggleModale())}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                        {alert && <p className='alert alert-danger mx-3'>{alert}</p> }
                    <div className="modal-body">
                        <form className="row no-gutters py-1 mb-0 scroller" onSubmit={e => handleSubmit(e)}>
                            <div className='border'>
                                <label className='titre7' htmlFor='name'>Identité</label>
                                <input 
                                    type="text" 
                                    id='name'
                                    placeholder="Noms (+ postnoms)"  
                                    className="form-control w-100 text-danger mb-1"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    style = {messageName? borderRed : borderGreen}
                                />
                                {messageName && <p className="inputMessage">{messageName}</p> }
                                <input 
                                    type="text" 
                                    Placeholder="Prénom" 
                                    className="form-control w-100 text-danger"
                                    value={firstname}
                                    onChange={e => setFirstname(e.target.value)}
                                    style = {messageFirstname? borderRed : borderGreen}
                                />
                                {messageFirstname && <p className="inputMessage">{messageFirstname}</p> }
                            </div>

                            <div className="border mb-1 col-12 " id="form-group2">
                                <label htmlFor="adress">Adresse</label>
                                <input 
                                    type="text" 
                                    id='adress'
                                    placeholder='Numéro et Rue'  
                                    className="form-control w-100 text-danger  mb-1"
                                    value={adress}
                                    onChange={e => setAdress(e.target.value)}
                                    style = {messageAdress? borderRed : borderGreen}
                                />
                                {messageAdress && <p className="inputMessage">{messageAdress}</p> }
                                <input 
                                    type="text" 
                                    placeholder="Ville" 
                                    className="form-control w-100 text-danger  mb-1" 
                                    value={ville}
                                    onChange={e => setVille(e.target.value)}
                                    style = {messageVille? borderRed : borderGreen}
                                />
                                {messageVille && <p className="inputMessage">{messageVille}</p> }
                                <label htmlFor="pays">Pays :</label>
                                <select 
                                    id="pays" 
                                    className="rounded " 
                                    onChange={(e)=>setSelectedCountry(e.target.value)}>
                                    <option value='RD Congo' >RD Congo </option>)
                                    {countries.sort(function(a,b) {return a.translations.fra.common - b.translations.fra.common})
                                        .map((country) => (<option key={country.translations.fra.common} >{country.translations.fra.common} </option>))
                                    }                         
                                </select>
                            </div>

                            <div className="d-flex border mb-1 col-12 " id="form-group1">
                                <label htmlFor="phone">Téléphone </label>
                                <input 
                                    type="tel" 
                                    id='phone'
                                    placeholder='ex +243xxxxxxxxxx' 
                                    className="form-control w-100 text-danger" 
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    style = {messagePhone? borderRed : borderGreen}
                                />
                                {messagePhone && <p className="inputMessage">{messagePhone}</p> }
                            </div>
                            <div className="d-flex border mb-1 col-12 " id="form-group1">
                                <label htmlFor="nationalite">Nationalité </label>
                                <input 
                                    type="text" 
                                    id='nationalite' 
                                    className="form-control w-100 text-danger"
                                    value={nationalite}
                                    onChange={e => setNationalite(e.target.value)}
                                    style = {messageNationalite? borderRed : borderGreen}
                                />
                                {messageNationalite && <p className="inputMessage">{messageNationalite}</p> }
                            </div>
                            <div className="d-flex border mb-1 col-12 " id="form-group1">
                                <label htmlFor="dnaiss">Date de naissance </label>
                                <input 
                                    type="date" 
                                    id='dnaiss'
                                    placeholder='JJ/MM/AAAA' 
                                    className="form-control w-100 text-danger"
                                    value={dnaiss}
                                    onChange={e => setDnaiss(e.target.value)}
                                    style = {messageDnaiss? borderRed : borderGreen}
                                />
                                {messageDnaiss && <p className="inputMessage">{messageDnaiss}</p> }
                            </div>
                            <div className="col-12 text-center mb-1 " id="form-group3">
                                <button className="btn btn-primary" >Enregistrer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    } </>
    );
};

export default AddActionnaireForm;