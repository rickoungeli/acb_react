import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "../features/userReducer";
import CardActivite from '../components/activites/CardActivite';
import { FaUser } from 'react-icons/fa';

const Activites = () => {
    const user = useSelector(selectUser)
    const [reveleModale, setReveleModale] = useState(false)
    const [loadActivites, setLoadActivites] = useState(true)
    const [activites, setActivites] = useState([])
    const [inputActivite, setInputActivite] = useState('')

    useEffect(()=> {
        if (loadActivites) { //On récupère les données chaque fois que loadActivites = true
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function(){
                console.log(this);
                if (this.readyState == 4 && this.status == 200) {
                    setActivites(JSON.parse(this.response))
                    setLoadActivites(false)
                    //console.log(JSON.parse(this.response))
                    
                } 
                else if (this.readyState == 4 && this.status != 200) {
                    console.log('erreur ', this.status);
                }
            }
            xhr.open("GET", `${process.env.REACT_APP_API_URL}projet2022.dao.php?function=getAllPropositionsOfActivityFromBdd`, true)
            xhr.send()
        }
    }, [loadActivites])


    return (
        <main className='main activites'>
            <h1 className='text-center'>LES PROPOSITION D'ACTIVITES</h1>
            <div className='user-container'>
                <div className='border border-secondary img-container'>{user.pictureurl?<img src={user.pictureurl} alt="" className='img'/>: <FaUser className='img'/>}</div>
                <input 
                    type="text" 
                    className='form-control'
                    placeholder='Votre proposition'
                    value={inputActivite}
                    onChange={e => setInputActivite(e.target.value)}
                />
                <div><button>img</button></div>
            </div>
            {inputActivite && 
            <form action="">
                <input type="text" value={inputActivite} />

            </form>
            }
            <div className='posts'>
                <ul>
                    {activites.map((activite) => (
                        <CardActivite activite={activite} key={activite.id} index={activites.indexOf(activite)}/>
                    ))}

                </ul>
            </div>

        </main>
    );
};

export default Activites;