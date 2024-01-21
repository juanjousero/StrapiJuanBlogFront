import { Hero } from './components/Hero/Hero';

import './App.css';

export function App() {
  return (
    <Hero
      title="Hero inicial de ejemplo"
      description="Descripción de ejemplo del Hero"
      backgroundImage="/src/assets/HomeHero.webp"
      backgroundType="clear"
      textPlacement="center"
    />
  );
}
