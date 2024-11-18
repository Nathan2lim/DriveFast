import React from 'react';

const Home = ({ title, chambre, salon, cuisine }) => {
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                <li>Chambre: {chambre}</li>
                <li>Salon: {salon}</li>
                <li>Cuisine: {cuisine}</li>
            </ul>
        </div>
    );
};

export default Home;
