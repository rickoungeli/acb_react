import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userReducer";
import { selectLikedActivites } from "../../features/activitesReducer";
import { BsHandThumbsUp, BsHandThumbsUpFill} from 'react-icons/bs';
import { ImSpinner5 } from 'react-icons/im';

const CardActivite = ({activite, key, index, getLikedActivites}) => {
    let idactivite = activite.idactivite;
    const user = useSelector(selectUser)
    const likedActivites = useSelector(selectLikedActivites) 
    const [isLoading, setIsLoading] = useState(true)

    const saveLikeActivite = (code) => {
        //On ajoute un like dans la table likedactivite
        const data = new FormData()
        data.append('idactivite', idactivite)
        data.append('iduser', user.id) 
        data.append('function', code==='like'? 'likeActivite' : 'dislikeActivite') 
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){               
            if (this.readyState == 4 && this.status == 200) {
                if(this.response==='') {
                    console.log("Echec : l'ajout du like n'a pas réussi")
                } else {
                        console.log(this.response)
                        getLikedActivites()
                }
            } 
            else if (this.readyState == 4 && this.status != 200) {
                console.log("Echec");
            }
            
        }
        xhr.open("POST", `${process.env.REACT_APP_API_URL}projet2022.dao.php`, true)
        xhr.send(data)
    }

    useEffect(() => {
        activite && setIsLoading(false)
    }, [activite])
    
    return (
        <li className='card-container' key={key}>
            {isLoading ? (
                <ImSpinner5 className='rotating'/>
            ) : (
            <div>
                <h5>{activite.auteur} </h5>
                <h6>{activite.secteur}</h6>
                <p>{activite.comment}</p>
                <div className='d-flex justify-content-between'>
                    <p className='comment-title'>Commentaire</p>
                    <span className='like'>J'aime 
                        { likedActivites.find((liked) => liked.idactivite===idactivite && liked.iduser===user.id)? 
                            <BsHandThumbsUpFill className='fs-3' onClick={() => saveLikeActivite('dislike')}/> 
                            : <BsHandThumbsUp className='fs-3' onClick={() => saveLikeActivite('like')}/> 
                        }
                    </span>
                </div>
            </div>
            )}
        </li>
    );
};

export default CardActivite;