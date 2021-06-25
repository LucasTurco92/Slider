import { useState } from 'react';
import styles from './slider.module.scss';
import SliderContent from '../slider-content/slider-content';

const Slider = () =>{
    return(
    <div className={styles.Slider}>
        <SliderContent nextSlide/>
    </div>)
}

export default Slider;