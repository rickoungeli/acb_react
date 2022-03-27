import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "../features/userReducer";


const Actionnaires = () => {
    const user = useSelector(selectUser)
    const [messageNames, setMessageNames] = useState('')
    const [messageAmount, setMessageAmount] = useState('')
    const [messageCurrency, setMessageCurrency] = useState('')
    const associes = [
        {id:12, name: 'BASUNGA', firstname: 'Pitchou', amount:20},
        {id:27, name: 'BEYA KAMBA', firstname: 'Tsherry', amount:20},
        {id:18, name: 'BONDONGA LESAMBO', firstname: 'Patrick', amount:20},
        {id:13, name: 'DIASONAMA KONDE', firstname: 'Jean-François', amount:20},
        {id:22, name: 'DJUNGU-SUNGU', firstname: '', amount:20},
        {id:7, name: 'ESOLE YUNA', firstname: '', amount:20},
        {id:3, name: 'GOGA KOBALE NDANGO', firstname: 'Lewis', amount:20},
        {id:16, name: 'KABENGELE KALONJI', firstname: 'Dieudonné', amount:20},
        {id:14, name: 'KALONGA', firstname: 'Patrick', amount:20},
        {id:24, name: 'KIKI NKULU', firstname: 'Fortunat', amount:20},
        {id:19, name: 'LUBANZADIO MENGI', firstname: 'Papy-Philippe', amount:20},
        {id:4, name: 'LUMEDO TONA', firstname: 'Alain', amount:20},
        {id:20, name: 'LUMU BASWE', firstname: 'Emile', amount:20},
        {id:25, name: 'KAVULA', firstname: 'Tanguy', amount:20},
        {id:29, name: 'MUTUBULU MABUS', firstname: 'Claude-Robert', amount:20},
        {id:17, name: 'MALU LENANSWEY', firstname: 'Claude', amount:20},
        {id:21, name: 'MAMBU LEMA SIKOTI', firstname: 'Guy-Richard', amount:20},
        {id:5, name: 'MASOSO', firstname: 'Neptune', amount:20},
        {id:6, name: 'MATSHOKO ETIKE YAKOLA', firstname: 'Pitchou', amount:20},
        {id:11, name: 'MBENZA BADIANGA', firstname: 'Guy', amount:20},
        {id:9, name: 'MPULULU BIYELA LIMBUTE', firstname: 'Hugues', amount:20},
        {id:2, name: 'MUKOKA', firstname: 'Pierre Patrick', amount:20},
        {id:26, name: 'MUSONGELA LUMBILATSHI', firstname: 'Pascal', amount:20},
        {id:1, name: 'NGELI NSABAKA', firstname: 'Rickou', amount:20},
        {id:28, name: 'NITU MANGITUKULU', firstname: 'Freddy', amount:20},
        {id:23, name: 'NSEKA LANDA', firstname: 'Didier', amount:20},
        {id:8, name: 'NZILI MATILI-LIGALU', firstname: 'Papy', amount:20},
        {id:10, name: 'NYAMYL MONGONGU ENDA', firstname: 'Christian', amount:20},
        {id:15, name: 'TUYINAMA MADODA', firstname: 'Olivier', amount:20},
    ]

    return (
        <div className='main'>
            {user.isAdmin===1 && <form name="select-form"  class="d-none form rounded px-1 my-1 w-100 ms-auto border border-secondary">
                <div className='d-flex justify-content-between'>
                    <h6>Saisie d'un actionnaire</h6>
                    <button className='bg-danger px-2 rounded'>x</button>
                </div>
                <div class="row no-gutters">
                    <div class="form-group col-6 d-flex flex-column m-0 p-0">
                        <input type="text" id='names' placeholder='Noms et prénom'/>
                        <p className="inputMessage" id="message-names">{messageNames}</p>
                    </div>
                    
                    <div class="form-group col-2 d-flex flex-column m-0 p-0">
                        <input type="number" id='amount' placeholder='Montant'/>
                        <p className="inputMessage" id="message-amount">{messageAmount}</p>
                    </div>
                    <div class="form-group col-2 d-flex flex-column m-0 p-0">
                        <input type="text" id='currency' placeholder='Devise'/>
                        <p className="inputMessage" id="message-currency">{messageCurrency}</p>
                    </div>
                    <div class="form-group col-2 d-flex flex-column m-0 p-0">
                        <input type="date" id='date' placeholder='Date de paiement'/>
                        <p className="inputMessage" id="message-date">{}</p>
                    </div>
                </div>
                <div id="btn-add-eleve" class="col-12 text-center mb-1">
                    <button class="btn btn-primary" id="btn1">Enregistrer</button>
                </div>
                
            </form> }
            <h1 className='text-center mt-2'>LISTE DES ACTIONNAIRES</h1>
            <div className="bg-danger border border-danger p-2 mb-1 rounded">
                <h3 className='text-center text-white'>Comment devenir actionnaire ?</h3>
                <h2 className='border border-white'>Envoyer 30$ </h2>
                <p className='p-0 mb-0'>- Soit par MPESA au numéro <span className='fw-bold text-white'>081.992.78.79</span></p>
                <p className='p-0 mt-0'>- Soit par Western Union à <span className='fw-bold text-white'>BONDONGA LESAMBO Patrick</span></p>
            </div>
            <table className='w-100'>
                <thead>
                    <tr className='text-center bg-info text-light'>
                        <th width="5%">N°</th>
                        <th width="75%">Noms et Prénom</th>
                        <th width="20%">Montant</th>
                    </tr>
                </thead>
                
                <tbody id="listOfActionnaires">
                    {associes
                    .sort((a, b) => {return a.name - b.name})
                    .map((associe, index) => (
                        <tr key={associe.id} className='border-bottom'>
                            <td width='5%' className='text-end'>{index +1}</td>
                            <td width='75%' className=' ps-2'>{associe.name} {associe.firstname}</td>
                            <td width='20%' className='text-center d-none'>{associe.amount}</td>
                        </tr>
                    ))}                    
                </tbody>
            </table>
        
        </div>
    );
};

export default Actionnaires;