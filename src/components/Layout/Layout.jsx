import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

import './Layout.css';

export const Layout = ({ children }) => (
  <section className="Layout">
    <Header />
    {children}
    <Footer />
  </section>
);
