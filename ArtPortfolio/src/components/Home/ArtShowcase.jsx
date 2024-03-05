//utils
import PropTypes from 'prop-types';
import '../../styles/ArtShowcase.css'

//components
import Modal from '../Modal_Image/ModalImage'
import LinkButton from '../Button/LinkButton';

const ArtShowcase = ({ toggleNavButton }) => {
  return (
    <div className="z-0 main-container regular-rocoleta w-screen h-fit flex flex-col items-center gap-5 p-5">

      <div className="first-container gap-10 justify-between items-center">
        {/* <div className="regular-lora text-4xl ">Some of my art ________________________________</div> */}
        <div className="someArt-text ">Some of my art </div>
        <div className='regular-plusJakartaSans w-fit h-fit flex flex-row justify-between items-center'>
          <LinkButton text='More Art' link='gallery'/>
        </div>
      </div>

      {/* container for gallery intro */}
      <div className='second-container justify-center items-start p-5'>

        <div className='second-cotainer-first-child gap-16 flex items-center justify-center'>
          <Modal src='https://images.pexels.com/photos/20035207/pexels-photo-20035207/free-photo-of-red-house-by-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample'  toggleStatus={toggleNavButton}/>

          <Modal src='https://images.pexels.com/photos/2303781/pexels-photo-2303781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample' toggleStatus={toggleNavButton}/>

          <Modal src='https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample' toggleStatus={toggleNavButton}/>
        </div>

        <div className='second-cotainer-second-child gap-16 flex items-center'>
          {/* images row 2 */}
          <Modal src='https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample' toggleStatus={toggleNavButton}/>

          <Modal src='https://images.pexels.com/photos/19927917/pexels-photo-19927917/free-photo-of-police-car-near-radio-city-music-hall-in-new-york.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample'  toggleStatus={toggleNavButton}/>

          <Modal src='https://images.pexels.com/photos/16226513/pexels-photo-16226513/free-photo-of-torii-path-fushimi-inari-taisha-kyoto-japan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample'  toggleStatus={toggleNavButton}/>

        </div>

      </div>

    </div>
  )
}

ArtShowcase.propTypes = {
  toggleNavButton: PropTypes.func.isRequired,
}

export default ArtShowcase;