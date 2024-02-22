const Header = () => {
  return (
    <div className="w-full h-fit gap-10 p-5 flex flex-col items-start align-baseline">

      <div className="h1 plusJakartaSans bento-border-transparent bg-coldBlue p-5 regular-lora text-left">
        Your Full Name Here.
      </div>

      <div className='w-full h-fit flex flex-row justify-between gap-5 p-5'>

        <div className="bento-border-transparent bg-blackBrown text-white text-2xl p-5 w-96 h-auto  plusJakartaSans text-left">
          Some mid long range description text about the author of this portfolio website and i really want to extend this text
        </div>

        <div className='bento-border h2 w-full bg-sample p-12 regular-lora flex items-center'>
          this is a sample text
        </div>

      </div>

    </div>
  )
}

export default Header;