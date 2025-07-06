import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../assets/logo_noBG.png'; // ✅ aquí

const links = [
  { title: 'Inicio', url: '#hero' },
  { title: 'Proyecto', url: '#project' },
  { title: 'Inversores', url: '#investment' },
  { title: 'Contacto', url: '#contact' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav>
        <div className='flex'>
            <img src="{logo}" alt="" />

        </div>
    </nav>
  );
};

export default Navbar;
