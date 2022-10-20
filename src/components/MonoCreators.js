import React from 'react';
import '../index.css';
import Slider from "react-slick";
import ImageAdam from '../media/adam_neely.jpg';
import ImageStan from '../media/stan_bicknell.jpg';
import ImageJoses from '../media/joses_rio.jpg';
import ImageSoulMountain from '../media/soul_mountain.jpg';
import ImagePaulTurner from '../media/paul_turner.jpg';
import ImageFlea from '../media/flea.jpg';
import ImageAsato from '../media/mateus_asato.jpg';
import ImageClark from '../media/clark_kent.jpg';

function MonoCreators() {
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

  function Card(props) {
    return (
      <div className='lg:basis-1/3 md:basis-1/2 item_card md:px-4 text-center font-bold text-xl md:text-2xl'>
        <img className='w-full' alt={props.artist_name} src={props.source}/>
        {props.artist_name}
      </div>
    );
  }

  function renderCard(name, imageSrc) {
    return (
      <Card
        key={name}
        artist_name={name}
        source={imageSrc}>
      </Card>
    )
  }

  return (
    <div className='mono_creators'>
      
        <div className='section_title'>
          <div className='container flex flex-wrap gap-4 justify-center items-center md:max-w-screen-xl max-w-screen-md'>
            <span className='flex-initial uppercase text-3xl md:text-5xl font-bold'>#monocreators</span>
            <span className='flex-initial uppercase text-3xl md:text-5xl font-bold'>#goplay</span>
          </div>
        </div>

        <div className="creators">
          <div className='container mx-auto md:max-w-screen-xl max-w-screen-md'>
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
