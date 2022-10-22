import React from 'react';
import Slider from "react-slick";

function MonoCreators() {
  let ImageAdam = require('../media/adam_neely.jpg');
  let ImageStan = require('../media/stan_bicknell.jpg');
  let ImageJoses = require('../media/joses_rio.jpg');
  let ImageSoulMountain = require('../media/soul_mountain.jpg');
  let ImagePaulTurner = require('../media/paul_turner.jpg');
  let ImageFlea = require('../media/flea.jpg');
  let ImageAsato = require('../media/mateus_asato.jpg');
  let ImageClark = require('../media/clark_kent.jpg');

  let settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2
  };

  let artistData = [
    {name: 'Adam Neely', img: ImageAdam},
    {name: 'Paul Turner', img: ImagePaulTurner},
    {name: 'Flea', img: ImageFlea},
    {name: 'Clark Kent', img: ImageClark},
    {name: 'Stan Bicknell', img: ImageStan},
    {name: 'Jose Rios', img: ImageJoses},
    {name: 'Matues Asato', img: ImageAsato},
    {name: 'Soul Mountain', img: ImageSoulMountain},
  ]

  function renderCard(name, imageSrc) {
    return (
      <div key={name} className='lg:basis-1/3 md:basis-1/2 item_card md:px-4 text-center font-bold text-xl md:text-2xl'>
        <img fetchpriority="low" width='300' height='300' loading='lazy' className='w-full' alt={name} src={imageSrc}/>
        {name}
      </div>
    )
  }

  return (
    <div className='mono_creators bg-black text-white'>
      
        <div className='section_title'>
          <div className='container flex flex-wrap gap-4 px-4 md:px-8 justify-center items-center md:max-w-screen-xl max-w-screen-md mx-auto'>
            <span className='flex-initial uppercase text-3xl md:text-5xl font-bold'>#monocreators</span>
            <span className='flex-initial uppercase text-3xl md:text-5xl font-bold'>#goplay</span>
          </div>
        </div>

        <div className="creators">
          <div className='container px-4 md:px-8 mx-auto md:max-w-screen-xl max-w-screen-md'>
            <div className='hidden md:flex flex-wrap justify-center'>

              {artistData.map((artist) => (
                renderCard(artist.name, artist.img)
              ))}

            </div>

          </div>

          {/* mobile view */}
          <div className='block_slides md:container pl-4 max-w-none md:hidden'>
            <Slider {...settings}>
              {artistData.map((a) => (
                <div key={a.name} className='card_wrapper pr-4'>
                  {renderCard(a.name, a.img)}
                </div>
              ))}
            </Slider>
          </div>

        </div>
    </div>
  );
  
}

export default MonoCreators;
