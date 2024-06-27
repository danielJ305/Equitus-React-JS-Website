import React from 'react';
import Hamburger from 'hamburger-react'

const [isOpen, setOpen] = useState(false)

const navToggle = () => (
  <div>
    <Hamburger toggled={isOpen} toggle={setOpen} />
  </div>
);

export default navToggle;