import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Card,Button } from 'react-bootstrap';
import Slider from 'react-slick';
function Cards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
  return (
    <div>
    <div className='cards__container2'>
        <h2>ORIGINAL SONG</h2>
        <div className='container'>
        <div style={{margin:'auto'}}>
        <Slider {...settings}>
          <div>
            <CardItem
              src='images/aino.jpg'
              text='【Original Song】愛の小さな歌 || Ai no Chiisana Uta - Moona Hoshinova'
              label='ORIGINAL SONG'
              path='https://www.youtube.com/watch?v=q4N7EhUWOAA'
            />
            </div>
            <div>
            <CardItem
              src='images/kszk.jpg'
              text='【Original MemeSong】KSZK song【Moona Hoshinova】'
              label='ORIGINAL SONG'
              path='https://www.youtube.com/watch?v=N_1xVr7wp6Q&list=PLdcktSYecSKfeQ7p5CrVO4avrmLzSL8mt&index=5'
            />
            </div>
            <div>
            <CardItem
              
            />
            </div>
            
            </Slider>
        
        </div>
      </div>
    </div>
    <div className='cards__container3'>
       <div className='container'>
        <div style={{margin:'auto'}}>
            <h2>COVER SONG</h2>
            <Slider {...settings}>
              <div>
            <CardItem
              src='images/love.jpg'
              text='【COVER】Turing Love | チューリングラブ【Moona ft Pekora | ムーナ／ぺこら】'
              label='COVER SONG'
              path='https://www.youtube.com/watch?v=ZRCzLtCsIQs&t=39s'
            />
            </div>
            <div>
            <CardItem
              src='images/again.jpg'
              text='【COVER】Again / Beverly【Moona Hoshinova】'
              label='COVER SONG'
              path='https://www.youtube.com/watch?v=aOMWaZb0VRo'
            />
            </div>
            <div>
            <CardItem
              src='images/villain.jpg'
              text='【COVER】K/DA - VILLAIN【Moona Hoshinova】'
              label='COVER SONG'
              path='https://www.youtube.com/watch?v=Jr3Z9qtBk7k'
            />
            </div>
            <div>
            <CardItem
              src='images/sycro.jpg'
              text='Synchronicity III: Requiem of the Endless World || Aoi Sora × @Moona Hoshinova hololive-ID'
              label='COVER SONG'
              path='https://www.youtube.com/watch?v=W0_iSvXdM6c'
            />
            </div>
            <div>
            <CardItem
              src='images/firebird.jpg'
              text='【COVER】Turing Love | チューリングラブ【Moona ft Pekora | ムーナ／ぺこら】'
              label='COVER SONG'
              path='https://www.youtube.com/watch?v=GQKR0APNFKs'
            />
            </div>
            <div>
            <CardItem
              src='images/you.jpg'
              text='How You Like That /with @Moona Hoshinova hololive-ID'
              label='COVER SONG'
              path='https://www.youtube.com/watch?v=3Zr8H4B3MYM'
            />
            </div>
            <div>
            <CardItem
              src='images/coca.jpg'
              text='【Cover Sing】Coca Cola【Moona Hoshinova】'
              label='COVER SONG'
              path='https://www.youtube.com/watch?v=4-wpqxD7Az8&list=PLdcktSYecSKfeQ7p5CrVO4avrmLzSL8mt&index=5'
            />
            </div>
            <div>
            <CardItem
              src='images/bring.jpg'
              text=' 【 IOFI x MOONA 】劣等上等 BRING IT ON - COVER【＃ioMoona 】'
              label='COVER SONG'
              path='https://www.youtube.com/watch?v=nTuz_POqV9c'
            />
            </div>
            <div>
            <CardItem
              src='images/kawai.jpg'
              text='【COVER】可愛くなりたい [ Kawaiku Naritai ] - HoneyWorks【Moona ft @Pavolia Reine Ch. hololive-ID 】'
              label='COVER SONG'
              path='https://www.youtube.com/watch?v=Hya6rBRCd6Y&list=PLdcktSYecSKfeQ7p5CrVO4avrmLzSL8mt&index=14'
            />
            </div>
            </Slider>
        </div>
        </div>
    </div>
    <div className='cards__container4'>
    <div className='container'>
        <div style={{margin:'auto'}}> 
          <h2>HOLOID COVER/SONG</h2>
        <Slider {...settings}>
        <div>
          <CardItem
              src='images/sss.jpg'
              text='Shiny Smily Story - hololive Indonesia (Cover)'
              label='HOLO ID COVER'
              path='https://www.youtube.com/watch?v=vpViBoIVrk0&list=PLdcktSYecSKfeQ7p5CrVO4avrmLzSL8mt&index=6'
            />
        </div>
        <div>
            <CardItem
              src='images/idvo.jpg'
              text='id:entity voices - hololive ID [Original Song]'
              label='HOLOID Song'
              path='https://www.youtube.com/watch?v=Wp90CrP-s_8&list=PLdcktSYecSKfeQ7p5CrVO4avrmLzSL8mt&index=10'
            />
        </div>
        <div>
            <CardItem
              src='images/ocha.jpg'
              text='Ochame Kinou - hololive Indonesia (Cover)'
              label='HOLOID COVER SONG'
              path='https://www.youtube.com/watch?v=uf9YfzyLG2Q&list=PLdcktSYecSKfeQ7p5CrVO4avrmLzSL8mt&index=3'
            />
        </div>
        <div>
            <CardItem
              src='images/daerah.jpg'
              text='【Indonesian Folk Music Medley - hololive ID [Cover]】'
              label='HOLOID COVER SONG'
              path='https://www.youtube.com/watch?v=lFQW5S_xH1o&list=PLdcktSYecSKfeQ7p5CrVO4avrmLzSL8mt&index=16'
            />
        </div>
        <div>
            <CardItem
              src='images/jpvo.jpg'
              text='id:entity voices - hololive ID Japanese version 「Original Song]'
              label='HOLOID Song'
              path='https://www.youtube.com/watch?v=lA6YSTkywto&list=PLdcktSYecSKfeQ7p5CrVO4avrmLzSL8mt&index=11'
            />
        </div>
        <div>
            <CardItem
            />
        </div>
        </Slider>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Cards;