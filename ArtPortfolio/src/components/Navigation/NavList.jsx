import PropTypes from 'prop-types';
import '../../styles/Navbar/Navbar.css'

//components
// import arrowIcon from '../../assets/images/doubleArrow.png'
// import normalArrow from '../../assets/images/normalArrow.png'

const NavList = ({ className, text, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <div className={`w-fit h-fit text-white hover:text-black ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave} >
      <li className='navListHover listFontSize w-full h-full gap-0 regular-plusJakartaSans'>
        {/* <img className='w-10 h-10 transition-opacity duration-200 ease-in-out' src={normalArrow} alt='arrowIcon' /> */}
        <a
          className=" w-full h-full font-bold hover:text-black"
          onClick={onClick}
          href="#"
        >
          {text}
        </a>
      </li>
    </div>
  )
}

NavList.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
}

export default NavList;