import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toggleModale, selectEleve } from '../../features/eleveReducer';
import { selectUser } from "../../features/userReducer";

const AddActionnaireForm = ( {countries, setLoadActionnaires} ) => {
    const eleve = useSelector(selectEleve)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const [alert, setAlert] = useState('')
    const [name, setName] = useState('')
    const [firstname, setFirstname] = useState('')
    const [adress, setAdress] = useState('')
    const [complement, setComplement] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [ville, setVille] = useState('')
    const [country, setCountry] = useState('RD Congo')
    const [phone, setPhone] = useState('+243')
    const [dnaiss, setDnaiss] = useState('')
    const [selectedSexe, setSelectedSexe] = useState('Masculin')
    const [nationalite, setNationalite] = useState('')
    const [messageName, setMessageName] = useState('')
    const [messageFirstname, setMessageFirstname] = useState('')
    const [messageAdress, setMessageAdress] = useState('')
    const [messageVille, setMessageVille] = useState('')
    const [messageCountry, setMessageCountry] = useState('')
    const [messagePhone, setMessagePhone] = useState('')
    const [messageDnaiss, setMessageDnaiss] = useState('')
    const [messageNationalite, setMessageNationalite] = useState('')
    const borderRed = { border: "1px solid red" };
    const borderGreen = { border: "1px solid Green" };
    const sexes = ['Féminin','Masculin']

    const arrayCompare = (arrayA, arrayB) => {
        for (let i = 0; i < arrayA.length; i++) {
          if (arrayA[i] !== arrayB[i]) {
            return false;
          }
        }
    };

    const checkName = (name) => {
        if (!name) {
          setMessageName("xx");
          return true;
        } else if (name.length < 2 || name.length > 100) {
          setMessageName("xx");
          return true;
        } else {
          setMessageName("");
          return false;
        }
    };
    
    const checkFirstname = (firstname) => {
        if (firstname.length < 2 || firstname.length > 100) {
          setMessageFirstname("xx");
          return true;
        } else {
          setMessageFirstname("");
          return false;
        }
    };

    const checkAdress = (adress) => {
        if (!adress) {
          setMessageAdress("xx");
          return true;
        } else if (adress.length < 2 || adress.length > 100) {
          setMessageAdress("xx");
          return true;
        } else {
          setMessageAdress("");
          return false;
        }
    };

    const checkVille = (ville) => {
        if (!ville) {
          setMessageVille("xx");
          return true;
        } else if (ville.length < 2 || ville.length > 100) {
          setMessageVille("Veuillez taper un nom de ville valide svp");
          return true;
        } else {
          setMessageVille("");
          return false;
        }
    };
    const checkCountry = (country) => {
        if (!country) {
          setMessageCountry("Le nom du pays est obligatoire svp");
          return true;
        } else if (country.length < 2 || country.length > 100) {
          setMessageCountry("Veuillez taper un nom de pays valide svp");
          return true;
        } else {
          setMessageCountry("");
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
        const checkResultArray=[]
        checkResultArray.push(checkName(name))
        checkResultArray.push(checkFirstname(firstname))
        checkResultArray.push(checkAdress(adress))
        checkResultArray.push(checkVille(ville))
        checkResultArray.push(checkCountry(country))
        checkResultArray.push(checkNationalite(nationalite))
        checkResultArray.push(checkDnaiss(dnaiss))
        //console.log(checkResultArray);
        //console.log(arrayCompare(checkResultArray, [false, false, false, false, false, false, false]));

        if ( arrayCompare(checkResultArray, [false, false, false, false, false, false, false]) !== false) {
            setAlert('')
            const data = new FormData()
            data.append('function', 'insertActionnaireIntoBdd')
            data.append('name', htmlEntities(name).trim().toUpperCase()) 
            data.append('firstname', htmlEntities(firstname).trim())  
            data.append('adress', htmlEntities(adress).trim())  
            data.append('complement', htmlEntities(complement).trim())  
            data.append('ville', htmlEntities(ville).trim())  
            data.append('country', htmlEntities(country).trim())  
            data.append('phone', htmlEntities(phone).trim())  
            data.append('nationalite', htmlEntities(nationalite).trim())  
            data.append('dnaiss', htmlEntities(dnaiss))  
            data.append('sexe', htmlEntities(selectedSexe.substring(1,1)))  
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
                            setComplement('')
                            setVille('')
                            setCountry('RD Congo')
                            setPhone('+243')
                            setDnaiss('')
                            setNationalite('')
                            setSelectedSexe('Masculin')
                            setTimeout(() => {
                                setAlert('')
                            }, 2000);
                            setLoadActionnaires(true)
                            dispatch(toggleModale())
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
                    <div className="modal-header p-2">
                        <h5 className="modal-title text-primary">Ajout d'un actionnaire</h5>
                        <button type="button" className="close" onClick={()=> dispatch(toggleModale())}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                        {alert && <p className='alert alert-danger mx-3 mb-1 p-1'>{alert}</p> }
                    <div className="modal-body py-0">
                        <form className="row no-gutters py-1 mb-0 scroller" onSubmit={e => handleSubmit(e)}>
                            <div className='border mb-1 pb-1'>
                                <label className='titre7' htmlFor='name'>Identité</label>
                                <input 
                                    type="text" 
                                    id='name'
                                    placeholder="Noms (+ postnoms)"  
                                    className="form-control w-100 text-primary p-1 mb-1"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    style = {messageName? borderRed : borderGreen}
                                />
                                {/* {messageName && <p className="inputMessage">messageName</p> } */}
                                <input 
                                    type="text" 
                                    Placeholder="Prénom" 
                                    className="form-control w-100 text-primary p-1"
                                    value={firstname}
                                    onChange={e => setFirstname(e.target.value)}
                                    style = {messageFirstname? borderRed : borderGreen}
                                />
                                {/* {messageFirstname && <p className="inputMessage">{messageFirstname}</p> } */}
                            </div>

                            <div className="border mb-1 col-12 " id="form-group2">
                                <label htmlFor="adress">Adresse</label>
                                <input 
                                    type="text" 
                                    id='adress'
                                    placeholder='Numéro et Rue'  
                                    className="form-control w-100 text-primary p-1  mb-1"
                                    value={adress}
                                    onChange={e => setAdress(e.target.value)}
                                    style = {messageAdress? borderRed : borderGreen}
                                />
                                {/* {messageAdress && <p className="inputMessage">{messageAdress}</p> } */}
                                <input 
                                    type="text" 
                                    id='complement'
                                    placeholder='Quartier, Commune'  
                                    className="form-control w-100 text-primary p-1  mb-1"
                                    value={complement}
                                    onChange={e => setComplement(e.target.value)}
                                />
                                <div className="d-flex">
                                    <input 
                                        type="text" 
                                        placeholder="Code Postal" 
                                        className="form-control w-25 text-primary p-1 me-1 mb-1" 
                                        value={zipCode}
                                        onChange={e => setZipCode(e.target.value)}
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Ville" 
                                        className="form-control w-75 text-primary p-1 mb-1" 
                                        value={ville}
                                        onChange={e => setVille(e.target.value)}
                                        style = {messageVille? borderRed : borderGreen}
                                    />

                                </div>
                                {/* {messageVille && <p className="inputMessage">{messageVille}</p> } */}
                                <div className="d-flex">
                                    <label htmlFor="country" className='me-2'>Pays:</label>
                                    <input 
                                        id='country'
                                        type="text" 
                                        placeholder="" 
                                        className="form-control text-primary p-1  mb-1" 
                                        value={country}
                                        onChange={e => setCountry(e.target.value)}
                                        style = {messageCountry? borderRed : borderGreen}
                                    />
                                </div>
                                {/* <select 
                                    id="pays1" 
                                    className="rounded d-none" 
                                    onChange={(e)=>setSelectedCountry(e.target.value)}>
                                    <option value='RD Congo' >RD Congo </option>)
                                    {countries.sort(function(a,b) {return a.translations.fra.common - b.translations.fra.common})
                                        .map((country) => (<option key={country.translations.fra.common} >{country.translations.fra.common} </option>))
                                    }                         
                                </select> */}
                            </div>
                            <div className="d-flex justify-content-between flex-column flex-sm-row">
                                <div className="d-flex border mb-1 col-12 col-sm-6" id="form-group1">
                                    <label htmlFor="phone">Tél </label>
                                    <input 
                                        type="tel" 
                                        id='phone'
                                        placeholder='ex +243xxxxxxxxxx' 
                                        className="form-control text-primary p-1" 
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                        style = {messagePhone? borderRed : borderGreen}
                                    />
                                    {/* {messagePhone && <p className="inputMessage">{messagePhone}</p> } */}
                                </div>
                                <ul className='d-flex border col-12 col-sm-6'>
                                    Sexe :
                                    {sexes.map((sexe) => (
                                        <li>
                                            <input 
                                                type="radio" 
                                                id={sexe}
                                                name='sexe'
                                                selected='selected'
                                                className="" 
                                                value={sexe}
                                                onChange={e => setSelectedSexe(e.target.value)}
                                            />
                                            <label htmlFor={sexe}>{sexe}</label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="border mb-1" id="form-group1">
                                    <label htmlFor="nationalite">Nationalité </label>
                                    <input 
                                        type="text" 
                                        id='nationalite' 
                                        className="form-control w-100 text-primary p-1"
                                        value={nationalite}
                                        onChange={e => setNationalite(e.target.value)}
                                        style = {messageNationalite? borderRed : borderGreen}
                                    />
                                    {/* {messageNationalite && <p className="inputMessage">{messageNationalite}</p> } */}
                                </div>
                                <div className="border mb-1" id="form-group1">
                                    <label htmlFor="dnaiss">Date de naissance </label>
                                    <input 
                                        type="date" 
                                        id='dnaiss'
                                        placeholder='JJ/MM/AAAA' 
                                        className="form-control w-100 text-primary p-1"
                                        value={dnaiss}
                                        onChange={e => setDnaiss(e.target.value)}
                                        style = {messageDnaiss? borderRed : borderGreen}
                                    />
                                    {/* {messageDnaiss && <p className="inputMessage">{messageDnaiss}</p> } */}
                                </div>
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