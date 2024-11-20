// Player.js
import React from 'react';

const Player = ({ firstname, score, increaseScore, disabled }) => {
    // Fonction pour déterminer le message à afficher en fonction du score
    const getMessage = () => {
        if (score >= 100) {
            return (
                <p style={{ color: 'green' }}>
                    {firstname}, votre score est de {score}, vous avez gagné!
                </p>
            );
        } else {
            return (
                <p style={{ color: 'red' }}>
                    {firstname}, votre score est de {score}.
                </p>
            );
        }
    };

    return (
        <div>
            {getMessage()}
            <button onClick={increaseScore} disabled={disabled}>
                Augmenter le score
            </button>
        </div>
    );
};

export default Player;
