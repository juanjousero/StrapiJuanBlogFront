import { Hero } from './components/Hero/Hero';
import { Posts } from './components/Posts/Posts';

import './App.css';

export function App() {
    return (
        <main>
            <Hero
                title="INSPIRACIÓN PARA VIAJAR POR GENTE DE VERDAD"
                description="Viaja inteligente, viaja simple"
                backgroundImage="./assets/HomeHero.webp"
                backgroundType="clear"
                textPlacement="center"
                buttonText="Empieza a planear tu viaje"
                onClickButton={() => console.log('Clicked')}
            />
            <Posts />
        </main>
    );
}
