import { Button } from '../Button/Button';

import './Hero.css';

const HeroFooter = () => <p>Footer from Hero</p>;

export const Hero = ({
    title,
    description,
    buttonText,
    onClickButton,
    heroFooter,
    backgroundImage,
    backgroundType,
    textPlacement,
}) => {
    const possibleBackgroundTypes = {
        clear: 'Background-clear',
        dark: 'Background-dark',
    };

    const possibleTextPlacements = {
        leftDown: 'Hero-text-leftDown',
        center: 'Hero-text-center',
    };

    return (
        <section
            className="Hero"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                color: backgroundType,
            }}
        >
            <div
                className={`Hero-container ${possibleBackgroundTypes[backgroundType]} ${possibleTextPlacements[textPlacement]} screen__wrapper`}
            >
                <h1>{title}</h1>
                {description && <h2>{description}</h2>}
                {buttonText && <Button onClick={onClickButton}>{buttonText}</Button>}
                {heroFooter && <HeroFooter />}
            </div>
        </section>
    );
};
