import '../../styles/Footer/Footer.css'
import arrowTopRight from '../../assets/images/arrowTopRight.png'

const Footer = () => {
  return (
    <div className='z-0 footer-container regular-rocoleta h-80'>

      <div className='email-container hover-email flex flex-row justify-between'>
        <div className="get-in-touch"><a href='https://mail.google.com'>Get in touch</a></div>
        <img src={arrowTopRight} alt='arrow top right' className='w-24 h-24 object-contain' />
      </div>

      <div className='social-container p-5'>
        <div className="w-auto h-fit list-none flex flex-col items-start justify-start">
          <li className='hover-list '><a href='https://www.instagram.com/'>Instagram</a></li>
          <li className='hover-list '><a href='https://www.tiktok.com/'>Tiktok</a></li>
        </div>
      </div>

    </div>
  )
}

export default Footer