import React from 'react';
import Firstname from './Firstname';
import Lastname from './Lastname';

const Fullname = ({ firstname, lastname }) => {
    return (
        <div>
            <Firstname firstname={firstname} /> <Lastname lastname={lastname} />
        </div>
    );
};

export default Fullname;
