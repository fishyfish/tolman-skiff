import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {link, navigate} from '@reach/router';

const AllSkiffs = (prop) => {
    const [allSkiffs, setAllSkiffs] = useState([]);
    useEffect(() => {
        axios
        .get('http://localhost:8000/api/skiff')
        .then((response) => {
            console.log(response.data);
            setAllSkiffs(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    return (
        <div>
            <h2>All Skiffs</h2>
            {
                allSkiffs.map((skiff, index) =>(
                    <div>
                        <img src={ skiff.pictureUrl } 
                        alt={ skiff.description }
                        />
                        <h4>{ `${skiff.ownerName }'s  ${ skiff.modelName } Skiff`}</h4>
                        <button onClick={() => navigate(`/skiff/${skiff._id}`)}>
                            View Skiff
                        </button>
                        <button>Titantic</button>
                    </div>
                ))
            }
        </div>
    )
}

export default AllSkiffs;