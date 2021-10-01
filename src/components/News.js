import React from 'react';
import { Card,Button } from 'react-bootstrap';
import Slider from 'react-slick';
import CardItem from './SliderContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css';

const News = () =>{
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
    <div class="cardspadding2">
    <Slider {...settings}>
    <div>
    <Card style={{width:'auto',height:'auto',paddingTop: '10px'}}>
    <a href="https://twitter.com/hololive_Id/status/1443506336558247952"  target='_blank'>
    <Card.Img src="/images/news1.jpg" variant="top">
    </Card.Img>
    <Card.Title>Hello!
    Semua anggota holoID hadir di hololive Production Card Chocolate ver. 2 loh!
    Apakah teman-teman ada yang sudah punya juga? 
    </Card.Title>
    <Card.Text>Informasi lebih lengkap: https://tieup.tokyo/holoprochoco2/</Card.Text>
    <Card.Text>Catatan: Produk ini hanya tersedia di Jepang.</Card.Text>
      </a>
    </Card>
    </div>
   
    
    <div>
    <Card style={{width:'auto',maxWidth:'auto'}}>
    <a href="https://twitter.com/hololive_Id/status/1443506336558247952"  target='_blank'>
    <Card.Img src="/images/news2.jpg" variant="top">
    </Card.Img>
    <Card.Title>Akhirnya hadir yang telah kita tunggu-tunggu?!
Sering merasa haus saat menonton stream? 
Cepat lemas karena terlalu bersemangat menonton? 
Sebentar lagi #holoIDrink akan segera menghiasi hidup dan kulkas kalian dengan pilihan rasa menarik! 
    </Card.Title>
    <Card.Text>#1AprilNih</Card.Text>
      </a>
    </Card>
    </div>
    
    <div>
    
    </div>
    </Slider>
    </div>
   
    );
}
export default News;