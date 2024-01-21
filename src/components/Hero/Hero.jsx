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
      className={`Hero ${possibleBackgroundTypes[backgroundType]} ${possibleTextPlacements[textPlacement]}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        color: backgroundType,
      }}
    >
      <h1>{title}</h1>
      {description && <h2>{description}</h2>}
      {buttonText && <Button onClick={onClickButton}>{buttonText}</Button>}
      {heroFooter && <HeroFooter />}
    </section>
  );
};
