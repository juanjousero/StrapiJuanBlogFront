import { Link } from 'react-router-dom';

export const Image = ({ src, altText, className, to }) => {
    if (to) {
        return (
            <Link to={to}>
                <img src={src} alt={altText} className={`Image ${className}`} />
            </Link>
        );
    }

    return <img src={src} alt={altText} className={`Image ${className}`} />;
};
