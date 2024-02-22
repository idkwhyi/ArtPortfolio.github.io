import '../styles/Home/Home.css'
import '../components/Modal_Image/Image'
import Header from '../components/Home/Header'
import ArtShowcase from '../components/Home/ArtShowcase'
import Footer from '../components/Home/Footer'

const Home = () => {
  return (
    <>
      <div className="w-full h-fit gap-60 px-5 flex flex-col align-center text-center items-center">
        <Header />
        <ArtShowcase />
        <Footer />
      </div>
    </>
  )
}

export default Home