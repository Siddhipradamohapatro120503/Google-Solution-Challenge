import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../pages/style/community_style.css";
import axios from 'axios';
import firebase from '../config.js';

const CommunityCard = (community, postJoin) => {
    const { name, description, id } = community;
    let user = firebase.auth().currentUser || JSON.parse(localStorage.getItem('user'));

    function handleJoin(e) {
        e.preventDefault();
        axios.post('http://localho.st:' + process.env.REACT_APP_BACKEND_PORT + '/add-member-to-community', {
            communityId: id,
            memberId: user?.uid,
        })
            .then((response) => {
                console.log('Member added to community:', response.data);
                postJoin();
            })
            .catch((error) => {
                console.error('Error adding member to community:', error);
            });

    }

    return (
        <div className="g-col-6 ch">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    {
                        community.members && community.members.includes(user.uid) ?
                            <button className="btn btn-outline-danger">Joined</button> :
                            <button onClick={handleJoin} className="btn btn-outline-danger">Join</button>
                    }
                    {/* <button onClick={handleJoin} className="btn btn-outline-danger">Join</button> */}
                </div>
            </div>
        </div>
    );
}

export default CommunityCard;