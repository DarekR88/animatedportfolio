import React, { useState, useRef, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop';
import LandingScreen from './components/LandingScreen/LandingScreen'
import SecondScreen from './components/SecondScreen/SecondScreen';
import ThirdScreen from './components/ThirdScreen/ThirdScreen';


const App = () => {
  
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const getScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", getScroll);

    return () => {
      window.removeEventListener("scroll", getScroll);
    };
  }, []);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? true : false);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    console.log(scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);


  const landingRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const toggleDrawer = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };

  const backdropClickHnadler = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen)
  };

  let backdrop;

  if (isSideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHnadler}/>
  }



  return (
    <div>
      <Toolbar scrollPosition={scrollPosition} show={scrollDir} drawerClickHandler={toggleDrawer} handleScroll={handleScroll} landingRef={landingRef} secondRef={secondRef} thirdRef={thirdRef} />
      <SideDrawer show={isSideDrawerOpen} drawerClickHandler={toggleDrawer} handleScroll={handleScroll} landingRef={landingRef} secondRef={secondRef} thirdRef={thirdRef} />
      {backdrop}
      <LandingScreen landingRef={landingRef}/>
      <SecondScreen secondRef={secondRef} />
      <ThirdScreen thirdRef={thirdRef} /> 
    </div>
  );
}

export default App;