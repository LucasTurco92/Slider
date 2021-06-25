import { useState,useEffect, cloneElement } from 'react';
import styles from './slider-content.module.scss';
import SliderItem from '../slider-item/slider-item';

const SliderContent = () =>{
    const [itemIndex, setitemIndex] = useState(0);
    const [animate, setAnimate]= useState(false);
    const [slideItems, setSlideItems] = useState([
        { item: <SliderItem color='red'/>,timer: 1000 },
        { item: <SliderItem color='green'/>,timer: 4000 },
        { item: <SliderItem color='blue'/>,timer: 2500 },
    ]);
    const [lengthItems, setlengthItems] = useState(slideItems.length-1);
    const { item, timer } = slideItems[itemIndex];

    useEffect(()=>{     
        const animate = setInterval(()=>{
            setAnimate(!animate);
            slideItems[itemIndex].item = cloneElement(item, { animate: animate});
            if(itemIndex < lengthItems){
                setitemIndex(itemIndex+1);
            }else{
                setitemIndex(0);
            };

        }, timer);

        return () => clearInterval(animate);
    },[itemIndex])


    return(<div className={styles.SliderContent}>
        {item}
    </div>)
}

export default SliderContent;