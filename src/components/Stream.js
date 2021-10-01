import React from 'react';
import { Card,Button } from 'react-bootstrap';
import Slider from 'react-slick';
import CardItem from './SliderContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css';

const Stream = () =>{
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

    return(
    <div className="cardspadding">
      <div className="cardspadding3">
    <h2>#PAVONOVA</h2>
    <Slider {...settings}>
    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://www.youtube.com/watch?v=828iu44BEjU&feature=youtu.be"  target='_blank'>
    <Card.Img src="/images/stream1.jpg" variant="top"></Card.Img>
    <Card.Title>【A Way Out】Let's get out from this prison! With @Pavolia Reine Ch. hololive-ID 【#PavoNova】</Card.Title>
      </a>
    </Card>
    </div>
      

    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://www.youtube.com/watch?v=5rBX64SuKYo"  target='_blank'>
    <Card.Img src="/images/pavonova2.jpg" variant="top"></Card.Img>
    <Card.Title>【Minecraft】Chilling with us!【PavoNova】</Card.Title>
      </a>
    </Card>
    </div>

    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://t.co/PIVxF9zRUK?amp=1"  target='_blank'>
    <Card.Img src="/images/pavonova3.jpg" variant="top"></Card.Img>
    <Card.Title>【Minecraft】Building holoID Shop - Part 4【PavoNova】</Card.Title>
      </a>
    </Card>
    </div>

    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://www.youtube.com/watch?v=r2oI2xI2o2s"  target='_blank'>
    <Card.Img src="/images/pavonova4.jpg" variant="top"></Card.Img>
    <Card.Title>【Minecraft】Building holoID Shop - Part 3【PavoNova】</Card.Title>
      </a>
    </Card>
    </div>
    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://www.youtube.com/watch?v=b5XNn0ewF00"  target='_blank'>
    <Card.Img src="/images/pavonova5.jpg" variant="top"></Card.Img>
    <Card.Title>【Minecraft】Building holoID Shop - Part 2【PavoNova】</Card.Title>
      </a>
    </Card>
    
    </div>
    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://t.co/v2VpLDLLkP?amp=1"  target='_blank'>
    <Card.Img src="/images/pavonova6.jpg" variant="top"></Card.Img>
    <Card.Title>【【Minecraft】Building holoID Shop【PavoNova】</Card.Title>
      </a>
    </Card>
    
    </div>
    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://www.youtube.com/watch?v=F0Yp7xH5W9Q"  target='_blank'>
    <Card.Img src="/images/pavonova7.jpg" variant="top"></Card.Img>
    <Card.Title>【【Minecraft】How to Cook a Bird!【PavoNova】</Card.Title>
      </a>
    </Card>
    
    </div>
    <div>
    
    </div>
    <div>
   
    </div>
    </Slider>
    </div>

    <div className="cardspadding4">
    <h2>#PEKOMOON</h2>
    <Slider {...settings}>
    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://www.youtube.com/watch?v=OmiHImv6f7s"  target='_blank'>
    <Card.Img src="/images/pekomoon1.jpg" variant="top"></Card.Img>
    <Card.Title>【Keep Talking and Nobody Explodes】Can we work this things out?!【#PekoMoon】</Card.Title>
      </a>
    </Card>
    </div>

    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://t.co/k7ltQiCf8u?amp=1"  target='_blank'>
    <Card.Img src="/images/pekomoon2.jpg" variant="top"></Card.Img>
    <Card.Title>【Minecraft】Let's find elytra!【PekoMoon】</Card.Title>
      </a>
    </Card>
    </div>

    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://www.youtube.com/watch?v=QivLpdnBgUs"  target='_blank'>
    <Card.Img src="/images/pekomoon3.jpg" variant="top"></Card.Img>
    <Card.Title>【Minecraft】Let's build something with Usada Kensetsu【PekoMoon】</Card.Title>
      </a>
    </Card>
    </div>
    </Slider>
      </div>
      <div className="cardspadding5">
    <h2>#SUBAMOON</h2>
    <Slider {...settings}>
    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://t.co/pkYL8bxmn5?amp=1"  target='_blank'>
    <Card.Img src="/images/subamoon2.jpg" variant="top"></Card.Img>
    <Card.Title>【#subamoon】視聴者参加！ムーナとお絵描き伝言ゲームするしゅばああああ！！！/MOONA collabo【ホロライブ】</Card.Title>
      </a>
    </Card>
    </div>

    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://t.co/qbMJg9zZrA?amp=1"  target='_blank'>
    <Card.Img src="/images/subamoon1.jpg" variant="top"></Card.Img>
    <Card.Title>【【It Takes Two】Let's make a good team!【#SubaMoon】</Card.Title>
      </a>
    </Card>
    </div>

    <div>
    </div>
    </Slider>
      </div>
      <div className="cardspadding6">
    <h2>#MOONUTAU</h2>
    <Slider {...settings}>
    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://t.co/STC5Jgbp1N?amp=1s"  target='_blank'>
    <Card.Img src="/images/stream3.jpg" variant="top"></Card.Img>
    <Card.Title>【Sing JP only + Talk】After Party! Let's Sing and Talk a little bit!【#MoonUtau】</Card.Title>
      </a>
    </Card>
    </div>

    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://www.youtube.com/watch?v=z80mWoPiZUc"  target='_blank'>
    <Card.Img src="/images/moonutau2.jpg" variant="top"></Card.Img>
    <Card.Title>【Sing+Talk】After Party! Let's Sing and Talk a little bit!【#MoonUtau】</Card.Title>
      </a>
    </Card>
    </div>

    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://t.co/L3zKBq135P?amp=1"  target='_blank'>
    <Card.Img src="/images/moonutau3.jpg" variant="top"></Card.Img>
    <Card.Title>【Sing+Talk】After Party! Let's Sing and Celebrate 800k subs!【#MoonUtau】</Card.Title>
      </a>
    </Card>
    </div>

    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://www.youtube.com/watch?v=lqHF6M_96tQ"  target='_blank'>
    <Card.Img src="/images/moonutau5.jpg" variant="top"></Card.Img>
    <Card.Title>【#MoonUtau】Anime girl trying to sing a cute song【Archive】</Card.Title>
      </a>
    </Card>
    </div>

    <div>
    
    </div>
    </Slider>
      </div>
      <div className="cardspadding7">
    <h2>#GEEMOON</h2>
    <Slider {...settings}>
    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://t.co/tN9ARb5WLD?amp=1"  target='_blank'>
    <Card.Img src="/images/stream2.jpg" variant="top"></Card.Img>
    <Card.Title>【Bus Simulator 21】I've got my Driver License【#GeeMoon】</Card.Title>
      </a>
    </Card>
    </div>

    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://www.youtube.com/watch?v=mfYVjESra0g"  target='_blank'>
    <Card.Img src="/images/geemoon1.jpg" variant="top"></Card.Img>
    <Card.Title>【Minecraft】Continue auto sorter room, now making an automatic door! and Chilling!【#MoonArchitect】</Card.Title>
      </a>
    </Card>
    </div>

    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://www.youtube.com/watch?v=l2Qrol3IsvQ"  target='_blank'>
    <Card.Img src="/images/geemoon2.jpg" variant="top"></Card.Img>
    <Card.Title>【AC IV : Black Flag】Continue my Assassins Creed IV Black Flag!【#GeeMoon】</Card.Title>
      </a>
    </Card>
    </div>

    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://www.youtube.com/watch?v=YOEKwQcXioU&feature=youtu.be"  target='_blank'>
    <Card.Img src="/images/geemoon3.jpg" variant="top"></Card.Img>
    <Card.Title>【HOLOID GARTIC PHONE】I'll draw a masterpiece.【Moona Hoshinova / hololiveID】</Card.Title>
      </a>
    </Card>
    </div>
    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://www.youtube.com/watch?v=EwPrjeWyw_w&feature=youtu.be"  target='_blank'>
    <Card.Img src="/images/geemoon4.jpg" variant="top"></Card.Img>
    <Card.Title>【Mario Kart 8 DX | #ENxIDKart】holoEN x holoID Tournament! Moona POV!【Moona Hoshinova / hololiveID】</Card.Title>
      </a>
    </Card>

    </div>
    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://www.youtube.com/watch?v=dyYAtgdM6Do"  target='_blank'>
    <Card.Img src="/images/geemoon5.jpg" variant="top"></Card.Img>
    <Card.Title>【Mario Kart 8 Deluxe】RACING REPS IKZ!!!【Moona Hoshinova / hololiveID】</Card.Title>
      </a>
    </Card>

    </div>
    </Slider>
      </div>
      <div className="cardspadding8">
    <h2>#FREETALK</h2>
    <Slider {...settings}>
    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://www.youtube.com/watch?v=eo7MPz6pPBE"  target='_blank'>
    <Card.Img src="/images/asamoona1.jpg" variant="top"></Card.Img>
    <Card.Title>【PagiMoona!】Asa with moona! let's talk about anything!!【Freetalk】</Card.Title>
      </a>
    </Card>
    </div>

    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://www.youtube.com/watch?v=U2F1kn7TLLo&feature=youtu.be"  target='_blank'>
    <Card.Img src="/images/asamoona2.jpg" variant="top"></Card.Img>
    <Card.Title>【PagiMoona!】Asa with moona! let's talk!!【Freetalk】</Card.Title>
      </a>
    </Card>
    </div>

    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://www.youtube.com/watch?v=X3ckQ9MwAXU"  target='_blank'>
    <Card.Img src="/images/asamoona3.jpg" variant="top"></Card.Img>
    <Card.Title>【PagiMoona!】Selamat Pagi!!!【Freetalk】</Card.Title>
      </a>
    </Card>
    </div>

    <div>
    <Card style={{width:'auto',height:'auto'}}>
    <a href="https://www.youtube.com/watch?v=sp-aDdSqIac"  target='_blank'>
    <Card.Img src="/images/asamoona4.jpg" variant="top"></Card.Img>
    <Card.Title>【Freetalk】Asa with Moona!【#MoonA_Live】</Card.Title>
      </a>
    </Card>
    </div>
    <div>
   
    </div>
    <div>
   
    </div>
    </Slider>
    </div>
    </div>

    );
    
}
export default Stream;