import './Style/Navbar.css';
import PropTypes from 'prop-types';
import { useState } from "react"
//components
import NavButton from "./NavButton"
import NavList from "./NavList";

const Navbar = ({ handlePageChange }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [textMouseOver, setTextMouseOver] = useState('');
  const [mount, setMount] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    setMount(true);
  }

  const handleListItemClick = (page) => {
    handlePageChange(page);
    handleShowNavbar();
  };

  const handleListHover = (text) => {
    setTextMouseOver(text)
  }

  return (
    <div className='navbar-main-container absolute flex items-center '>
      <NavButton onClick={handleShowNavbar} navStatus={showNavbar} />

      {/* navbar black background */}
      <div className={`navBgContainer absolute -rotate-2 ${showNavbar ? 'openNavbar' : 'closeNavbar'} ${textMouseOver || 'bg-custom-black'}`}>
      </div>
      {/* list of navbar */}

      <div className="navListContainer -rotate-2 absolute left-0 top-0 w-full h-full pt-10 pl-20 flex-end flex-col list-none">

        <NavList className={`${showNavbar ? 'openNavList navListOpenDelay' : (mount ? 'closeNavList navListCloseDelay' : 'defaultListStyle')}`} 
          text="Home"  
          onClick={() => handleListItemClick('home')}
          onMouseEnter={() => handleListHover('homeBg')}
          onMouseLeave={() => handleListHover('bg-custom-black')}
        />

        <NavList className={`${showNavbar ? 'openNavList navListOpenDelay' : (mount ? 'closeNavList navListCloseDelay' : 'defaultListStyle')}`} 
          text="About" 
          onClick={() => handleListItemClick('about')} 
          onMouseEnter={() => handleListHover('aboutBg')} 
          onMouseLeave={() => handleListHover('bg-custom-black')}
        />

      </div>
    </div>
  )
}

Navbar.propTypes = {
  handlePageChange: PropTypes.func.isRequired,
};

export default Navbar