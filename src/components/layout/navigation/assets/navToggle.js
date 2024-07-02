import React, { useState, useRef } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import FullMenu from '../fullmenu/FullMenu.js';
import gsap from 'gsap';
import { Expo } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';

const NavToggle = () => {
  const [isOpen, setOpen] = useState(false);
  const container = useRef();
  const tl = useRef();

  const handleToggle = () => {
    setOpen(prevState => !prevState);
    tl.current.reversed(!tl.current.reversed());
  };

  useGSAP(
    () => {
      const menu = gsap.utils.toArray('.fullMenu');
      tl.current = gsap
        .timeline()
        .to(menu, { duration: 1.5, left: 0, ease:Expo.easeInOut, delay: -1.5 })
        .from(menu, { duration: 0.4, x: -100, delay: 0.1 })
        .reverse();
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <button onClick={handleToggle}><Hamburger isOpen={isOpen}/></button>
      <FullMenu />
    </div>
  );
};

export default NavToggle;