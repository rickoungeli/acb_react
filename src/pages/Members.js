import React, { useEffect, useState } from 'react';
import Member from '../components/members/CardMember';
import { CgDanger } from 'react-icons/cg';

const Members = () => {

    const [alert, setAlert] = useState('')
    const [users, setUsers] = useState([])

    useEffect(()=> {
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                if(this.response == 'null' ) {
                    setAlert('Une erreur est survenue')
                } else {
                    setUsers(JSON.parse(this.response))
                }
            } 
            else if (this.readyState == 4 && this.status != 200) {
                console.log('erreur ', this.status);
            }
        }
        xhr.open("GET", `${process.env.REACT_APP_API_URL}user.dao.php?function=getAllUsersFromBdd`, true)
        xhr.send()
    }, [])

    return (
        <div className='main members'>
            <h3 className='text-center pt-2'>LISTE DES ACB92 ACTIFS</h3>
            <p className='bg-info p-2 mx-2 rounded'>Voici la liste des ACB-92 enregistrés dans cette plateforme et dans le groupe whatsapp des ACB92</p>
            {
                alert? <p className="alert alert-danger w-75 mx-auto mt-5"><CgDanger/> {alert}</p> 
                : 
                <div className="card-member-container w-100 ">
                {users
                .sort((a,b) => a.name-b.name)
                .map((user) => (
                    <Member user={user} key={user.id} className=''/>
                ))}
                </div>
            }
            
        </div>
    );
};

export default Members;