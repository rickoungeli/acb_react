import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/userReducer";
import { pushLikedActivites } from '../features/activitesReducer';
import CardActivite from '../components/activites/CardActivite';
import { FaUser } from 'react-icons/fa';

const Activites = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const [reveleModale, setReveleModale] = useState(false)
    const [loadActivites, setLoadActivites] = useState(true)
    const [activites, setActivites] = useState([])
    const [inputActivite, setInputActivite] = useState('')
    //const [likedActivites, setLikedActivites] = useState([])

    const getLikedActivites = () => {
        //if(loadEleve) {
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200) {
                    //Mise en Store
                    let tableau1 = JSON.parse(this.response)
                    dispatch(pushLikedActivites(tableau1))
                    //setLoadEleves(false)
                } 
                else if (this.readyState == 4 && this.status != 200) {
                    setErrorMessage("Une erreur s'est produite")
                }
            }
            xhr.open("GET", `${process.env.REACT_APP_API_URL}projet2022.dao.php?function=getLikedActivites`, true)
            xhr.send()
        //}
    }

    useEffect(()=> {
        getLikedActivites()
    }, [])

    useEffect(()=> {
        if (loadActivites) { //On récupère les données chaque fois que loadActivites = true
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200) {
                    setActivites(JSON.parse(this.response))
                    setLoadActivites(false)
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
                        <CardActivite 
                            activite={activite} 
                            key={activite.idactivite} 
                            index={activites.indexOf(activite)} 
                            getLikedActivites={getLikedActivites}
                        />
                    ))}

                </ul>
            </div>

        </main>
    );
};

export default Activites;