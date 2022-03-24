import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectUser } from "../features/userReducer";
import Image_1 from '../images/image_1.jpg';
import Image_2 from '../images/image_2.jpeg';
import Slider from '../components/Slider';
//import BootstrapSlider from '../components/commons/BootstrapSlider';

const Home = () => {
    const user = useSelector(selectUser)

    return (
        <div className='main home'>
            <Slider />

            <h1 className='text-center'></h1>
            <section className='section section-1 alert alert-primary'>
                <h2 className='text-start bg-primary text-white rounded'>LES ACB 92</h2>
                <p className='fs-6'>Dans ce site, nous tentons de reconstituer la <NavLink to= {user? '/liste-des-eleves': '/acces-denied'}> liste des toutes les personnes qui ont étudié au Collège Boboto</NavLink> dans l'une ou l'autre des classes et années suivantes : </p>
                <div className="cards">
                    <div className='cards-image-container border'>
                        <img src={Image_2} alt="photo des acb" />
                    </div>
                    <div className="cards-text-container">
                        <div className='cards-text'>
                            <div>
                                <h4>PRIMAIRE</h4>
                                <p>1980-1981 : Première</p>
                                <p>1981-1982 : Deuxième</p>
                                <p>1982-1983 : Troisième</p>
                                <p>1983-1984 : Quatrième</p>
                                <p>1984-1985 : Cinquième</p>
                                <p>1985-1986 : Sixième</p>
                            </div>
                            <div>
                                <h4>SECONDAIRE</h4>
                                <p>1986-1987 : Première</p>
                                <p>1987-1988 : Deuxième</p>
                            </div>
                            <div>
                                <h4>HUMANITES</h4>
                                <p>1988-1989 : Troisième</p>
                                <p>1989-1990 : Quatrième</p>
                                <p>1990-1991 : Cinquième</p>
                                <p>1991-1992 : Sixième</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section section-2 alert alert-success'>
                <h2 className='text-start bg-success text-white rounded'>PROJET ACB92</h2>
                <div className="cards">
                <div className='cards-image-container border'>
                        <img src={Image_1} alt="photo des acb" />
                    </div>
                    <div className="cards-text-container">
                        <p>Ce projet consiste en la création d'une entreprise commerciale basée à Kinshasa, en République démocratique du Congo.</p>
                        <ul>
                            <li>Consultez la Liste des inscrits au projet ACB92. Ces personnes sont celles qui ont manifesté l'intention de participer à ce projet</li>
                            <li>Les actionnaires sont les membres qui ont effectivement souscrits aux parts sociales dans la constitution du capital social de l'entreprise</li>
                            <li>Les statuts</li>
                            <li></li>
                            <li></li>
                        </ul>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;