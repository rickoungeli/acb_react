import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toggleModale } from '../features/eleveReducer';
import { selectUser } from "../features/userReducer";
import AddActionnaireForm from '../components/actionnaires/AddActionnaireForm';


const Actionnaires = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const [actionnaires, setActionnaires] = useState([])
    const [countries, setCountries] = useState([])
    const [loadActionnaires, setLoadActionnaires] = useState(true)

    //Fonction pour récupérer la liste des actionnaires
    const getActionnaires = () => {
        if(loadActionnaires) {
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function(){
                console.log(this);
                if (this.readyState == 4 && this.status == 200) {
                    setActionnaires(JSON.parse(this.response))
                    setLoadActionnaires(false)
                } 
                else if (this.readyState == 4 && this.status != 200) {
                    setErrorMessage("Une erreur s'est produite")
                }
            }
            xhr.open("GET", `${process.env.REACT_APP_API_URL}actionnaires.dao.php?function=getActionnaires`, true)
            xhr.send()
        }
    }

    //Récupération de la liste des Actionnaires
    useEffect(() => { getActionnaires() }, [loadActionnaires])

    //Récupération de la liste des pays
    useEffect(() => { 
        axios.get('https://restcountries.com/v3.1/all')
        .then(res => setCountries(res.data))
        .catch(err => console.log(err))
     }, [])

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
                <p className='text-end pt-2'><a href="#" onClick={()=>dispatch(toggleModale())} className=''>Ajouter un actionnaire</a></p>
            </div>
            
            <table className='w-100'>
                <thead>
                    <tr className='text-center bg-info text-light'>
                        <th width="5%">N°</th>
                        <th width="75%">Noms et Prénom</th>
                        <th width="20%">Montant</th>
                    </tr>
                </thead>
                
                <tbody id="listOfActionnaires" className=''>
                    {actionnaires
                    .map((actionnaire, index) => (
                        <tr key={actionnaire.id} className='border-bottom'>
                            <td width='5%' className='text-end'>{index +1}</td>
                            <td width='75%' className=' ps-2'>{actionnaire.name} {actionnaire.firstname}</td>
                            <td width='20%' className='text-center d-none'>{actionnaire.amount}</td>
                        </tr>
                    ))}                    
                </tbody>
            </table>
            {<AddActionnaireForm countries = {countries}/>}
        </div>
    );
};

export default Actionnaires;