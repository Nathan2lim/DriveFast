import React from 'react';

const Car = ({ brand, model, year }) => {
    return (
        <div>
            <h2>{brand} {model}</h2>
            <p>Year: {year}</p>
        </div>
    );
};

export default Car;
