import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      </div>
      <ul className="app__navbar-links">
        <li className="link-navbar">View</li>
        <li className="link-navbar">Help</li>
        <li className="link-navbar">Flow</li>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="link-navbar">view</li>
              <li className="link-navbar">help</li>
              <li className="link-navbar">flow</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
