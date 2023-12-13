import React, { useState } from 'react'
// import drawer component
import Drawer from 'react-modern-drawer'
// import styles
import 'react-modern-drawer/dist/index.css'
import "./App.css";
// import menu icon for drawer
import { SlMenu } from "react-icons/sl";
import { Button } from 'react-bootstrap'

import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import NavBarVert from "./components/NavBarVert.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const closeDrawer = () => {
    console.log('Closing drawer');
    setIsOpen(false);
  };

  return (
    <>
      <main>
        <Button onClick={toggleDrawer} variant="outline-light" style={{margin: "5px"}}><SlMenu style={{margin: "5px", padding: "0"}}/></Button>
        <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='drawer'
                overlayOpacity={0.5}
                size={375}
        >
                <p className="drawer-text">
                  PAIGE
                </p>
                {/* Pass closeDrawer function as a prop to NavBar */}
                <NavBarVert closeDrawer={closeDrawer} />
            </Drawer>
        <Outlet />
      </main>
      <Footer className="footer" />
    </>
  );
}

export default App;
