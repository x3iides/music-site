import React from 'react';
import '../index.css';
import wooten from '../media/wooten-slide.jpg';

class Hero extends React.Component {
  render () {
    return (
      <div className='hero_banner'>
        <div className='hero_image'>
          <img src={wooten} alt='hero_image'/> 
        </div>
  
        <div className='texts'>
          <div className='container-fluid'>
  
            <div className='row justify-content-end'>
              <div className='wrapper col-lg-5'>
                <div className='title'>featured artists</div>
                <div className='body'>Adam Blackstone and Brian Frasier-Moore discuss Super Bowl 2020 and more.</div>
                <button>read more</button>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;