import React from 'react'
import '../../App.css'
import Footer from '../Footer';
//import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button } from 'react-bootstrap';

import Slider from '../Slider';
export default function Fanart(){
    return(
        <>
        <Slider />
        </>
    );
}