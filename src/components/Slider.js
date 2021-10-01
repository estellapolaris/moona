import React from 'react';
import { Card,Button } from 'react-bootstrap';
import Slider from 'react-slick';
import CardItem from './SliderContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css';

const Sliders = () =>{
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    return(
    <div className="cardspadding">
    <Slider {...settings}>
    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://twitter.com/mrfliy/status/1441319074869379079"  target='_blank'>
    <Card.Img src="/images/4.jpg" variant="top"></Card.Img>
      </a>
    </Card>
    </div>
    <div>
    <Card style={{width:'auto'}}>
    <a href="https://twitter.com/pineapplelava/status/1440597304101117965" target='_blank'>
    <Card.Img src="/images/7.jpg" variant="top"></Card.Img>
    </a>
    </Card>
    </div>
    <div>
    <Card style={{width:'auto'}}>
        
        <a href="https://twitter.com/j_cstr/status/1440260149050937349" target='_blank'><Card.Img variant="top" src="/images/3.jpg">
        </Card.Img></a>
    </Card>
    </div>
    <div>
    <Card style={{width:'auto',height:'auto'}}>
     
        <a href="https://twitter.com/aonouta1/status/1440199143050203137" target='_blank'><Card.Img variant="top" src="/images/2.jpg">
        </Card.Img></a>
    </Card>
    </div>
    <div>
    <Card style={{width:'auto'}}>
     
        
        <a href="https://twitter.com/Kyogree9/status/1424283769679204353" target='_blank'>   <Card.Img variant="top" src="/images/9.jpg">
        </Card.Img></a>
    </Card>
    </div>
    </Slider>
    </div>
    );
}
export default Sliders;