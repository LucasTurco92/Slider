import { useState, useEffect } from 'react';
import styles from './slider-item.module.scss';


const SliderItem = ({color,animate}) => {
    const [animation, setAnimation] = useState('');
    useEffect(()=>{
         console.log('animate: ',animate);
     },[animate]);
    
    return (<div className={`${styles.SliderItem} ${styles[color]}`}>
    </div>)
}
export default SliderItem;