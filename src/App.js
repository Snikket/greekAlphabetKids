// src/App.js
import React from 'react';
import './App.css';
import LetterCard from './LetterCard';

const letters = [
  { name: 'άλφα', letter: 'Α', sound: '/greekletters/assets/sounds/a.mp3' },
{ name: 'βήτα', letter: 'Β', sound: '/greekletters/assets/sounds/b.mp3' },
{ name: 'γάμμα', letter: 'Γ', sound: '/greekletters/assets/sounds/g.mp3' },
{ name: 'δέλτα', letter: 'Δ', sound: '/greekletters/assets/sounds/d.mp3' },
{ name: 'έψιλον', letter: 'Ε', sound: '/greekletters/assets/sounds/e.mp3' },
{ name: 'ζήτα', letter: 'Ζ', sound: '/greekletters/assets/sounds/z.mp3' },
{ name: 'ήτα', letter: 'Η', sound: '/greekletters/assets/sounds/h.mp3' },
{ name: 'θήτα', letter: 'Θ', sound: '/greekletters/assets/sounds/th.mp3' },
{ name: 'ιώτα', letter: 'Ι', sound: '/greekletters/assets/sounds/i.mp3' },
{ name: 'κάππα', letter: 'Κ', sound: '/greekletters/assets/sounds/k.mp3' },
{ name: 'λάμδα', letter: 'Λ', sound: '/greekletters/assets/sounds/l.mp3' },
{ name: 'μυ', letter: 'Μ', sound: '/greekletters/assets/sounds/m.mp3' },
{ name: 'νυ', letter: 'Ν', sound: '/greekletters/assets/sounds/n.mp3' },
{ name: 'ξι', letter: 'Ξ', sound: '/greekletters/assets/sounds/x.mp3' },
{ name: 'όμικρον', letter: 'Ο', sound: '/greekletters/assets/sounds/o.mp3' },
{ name: 'πι', letter: 'Π', sound: '/greekletters/assets/sounds/p.mp3' },
{ name: 'ρώ', letter: 'Ρ', sound: '/greekletters/assets/sounds/r.mp3' },
{ name: 'σίγμα', letter: 'Σ', sound: '/greekletters/assets/sounds/s.mp3' },
{ name: 'ταυ', letter: 'Τ', sound: '/greekletters/assets/sounds/t.mp3' },
{ name: 'ύψιλον', letter: 'Υ', sound: '/greekletters/assets/sounds/u.mp3' },
{ name: 'φι', letter: 'Φ', sound: '/greekletters/assets/sounds/ph.mp3' },
{ name: 'χι', letter: 'Χ', sound: '/greekletters/assets/sounds/ch.mp3' },
{ name: 'ψι', letter: 'Ψ', sound: '/greekletters/assets/sounds/ps.mp3' },
{ name: 'ωμέγα', letter: 'Ω', sound: '/greekletters/assets/sounds/w.mp3' }

];

const App = () => {
  return (
    <div className="app">
      <h1>Το Αλφάβητο</h1>
      <div className="animal-grid">
        {letters.map((letter, index) => (
          <LetterCard key={index} {...letter} />
        ))}
      </div>
    </div>
  );
};

export default App;
