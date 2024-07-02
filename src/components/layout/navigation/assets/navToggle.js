import React, { useState, useRef} from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import FullMenu from '../fullmenu/fullmenu';
import gsap from 'gsap';
import { Expo } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

const NavToggle = () => {
  const [isOpen, setOpen] = useState(false);
  const containerRef = useRef();
  const tl = useRef();

  useGSAP(() => {
    // add a box and circle animation to our timeline and play on first render
    console.log("creating timeline");
  
    gsap.tl.current = gsap.timeline()
      .to(".fullMenu", {
        duration: 1.5, left: 0, ease: Expo.easeInOut, delay: -1.5
      });
  }, { scope: containerRef }); // <-- scope for selector text (optional)

  const handleToggle = contextSafe(() => {
    tl.current.reversed(!tl.current.reversed())
    // setOpen(prevState => !prevState);
    // if (tl.current.reversed()) {
    //   tl.current.play();
    // } else {
    //   tl.current.reverse();
    // }
  });

  // const onClickBox = contextSafe(() => {
  //   gsap.timeline().to('.fullMenu', { duration: 1.5, left: 0, ease: Expo.easeInOut, delay: -1.5 })
  //   gsap.timeline().to('.fullMenu', { duration: 0.4, x: -100, opacity: 0.5, delay: 0.1 })
  // });

  useGSAP(
    (context, contextSafe) => {

      const onClickBox = contextSafe(() => {
        gsap.to('.fullMenu', { duration: 1.5, left: 0, ease: Expo.easeInOut, delay: -1.5 })
      });

    },



    { scope: container }
); // <-- scope for selector text (optional)


  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     tl.current = gsap.timeline({ paused: true, reversed: true })
  //       .to(".fullMenu", { duration: 1.5, left: 0, ease: Expo.easeInOut, delay: -1.5 })
  //       .from(".fullMenu", { duration: 0.4, x: -100, opacity: 0.5, delay: 0.1 });
  //   }, containerRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <div ref={containerRef}>
      <div className='navbutton' onClick={handleToggle}><Hamburger  toggled={isOpen} toggle={setOpen} /></div>
      <FullMenu />
    </div>
  );
};

export default NavToggle;