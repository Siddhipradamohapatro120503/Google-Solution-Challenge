import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommunitySearch = ({ communities, postJoin }) => {
    let user = JSON.parse(localStorage.getItem('user'));

    const [search, setSearch] = useState('');
    const [filteredCommunities, setFilteredCommunities] = useState([]);

    const filterCommunities = () => {
        return communities.filter(community => community.name.toLowerCase().includes(search.toLowerCase()));
    };

    useEffect(() => {
        setFilteredCommunities(filterCommunities);
    }, [search]);


    const handleSearchChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    };

    function handleJoin(id) {
        console.log('Community ID:', id);
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
        <>
            <form className="d-flex mt-3 mb-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearchChange} />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {

                    filteredCommunities.length > 0 ? filteredCommunities.map((community) => (
                        community.members && community.members.includes(user.uid) ?
                            <>
                                <li className="nav-item d-flex mt-3 mb-2 justify-content-between">
                                    <a className="nav-link" href="#">{community.name}</a>
                                    <button className="btn btn-outline-danger">Joined</button>
                                </li>
                                <hr />
                            </>
                            : <>
                                <li className="nav-item d-flex mt-3 mb-2 justify-content-between">
                                    <a className="nav-link" href="#">{community.name}</a>
                                    <button onClick={() => { handleJoin(community.id) }} className="btn btn-outline-danger">Join</button>
                                </li>
                                <hr />
                            </>
                    ))
                        :

                        communities.map((community) => (
                            community.members && community.members.includes(user.uid) ?
                                <>
                                    <li className="nav-item d-flex mt-3 mb-2 justify-content-between">
                                        <a className="nav-link" href="#">{community.name}</a>
                                        <button className="btn btn-outline-danger">Joined</button>
                                    </li>
                                    <hr />
                                </>
                                : <>
                                    <li className="nav-item d-flex mt-3 mb-2 justify-content-between">
                                        <a className="nav-link" href="#">{community.name}</a>
                                        <button className="btn btn-outline-danger">Join</button>
                                    </li>
                                    <hr />
                                </>
                        ))
                }
            </ul>
        </>
    );
};

export default CommunitySearch;
