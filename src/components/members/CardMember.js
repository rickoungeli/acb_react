import React from 'react';
import { FaUser } from 'react-icons/fa';
import { BsTelephoneForward } from 'react-icons/bs';
import { FiEye } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';

const CardMember = ({user}) => {
    return (
        <div className='card-member d-flex bg-light rounded m-2 p-2'>
            <div className='d-flex justify-content-center align-items-center px-3 py-4 m-1 border border-secondary'>{user.pictureUrl? <img src={pictureUrl} alt="picture" />:<FaUser/>}</div>
            <div className="card-description px-2 fs-6">
                <div className=''>{user.firstname} {user.name}</div>
                <div>{user.country}</div>
                <div><BsTelephoneForward/> {user.phone}</div>
                <div className='d-flex justify-content-end'>
                    <span className='btn py-0 px-1'><FiEye/></span>
                    <span className='btn py-0 px-1'><GoMail/></span>
                </div>
            </div>
        </div>
    );
};

export default CardMember;