import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div className='font-prosans '>
      <header>
        <Navbar />
      </header>

      <main className='s'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
