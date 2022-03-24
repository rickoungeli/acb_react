import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Eleves = () => {

    const [reveleModale, setReveleModale] = useState(false)
    const [eleves, setEleves] = useState([])

    useEffect(()=> {
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            //console.log(this);
            if (this.readyState == 4 && this.status == 200) {
                setEleves(JSON.parse(this.response))
                //console.log(JSON.parse(this.response))
            } 
            else if (this.readyState == 4 && this.status != 200) {
                console.log('erreur ', this.status);
            }
        }
        xhr.open("GET", `${process.env.REACT_APP_API_URL}eleves.dao.php?function=getAllElevesFromBdd`, true)
        xhr.send()
    }, [])

    return (
        <div className='main'>
            <h2 className='text-center'>LISTE DES ELEVES</h2>

            <form name="select-form"  class="form rounded mb-1 w-100 ms-auto border border-secondary">
                <div class="row no-gutters p-1">
                    <div class="form-group col-6 mb-1 d-flex flex-column mx-auto">
                        <label for="sections">Sections :</label>
                        <select name="sections" id="sections" class="rounded ">
                            <option value="#" selected="selected">Toutes</option>
                            
                            {/* $sections = getAllSectionsFromBdd(); */}
                            {/* foreach($sections as $section) { */}
                                
                                {/* if(isset($_POST['sections']) && $_POST['sections']==$section['id']) {
                                    echo "<option value='".$section['id']."' selected='selected'>".$section['nom']." </option>";
                                } else {
                                    echo "<option value='".$section['id']."' >".$section['nom']." </option>";
                                } */}
                            
                            
                        </select>
                    </div>
                    
                    <div id="form-group-classe" class="form-group col-6 mb-1 d-flex flex-column mx-auto">
                        <label for="sections">Classes :</label>
                        <select name="classes" id="classes" class="rounded">
                            <option value="#" selected="selected" >Toutes</option>
                        </select>
                    </div>
                </div>
                <div id="btn-add-eleve" class="col-12 text-center mb-1">
                    <button class="btn btn-primary" id="btn1">Ajouter un élève</button>
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
                        <tr>
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
        </div>
    );
};

export default Eleves;