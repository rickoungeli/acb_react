import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toggleModale, toggleEdit } from '../features/actionnaireReducer';
import { selectUser } from "../features/userReducer";
import AddActionnaireForm from '../components/actionnaires/AddActionnaireForm';
import { GrEdit } from 'react-icons/gr';


const Actionnaires = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const [actionnaires, setActionnaires] = useState([])
    const [countries, setCountries] = useState([])
    const [loadActionnaires, setLoadActionnaires] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    //Récupération de la liste des Actionnaires
    useEffect(() => { 
        if(loadActionnaires) {
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200) {
                    setActionnaires(JSON.parse(this.response))
                    setLoadActionnaires(false)
                    setErrorMessage("")
                } 
                else if (this.readyState == 4 && this.status != 200) {
                    setErrorMessage("Une erreur s'est produite")
                }
            }
            xhr.open("GET", `${process.env.REACT_APP_API_URL}actionnaires.dao.php?function=getActionnaires`, true)
            xhr.send()
        }
    }, [loadActionnaires])

    //Récupération de la liste des pays
    useEffect(() => { 
        axios.get('https://restcountries.com/v3.1/all')
        .then(res => setCountries(res.data))
        .catch(err => console.log(err))
     }, [])

    const handleUpdate = (actionnaire) => {
        dispatch(toggleEdit(true))
        dispatch(toggleModale(actionnaire))
    }
    const handleAdd = () => {
        dispatch(toggleEdit(false))
        dispatch(toggleModale({}))
    }

    return (
        <div className='main'>
            
            <h1 className='text-center mt-2'>LISTE DES ACTIONNAIRES</h1>
            <div className="bg-danger border border-danger p-2 mb-1 rounded">
                <h3 className='text-center text-white'>Comment devenir actionnaire ?</h3>
                <h2 className='border border-white'>Envoyer 30$ </h2>
                <p className='p-0 mb-0'>- Soit par MPESA au numéro <span className='fw-bold text-white'>081.992.78.79</span></p>
                <p className='p-0 mt-0'>- Soit par Western Union à <span className='fw-bold text-white'>BONDONGA LESAMBO Patrick</span></p>
            </div>
            <div className='actionnaireFormContainer'>
                <p className='text-end pt-2'><a href="#" onClick={()=>handleAdd()} className=''>Ajouter un actionnaire</a></p>
            </div>
            
            <table className='table table-striped'>
                <thead>
                    <tr className='text-center bg-info text-light'>
                        <th width="5%">N°</th>
                        <th width='30%'>Noms et Prénom</th>
                        {user.isAdmin==='1' && <th width="25%">Adresse</th>}
                        {user.isAdmin==='1' && <th width="15%">Nationalité</th>}
                        <th width="15%">Téléphone</th>
                        <th></th>
                    </tr>
                </thead>
                
                <tbody id="listOfActionnaires" className=''>
                    {errorMessage? <tr><td colspan='3' className='alert alert-danger text-center mx-3 my-1 p-1'>{errorMessage}</td></tr> :
                    actionnaires
                    .map((actionnaire, index) => (
                        <tr key={actionnaire.id} className='border-bottom'>
                            <td width='5%' className='text-end'>{index +1}</td>
                            <td width='30%' className=' ps-2'>{actionnaire.sexe==="F" && "Mme "}{actionnaire.names} {actionnaire.firstname}</td>
                            {user.isAdmin==='1' && <td width='25%' className=' ps-2'>{actionnaire.adress}, {actionnaire.complement && actionnaire.complement + ','} {actionnaire.ville}, {actionnaire.country}</td>}
                            {user.isAdmin==='1' && <td width='15%' className='text-center '>{actionnaire.nationalite}</td>}
                            <td width='15%' className='text-center '>{actionnaire.phone}</td>
                            {<td><GrEdit className="pencil ms-3" onClick={() => handleUpdate(actionnaire)}/></td>}
                        </tr>
                    ))}                    
                </tbody>
            </table>
            <AddActionnaireForm />
        </div>
    );
};

export default Actionnaires;