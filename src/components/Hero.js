import imgWooten from '../media/wooten-slide.jpg';

function Hero() {
  return (
    <div className='hero_banner relative'>
      <div className='hero_image'>
        <img width='542' height='290' src={imgWooten} alt='hero_image'/>
      </div>

      <div className='texts text-white flex justify-center items-center bg-black md:bg-gradient-to-l from-black md:bg-opacity-25 relative md:absolute md:inset-0 text-center md:text-left py-8'>
        <div className='container md:max-w-screen-xl max-w-screen-md px-4 md:px-8'>

          <div className='grid grid-cols-3'>
            <div className='wrapper col-span-3 md:col-start-3'>
              <div className='title uppercase text-3xl md:text-5xl'>featured artists</div>
              <div className='body text-base'>Adam Blackstone and Brian Frasier-Moore discuss Super Bowl 2020 and more.</div>
              <button className='text-white uppercase bg-red-600'>read more</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;