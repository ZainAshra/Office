import Carousel from 'react-bootstrap/Carousel';
import sliderimg1 from '../images/sliderimg1.png'


function Slider() {
  return (


    <div className='main'>
    <Carousel variant="dark" controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderimg1}
          alt="First slide"
          
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderimg1}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderimg1}
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slider;