import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';

import './Header.css';

const menuItems = [
    {
        key: 'travel',
        title: 'VIAJES',
    },
    {
        key: 'retail',
        title: 'INMOBILIARIA',
    },
    {
        key: 'investment',
        title: 'INVERSIÓN',
    },
    {
        key: 'aboutUs',
        title: 'SOBRE NOSOTROS',
    },
];

export const Header = () => {
    const [headerClassname, setHeaderClassname] = useState('Header');

    const handleOnManageHeaderBackground = () => {
        const scrollY = window.scrollY;

        if (scrollY > 50) {
            setHeaderClassname('Header Header-black');
            return;
        }

        setHeaderClassname('Header');
        return;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleOnManageHeaderBackground);
    });

    return (
        <header className={headerClassname}>
            <img />
            <nav className="Navigation">
                {menuItems.map(item => (
                    <li key={item.key}>
                        <Link to={`/${item.key}`} className="Navigation-link">
                            {item.title}
                        </Link>
                    </li>
                ))}
            </nav>
            <SearchBar />
        </header>
    );
};
