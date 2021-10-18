import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Singleservice = () => {
    const { slug } = useParams();
    const [one, setOne] = useState([]);
    useEffect(() => {
        fetch('./medical.json')
            .then(res => res.json())
            .then(data => setOne(data));
        console.log(one);
    }, []);
    return (
        <div>
            <h2> This is {slug}</h2>
            <h2> This is {one.length}</h2>
        </div>
    );
};

export default Singleservice;