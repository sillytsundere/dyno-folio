import React, { useEffect, useState } from "react";
// import drawer component
import Drawer from "react-modern-drawer";
// import styles
import "react-modern-drawer/dist/index.css";
import "./App.css";
// import menu icon for drawer
import { SlMenu } from "react-icons/sl";
import { Button } from "react-bootstrap";

import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import NavBarVert from "./components/NavBarVert.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const location = useLocation();
  const isResumePage = location.pathname === "/resume";

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeDrawer = () => {
    console.log("Closing drawer");
    setIsOpen(false);
  };

  const [drawerSize, setDrawerSize] = useState(375);

  useEffect(() => {
    const updateDrawerSize = () => {
      const viewportWidth = window.innerWidth;

      if (viewportWidth <= 600) {
        setDrawerSize(250);
      } else if (viewportWidth <= 800) {
        setDrawerSize(305);
      } else {
        setDrawerSize(375);
      }
    };

    // Initial update
    updateDrawerSize();

    // Update on window resize
    window.addEventListener("resize", updateDrawerSize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateDrawerSize);
    };
  }, []);

  if (isResumePage) {
    return (
      <>
      <Outlet />
      </>
    );
  }
  return (
    <>
      <main className="main">
        <Button
          onClick={toggleDrawer}
          variant="outline-light"
          style={{ margin: "5px" }}
        >
          <SlMenu style={{ margin: "5px", padding: "0" }} />
        </Button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="drawer"
          overlayOpacity={0.5}
          size={drawerSize}
        >
          {/* Pass closeDrawer function as a prop to NavBar */}
          <NavBarVert closeDrawer={closeDrawer} />
        </Drawer>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
