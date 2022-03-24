import React, { useEffect, useState } from 'react';
import { BsHandThumbsUp, BsHandThumbsUpFill} from 'react-icons/bs';
import { ImSpinner5 } from 'react-icons/im';

const CardActivite = ({activite, index}) => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        activite && setIsLoading(false)
    }, [activite])
    
    return (
        <li className='card-container' key={activite.id}>
            {isLoading ? (
                <ImSpinner5 className='rotating'/>
            ) : (
            <div>
                <h5>{activite.auteur} : {activite.secteur} </h5>
                <p>{activite.comment}</p>
                <div>
                    <p className='btn btn-light btn-outline-light btn-lg'><BsHandThumbsUp/></p>
                </div>
            </div>
            )}
        </li>
    );
};

export default CardActivite;