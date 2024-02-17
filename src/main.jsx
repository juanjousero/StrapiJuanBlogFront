import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TravelPage } from './pages/Travel/TravelPage.jsx';
import { RetailPage } from './pages/Retail/RetailPage.jsx';
import { InvestmentPage } from './pages/Investment/InvestmentPage.jsx';
import { AboutUsPage } from './pages/AboutUs/AboutUsPage.jsx';
import { App } from './App.jsx';

import './index.css';
import { Layout } from './components/Layout/Layout.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <App />
            </Layout>
        ),
    },
    {
        path: 'travel',
        element: (
            <Layout>
                <TravelPage />
            </Layout>
        ),
    },
    {
        path: 'retail',
        element: (
            <Layout>
                <RetailPage />
            </Layout>
        ),
    },
    {
        path: 'investment',
        element: (
            <Layout>
                <InvestmentPage />
            </Layout>
        ),
    },
    {
        path: 'aboutUs',
        element: (
            <Layout>
                <AboutUsPage />
            </Layout>
        ),
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
