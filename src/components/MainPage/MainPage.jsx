import { Hero } from '../../components/Hero/Hero';
import { Posts } from '../../components/Posts/Posts';

import './MainPage.css';

export const MainPage = ({ category }) => (
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
        <Posts category={category} />
    </main>
);
