import { Hero } from './components/Hero/Hero';

import './App.css';

export function App() {
    return (
        <main>
            <Hero
                title="Hero inicial de ejemplo"
                description="Descripción de ejemplo del Hero que quiero hacer muy muy larga para comprobar que el screen__wrapper funciona bien, a ver qué sale"
                backgroundImage="/src/assets/HomeHero.webp"
                backgroundType="clear"
                textPlacement="leftDown"
            />
        </main>
    );
}
