import React from 'react';
import Car from './Components/Car.jsx'; // Assurez-vous que le chemin est correct

function App() { // Nommez le composant principal App pour éviter le conflit
    return (
        <div>
            <Car brand="Toyota" model="Corolla" year={2020} /> 
            <h1>Welcome</h1>
        </div>
    );
}

export default App;
