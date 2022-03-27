import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toggleModale, selectEleve } from '../../features/eleveReducer';

const AddEleveForm = (props) => {
    const eleve = useSelector(selectEleve)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
        {eleve &&
        <div className="overlay">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-primary">Ajout d'une élève</h5>
                        <button type="button" className="close" onClick={()=> dispatch(toggleModale())}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="row no-gutters py-1 mb-0 scroller" onSubmit={e => handleSubmit(e)}>
                            <div className="form-group col-12 ">
                                <input type="text" className="form-control w-100 text-danger d-none"/>
                            </div>
                            <div className="form-group col-12">
                                <label htmlFor="names">Noms de l'élève :</label>
                                <input type="text" placeholder="Taper un nom ou sélectionner dans la liste"  className="form-control w-100 text-danger"/>
                            </div>
                            
                            <div className="form-group mb-1 col-12 " id="form-group1">
                                <label htmlFor="firstname">Prénom de l'élève</label>
                                <input type="text" className="form-control w-100 text-danger"/>
                            </div>
                            <div className="form-group mb-1 col-12 " id="form-group2">
                                <label htmlFor="commune">Commune où il vivait</label>
                                <input type="text" value={eleve}  className="form-control w-100 text-danger"/>
                            </div>
                            <div className="col-12 text-center mb-1 " id="form-group3">
                                <button className="btn btn-primary" >Enregistrer</button>
                            </div>
                            <div className="form-group col-12 border border-dark " id="autocom-box">
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    } </>
    );
};

export default AddEleveForm;