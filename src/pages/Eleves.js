import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModale } from '../features/eleveReducer';
import AddEleveForm from '../components/eleves/AddEleveForm';

const Eleves = () => {
    const dispatch = useDispatch()
    const [eleves, setEleves] = useState([])
    const [sections, setSections] = useState([])
    const [classes, setClasses] = useState([])
    const [selectedSection, setSelectedSection] = useState("")
    const [selectedClasse, setSelectedClasse] = useState("")
    //const [loadEleve, setLoadEleves] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    const getAllElevesFromBdd = () => {
        //if(loadEleve) {
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200) {
                    setEleves(JSON.parse(this.response))
                    //setLoadEleves(false)
                } 
                else if (this.readyState == 4 && this.status != 200) {
                    setErrorMessage("Une erreur s'est produite")
                }
            }
            xhr.open("GET", `${process.env.REACT_APP_API_URL}eleves1.dao.php?function=getAllElevesFromBdd`, true)
            xhr.send()
        //}
    }

    const getAllElevesOfSection = (e) => {
        if (e.target.value=='#') {
            getAllElevesFromBdd()
        } else {
            //Récupération de la liste de tous les élèves d'une section
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200) {
                    setEleves(JSON.parse(this.response))
                    setSelectedSection(e.target.value)
                } 
                else if (this.readyState == 4 && this.status != 200) {
                    setErrorMessage("Une erreur s'est produite")
                }
            }
            xhr.open("GET", `${process.env.REACT_APP_API_URL}eleves1.dao.php?function=getAllElevesOfSection&idsection=${e.target.value}`, true)
            xhr.send()
        }
    }

    const getAllElevesOfClasse = (e) => {
        //Récupération de la liste de tous les élèves d'une classe
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                setEleves(JSON.parse(this.response))
                setSelectedClasse(e.target.value)
            } 
            else if (this.readyState == 4 && this.status != 200) {
                setErrorMessage("Une erreur s'est produite")
            }
        }
        xhr.open("GET", `${process.env.REACT_APP_API_URL}eleves1.dao.php?function=getAllElevesOfClasse&idclasse=${e.target.value}`, true)
        xhr.send()
    }

    const addEleve = (e) => {
        e.preventDefault()
        //Mise en Store
        dispatch(toggleModale())
    }
    
    //Récupération de la liste de tous les élèves
    useEffect(() => { getAllElevesFromBdd() }, [])
    
    //Récupération de la liste des sections
    useEffect(()=> {
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                setSections(JSON.parse(this.response))
            } 
            else if (this.readyState == 4 && this.status != 200) {
                console.log('erreur ', this.status);
            }
        }
        xhr.open("GET", `${process.env.REACT_APP_API_URL}sections.dao.php?function=getAllSectionsFromBdd`, true)
        xhr.send()
    }, [])

    //Récupération de la liste des classes
    useEffect(()=> {
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                setClasses(JSON.parse(this.response))
            } 
            else if (this.readyState == 4 && this.status != 200) {
                console.log('erreur ', this.status);
            }
        }
        xhr.open("GET", `${process.env.REACT_APP_API_URL}classes.dao.php?function=getAllClassesFromBdd`, true)
        xhr.send()
    }, [])

    return (
        <div className='eleves main'>
            <h2 className='text-center'>LISTE DES ELEVES</h2>
            {(errorMessage)? (
                <p className="alert alert-danger text-center">{errorMessage}</p>
            ):(
                <>
                <form 
                    className="form rounded mb-1 w-100 ms-auto border border-secondary"
                    onSubmit={(e) => addEleve(e)}
                >
                    
                    <div className="row no-gutters p-1">
                        <div className="form-group col-6 mb-1 d-flex flex-column mx-auto">
                            <label htmlFor="sections">Sections :</label>
                            <select 
                                name="sections" 
                                id="sections" 
                                className="rounded " 
                                onChange={(e)=>getAllElevesOfSection(e)}>
                                <option value="#"  >Toutes</option>
                                {sections.map((section) => (
                                    <option value={section.id} key={section.id} >{section.nom} </option>
                                ))}                         
                            </select>
                        </div>
                        
                        <div id="form-group-classe" className="form-group col-6 mb-1 d-flex flex-column mx-auto">
                            <label htmlFor="sections">Classes :</label>
                            <select name="classes" id="classes" className="rounded" onChange={(e)=>getAllElevesOfClasse(e)}>
                                <option value="#" >Toutes</option>
                                {classes.map((classe) => (
                                    classe.id_section == selectedSection && <option value={classe.id_classe} key={classe.id_classe} >{classe.nom} </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div id="btn-add-eleve" className="col-12 text-center mb-1">
                        <button className="btn btn-primary">Ajouter un élève</button>
                    </div>
                </form>
                <div className=''>Nombre d'élèves : {eleves.length}</div>
                <table className='table table-bordered table-striped w-100'>
                    <thead>
                        <tr className='text-center bg-info text-light'>
                            <th width="5%">N°</th>
                            <th width="30%">Nom</th>
                            <th width="20%">Prénom</th>
                            <th width="20%">Commune</th>
                        </tr>
                    </thead>
                    
                    <tbody id="listOfEleves">
                        
                    { 
                        eleves
                        .map(eleve => (
                            <tr key={eleve.id}>
                            <td width='5%' className='text-end'>{(eleves.indexOf(eleve))+1}</td>
                            <td width='30%'>{eleve.names}</td>
                            <td width='20%'>{eleve.firstname}</td>
                            <td width='20%'>{eleve.commune}</td>
                            <td className='d-none'>{eleve.id}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                </>
            )}

            {<AddEleveForm 
                selectedSection={selectedSection} 
                selectedClasse={selectedClasse} 
               
            />}
            
        </div>
    );
};

export default Eleves;