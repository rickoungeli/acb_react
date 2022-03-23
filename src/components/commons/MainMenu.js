import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userReducer";
import { FaBars } from 'react-icons/fa' ;
import { FaHome } from 'react-icons/fa';

const MainMenu = () => {
    const user = useSelector(selectUser)
    const toggleMenuAcb = () => {
        document.querySelector('.menu-acb').classList.toggle('d-none')
        document.querySelector('.menu-projet').classList.add('d-none')
    }
    const toggleMenuProjet = () => {
        document.querySelector('.menu-projet').classList.toggle('d-none')
        document.querySelector('.menu-acb').classList.add('d-none')
     }

     const closeAllMenu = () => {
        document.querySelector('.menu-projet').classList.add('d-none')
        document.querySelector('.menu-acb').classList.add('d-none')
     }

    return (
        <ul className="mainMenu d-flex align-items-start">
            <li onClick={closeAllMenu} className=""><NavLink to='/'><FaHome className='d-block d-md-none'/><span className='d-none d-md-block'>Accueil</span></NavLink></li>
            <span className="menu-container" >
                {user && <li onClick={toggleMenuAcb} className='menu-btn'>Les ACB92 </li> }
                        <ul className="menu-acb d-none">
                            <NavLink to='/liste-des-membres'><li className="" onClick={toggleMenuAcb}>Les membres du groupe</li></NavLink>
                            <hr className="" />
                            <NavLink to='/liste-des-eleves'><li className="" onClick={toggleMenuAcb}>Les élèves de la promotion</li></NavLink>
                        </ul>
            </span>
               
            <span className="menu-container" >
            {user && <li onClick={toggleMenuProjet} className="menu-btn">Projet2022</li>}
                    <ul className="menu-projet d-none">
                        <NavLink to='/projet2022'><li onClick={toggleMenuProjet} className="">Liste des inscrits</li></NavLink>
                        <hr className="" />
                        <NavLink to='/activites'><li onClick={toggleMenuProjet} className="">Les proposition d'activités</li></NavLink>
                        <hr className="" />
                        <NavLink to='/actionnaires'><li onClick={toggleMenuProjet} className="">Les Actionnaires</li></NavLink>
                        <hr className="" />
                        <NavLink to='/statuts'><li onClick={toggleMenuProjet} className="">Les Statuts de l'entreprise</li></NavLink>
                    </ul>
                
            
            </span>
            {user && <li onClick={closeAllMenu} className=""><NavLink to='/profil'>Mon profil</NavLink></li>}
        </ul>
    );
};

export default MainMenu;