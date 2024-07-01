import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';



const NavToggle = () => {
  const [isOpen, setOpen] = useState(false);

  <Hamburger onToggle={toggled => {
    if (toggled) {
       // open a menu
    } else {
       // close a menu
    }
  }} />

  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setOpen}/>
    </div>
  );
};

export default NavToggle;