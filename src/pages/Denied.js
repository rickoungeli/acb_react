import React from 'react';
import { NavLink } from 'react-router-dom';

const Denied = () => {
    return (
        <div className='main text-center'>
            <h3 className='alert alert-danger w-75 mx-auto mt-5 '>Vous devez vous connecter pour accéder à cette page</h3>
            <NavLink to= '/' className=''> Accueil</NavLink>
        </div>
    );
};

export default Denied;