//utils
import { useState } from 'react'
import '../styles/Gallery/Gallery.css'
//components
import Navbar from "../components/Navigation/Navbar"
import Modal from "../components/Modal_Image/ModalImage"
import Footer from "../components/Home/Footer"

const About = () => {

  const [navButtonDisplayStatus, setNavButtonDisplayStatus] = useState(true) // true means displayed

  const toggleNavButton = (navButtonDisplayStatus) => {
    setNavButtonDisplayStatus(!navButtonDisplayStatus)
  }

  return (
    <div className='w-screen h-fit flex flex-col'>
      <Navbar displayButton={navButtonDisplayStatus}/>
      <div className="art-container p-5 bg-white text-5xl">
        {/* column 1 */}
        <div className="inner-art-container h-fit p-5 gap-10">
          <Modal src='https://images.pexels.com/photos/20035207/pexels-photo-20035207/free-photo-of-red-house-by-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample' className="" toggleStatus={toggleNavButton}/>
          <Modal src='https://images.pexels.com/photos/2303781/pexels-photo-2303781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample' className="" toggleStatus={toggleNavButton}/>
          <Modal src='https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample' className="" toggleStatus={toggleNavButton}/>

        </div>

        {/* column 2 */}
        <div className="inner-art-container h-fit p-5 gap-10">
          <Modal src='https://images.pexels.com/photos/20035207/pexels-photo-20035207/free-photo-of-red-house-by-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample' className="" toggleStatus={toggleNavButton}/>
          <Modal src='https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample' className="" toggleStatus={toggleNavButton}/>

          <Modal src='https://images.pexels.com/photos/20035207/pexels-photo-20035207/free-photo-of-red-house-by-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample' className="" toggleStatus={toggleNavButton}/>
          <Modal src='https://images.pexels.com/photos/20035207/pexels-photo-20035207/free-photo-of-red-house-by-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample' className="" toggleStatus={toggleNavButton}/>
        </div>

        {/* column 3 */}
        <div className="inner-art-container h-fit p-5 gap-10 ">
          <Modal src='https://images.pexels.com/photos/20035207/pexels-photo-20035207/free-photo-of-red-house-by-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample' className="" toggleStatus={toggleNavButton}/>
          <Modal src='https://images.pexels.com/photos/20035207/pexels-photo-20035207/free-photo-of-red-house-by-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample' className="" toggleStatus={toggleNavButton}/>
          <Modal src='https://images.pexels.com/photos/20035207/pexels-photo-20035207/free-photo-of-red-house-by-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sample' className="" toggleStatus={toggleNavButton}/>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default About