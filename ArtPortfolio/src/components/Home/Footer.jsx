import '../../styles/Footer/Footer.css'

const Footer = () => {
  return (
    <div className='footer-container w-screen h-80 flex p-12 px-32 gap-52 justify-around'>
      <div className="regular-plusJakartaSans text-7xl">Get in touch</div>

      {/* list container */}
      <div className='w-fit h-fit flex flex-row gap-24 p-5 mr-24'>

        <div className="w-full h-full flex flex-col gap-2">
          <div className="bold-lora text-xl text-left">
            Social
          </div>
          <hr></hr>
          <div className="regular-plusJakartaSans w-auto h-full list-none flex flex-col items-start justify-start">
            <li>Instagram</li>
            <li>Tiktok</li>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer