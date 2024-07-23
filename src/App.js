// src/App.js
import React from 'react';
import './App.css';
import LetterCard from './LetterCard';

const letters = [
  { name: 'άλφα', letter: 'Α', sound: '/greekAlphabetKids/assets/sounds/a.mp3' },
{ name: 'βήτα', letter: 'Β', sound: '/greekAlphabetKids/assets/sounds/b.mp3' },
{ name: 'γάμμα', letter: 'Γ', sound: '/greekAlphabetKids/assets/sounds/g.mp3' },
{ name: 'δέλτα', letter: 'Δ', sound: '/greekAlphabetKids/assets/sounds/d.mp3' },
{ name: 'έψιλον', letter: 'Ε', sound: '/greekAlphabetKids/assets/sounds/e.mp3' },
{ name: 'ζήτα', letter: 'Ζ', sound: '/greekAlphabetKids/assets/sounds/z.mp3' },
{ name: 'ήτα', letter: 'Η', sound: '/greekAlphabetKids/assets/sounds/h.mp3' },
{ name: 'θήτα', letter: 'Θ', sound: '/greekAlphabetKids/assets/sounds/th.mp3' },
{ name: 'ιώτα', letter: 'Ι', sound: '/greekAlphabetKids/assets/sounds/i.mp3' },
{ name: 'κάππα', letter: 'Κ', sound: '/greekAlphabetKids/assets/sounds/k.mp3' },
{ name: 'λάμδα', letter: 'Λ', sound: '/greekAlphabetKids/assets/sounds/l.mp3' },
{ name: 'μυ', letter: 'Μ', sound: '/greekAlphabetKids/assets/sounds/m.mp3' },
{ name: 'νυ', letter: 'Ν', sound: '/greekAlphabetKids/assets/sounds/n.mp3' },
{ name: 'ξι', letter: 'Ξ', sound: '/greekAlphabetKids/assets/sounds/x.mp3' },
{ name: 'όμικρον', letter: 'Ο', sound: '/greekAlphabetKids/assets/sounds/o.mp3' },
{ name: 'πι', letter: 'Π', sound: '/greekAlphabetKids/assets/sounds/p.mp3' },
{ name: 'ρώ', letter: 'Ρ', sound: '/greekAlphabetKids/assets/sounds/r.mp3' },
{ name: 'σίγμα', letter: 'Σ', sound: '/greekAlphabetKids/assets/sounds/s.mp3' },
{ name: 'ταυ', letter: 'Τ', sound: '/greekAlphabetKids/assets/sounds/t.mp3' },
{ name: 'ύψιλον', letter: 'Υ', sound: '/greekAlphabetKids/assets/sounds/u.mp3' },
{ name: 'φι', letter: 'Φ', sound: '/greekAlphabetKids/assets/sounds/ph.mp3' },
{ name: 'χι', letter: 'Χ', sound: '/greekAlphabetKids/assets/sounds/ch.mp3' },
{ name: 'ψι', letter: 'Ψ', sound: '/greekAlphabetKids/assets/sounds/ps.mp3' },
{ name: 'ωμέγα', letter: 'Ω', sound: '/greekAlphabetKids/assets/sounds/w.mp3' }

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
