import React, { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero, About, Contact, Experience, Tech, Works, StarsCanvas } from './component';function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
