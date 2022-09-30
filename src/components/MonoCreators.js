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

function Card(props) {
  return (
    <div className='col-lg-4 col-md-6 item_card'>
      <img className='w-full' alt={props.artist_name} src={props.source}/>
      {props.artist_name}
    </div>
  );
}

class MonoCreators extends React.Component {
  renderCard(name, imageSrc) {
    return (
      <Card
        artist_name={name}
        source={imageSrc}>
      </Card>
    )
  }

  render() {
    let settings = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1.1
    };

    return (
      <div className='mono_creators'>
        
          <div className='section_title'>
            <div className='container-fluid'>
              <div className='row justify-content-center'>
                <span className='col-auto'>#monocreators</span>
                <span className='col-auto'>#goplay</span>
              </div>
            </div>
          </div>

          <div className="creators">
            <div className='container-fluid'>
              <div className='d-md-flex d-none row justify-content-center'>

                {this.renderCard('Adam Neely', ImageAdam)}
                {this.renderCard('Paul Turner', ImagePaulTurner)}
                {this.renderCard('Flea', ImageFlea)}
                {this.renderCard('Clark Kent', ImageClark)}
                {this.renderCard('Stan Bicknell', ImageStan)}
                {this.renderCard('Jose Rios', ImageJoses)}
                {this.renderCard('Matues Asato', ImageAsato)}
                {this.renderCard('Soul Mountain', ImageSoulMountain)}

              </div>

            </div>

            {/* mobile view */}
            <div className='block_slides container-fluid d-md-none'>
              <Slider {...settings}>
                <div className='card_wrapper'>
                  {this.renderCard('Adam Neely', ImageAdam)}
                </div>

                <div className='card_wrapper'>
                  {this.renderCard('Paul Turner', ImagePaulTurner)}
                </div>

                <div className='card_wrapper'>
                  {this.renderCard('Flea', ImageFlea)}
                </div>

                <div className='card_wrapper'>
                  {this.renderCard('Clark Kent', ImageClark)}
                </div>

                <div className='card_wrapper'>
                  {this.renderCard('Stan Bicknell', ImageStan)}
                </div>

                <div className='card_wrapper'>
                  {this.renderCard('Jose Rios', ImageJoses)}
                </div>

                <div className='card_wrapper'>
                  {this.renderCard('Matues Asato', ImageAsato)}
                </div>

                <div className='card_wrapper'>
                  {this.renderCard('Soul Mountain', ImageSoulMountain)}
                </div>
              </Slider>
            </div>

          </div>
      </div>
    );
  }
}

export default MonoCreators;
