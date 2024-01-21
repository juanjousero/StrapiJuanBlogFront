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

export const Header = () => (
  <header className="Header">
    <img />
    <nav className="Navigation">
      {menuItems.map((item) => (
        <li key={item.key}>
          <Link to={`/${item.key}`}>{item.title}</Link>
        </li>
      ))}
    </nav>
    <SearchBar />
  </header>
);
