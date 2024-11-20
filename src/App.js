import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Game from './Components/Game';

function App() {
    return (
        <Router>
            <div>
                {/* Menu de navigation */}
                <nav>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/about">À propos</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/game">Jeu</Link></li>
                    </ul>
                </nav>

                {/* Configuration des routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/game" element={<Game time={2} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
