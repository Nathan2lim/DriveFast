import React, { useState, useEffect, useRef } from 'react';
import Player from './Player';

const Game = ({ time }) => {
    const [scorePlayer1, setScorePlayer1] = useState(0);
    const [scorePlayer2, setScorePlayer2] = useState(0);
    const [timeLeft, setTimeLeft] = useState(600); // Timer de 5 secondes pour test
    const [isGameOver, setIsGameOver] = useState(false);
    const audioRef = useRef(null); // Référence pour l'élément audio

    // Timer effect
    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
            return () => clearInterval(timerId);
        } else {
            setIsGameOver(true);
        }
    }, [timeLeft]);

    // Déclenchement du son à la fin du jeu
    useEffect(() => {
        if (isGameOver && audioRef.current) {
            console.log("Audio ref:", audioRef.current);
            audioRef.current.play().catch(error => {
                console.error("Erreur lors de la lecture de l'audio:", error);
            });
        }
    }, [isGameOver]);

    // Key press event listener
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (!isGameOver) {
                if (event.key.toLowerCase() === 'a') {
                    setScorePlayer1((prevScore) => prevScore + 10);
                } else if (event.key.toLowerCase() === 'b') {
                    setScorePlayer2((prevScore) => prevScore + 10);
                }
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [isGameOver]);

    // Fonction pour déterminer qui est en tête
    const getLeaderMessage = () => {
        if (scorePlayer1 > scorePlayer2) {
            return "Joueur 1 est en tête!";
        } else if (scorePlayer2 > scorePlayer1) {
            return "Joueur 2 est en tête!";
        } else {
            return "Les deux joueurs sont à égalité!";
        }
    };

    return (
        <div>
            <h1>Jeu de Score</h1>
            <p>Temps restant : {timeLeft} secondes</p>
            <p>{isGameOver ? "Temps écoulé!" : getLeaderMessage()}</p>
            <Player
                firstname="Joueur 1"
                score={scorePlayer1}
                increaseScore={() => setScorePlayer1(scorePlayer1 + 10)}
                disabled={isGameOver}
            />
            <Player
                firstname="Joueur 2"
                score={scorePlayer2}
                increaseScore={() => setScorePlayer2(scorePlayer2 + 10)}
                disabled={isGameOver}
            />
            {/* Élément audio pour le son de fin */}
            <audio ref={audioRef} src="/assets/fin-du-jeu.mp3" preload="auto" />

        </div>
    );
};

export default Game;
