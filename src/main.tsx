
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Contact from './pages/Contact.tsx';
import Thanks from './pages/Thanks.tsx';
import How from './pages/How.tsx';

// eslint-disable-next-line react-refresh/only-export-components
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/how",
        element: <How />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/thanks",
        element: <Thanks />,
      },

    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
