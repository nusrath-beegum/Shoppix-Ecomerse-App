
import React from 'react';
import Navbar from './Navbar.tsx';
import Banner from './Banner.jsx'
import Categories from '../features/Category/Categories.tsx';
import Footer from './Footer.tsx';

const Home: React.FC = () => {
  return (
    <div>
<Navbar/>
<Banner />
<Categories/>
<Footer/>
      
    </div>
  );
};

export default Home; 
