import { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameWorld from './components/GameWorld';
import './App.css';

export default function App() {
  const [started, setStarted] = useState(false);
  return started ? <GameWorld /> : <StartScreen onStart={() => setStarted(true)} />;
}
