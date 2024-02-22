import Modal from '../Modal_Image/ModalImage'

const ArtShowcase = () => {

  // const handleMoreArt = () => {
  //   return 0
  // }

  return (
    <div className="w-full h-fit flex flex-col gap-16">

      <div className="w-full h-fit p-10 flex flex-row justify-between align-center items-center ">
        {/* <div className="regular-lora text-4xl ">Some of my art ________________________________</div> */}
        <div className="regular-lora text-4xl ">Some of my art </div>
        <a className="pr-20 regular-plusJakartaSans text-xl">More art</a>
      </div>

      {/* container for gallery intro */}
      <div className='w-screen h-fit p-5 flex flex-row justify-center items-start '>

        <div className='w-1/2 h-fit flex flex-col gap-16'>
          <Modal src='https://images.pexels.com/photos/20035207/pexels-photo-20035207/free-photo-of-red-house-by-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample' className="ml-10" />

          <Modal src='https://images.pexels.com/photos/2303781/pexels-photo-2303781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample' className="ml-16" />

          <Modal src='https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample' className="ml-7" />
        </div>

        <div className='w-1/2 h-fit flex flex-col gap-16'>
          {/* images row 2 */}
          <Modal src='https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample' className="ml-9" />

          <Modal src='https://images.pexels.com/photos/19927917/pexels-photo-19927917/free-photo-of-police-car-near-radio-city-music-hall-in-new-york.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample' className="ml-2" />

          <Modal src='https://images.pexels.com/photos/16226513/pexels-photo-16226513/free-photo-of-torii-path-fushimi-inari-taisha-kyoto-japan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample' className="ml-6" />

        </div>

      </div>

    </div>
  )
}

export default ArtShowcase;