import React from 'react';
import { Card,Button } from 'react-bootstrap';
import Slider from 'react-slick';
import CardItem from './SliderContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css';

const Schedule = () =>{
    const settings = {
        dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <div class="cardspadding">
    <Slider {...settings}>
    <div>
    <Card style={{width:'auto',height:'auto',paddingTop: '10px'}}>
    <a href="https://twitter.com/moonahoshinova/status/1442823765482618886"  target='_blank'>
    <Card.Img src="/images/schedule1.jpg" variant="top"></Card.Img>
      </a>
    </Card>
    </div>
    <div>
    <Card style={{width:'auto',height:'auto',paddingTop: '10px'}}>
    <a href="https://twitter.com/moonahoshinova/status/1437458548816896008"  target='_blank'>
    <Card.Img src="/images/schedule2.jpg" variant="top"></Card.Img>
      </a>
    </Card>
    </div>
    </Slider>
    </div>
    );
}
export default Schedule;