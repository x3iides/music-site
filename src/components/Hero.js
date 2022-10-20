import React from 'react';
import '../index.css';

function Hero() {
  return (
    <div className='hero_banner'>
      <div className='hero_image'/>

      <div className='texts text-white flex justify-center items-center bg-black md:bg-gradient-to-l from-black md:bg-opacity-25 relative md:absolute md:inset-0 text-center md:text-left py-8'>
        <div className='container md:max-w-screen-xl max-w-screen-md'>

          <div className='grid grid-cols-3'>
            <div className='wrapper col-span-3 md:col-start-3'>
              <div className='title uppercase text-3xl md:text-5xl'>featured artists</div>
              <div className='body text-base'>Adam Blackstone and Brian Frasier-Moore discuss Super Bowl 2020 and more.</div>
              <button>read more</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;