import React from 'react';
import Car from './Components/Car.jsx'; // Assurez-vous que le chemin est correct
import Home from './Components/Home.jsx';

function App() { // Nommez le composant principal App pour éviter le conflit
    return (
        <div>
            
            <h1>Welcome</h1>
            
            <Car brand="Toyota" model="Corolla" year={2020} /> 
            <Car brand="Ford" model="Mustang" year={2019} />
            <Home title="My Home" chambre={2} salon={1} cuisine={1} />
        </div>
    );
}

export default App;
