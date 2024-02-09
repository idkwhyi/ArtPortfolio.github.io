import PropTypes from 'prop-types'

//components
import closeIcon from '../../assets/images/closeIcon.png'
import medium from '../../assets/images/medium.png'

const NavButton = ({ onClick, navStatus }) => {
  return (
    <button onClick={onClick} className="fixed z-10 border border-black top-12 right-40 text-black bg-white w-12 h-12 flex items-center justify-center rounded-full">
      <img className="w-3.5 h-3.5 transition-opacity duration-200 ease-in-out" src={navStatus ? closeIcon : medium} alt="Close icon" />
    </button>
  );
};

NavButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  navStatus: PropTypes.func.isRequired,
};

export default NavButton;