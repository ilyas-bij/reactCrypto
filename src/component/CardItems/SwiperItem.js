import React,{useContext} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Item from './Item';
import '../Scss/Carditem.scss'
import 'swiper/swiper.scss';

import {ThemeContext} from '../../context/ThemePr'


const Swiperitem = () => {
    const value = useContext(ThemeContext);
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
       
        {value.Articles.map((i,index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          <Item item={i}/>
        </SwiperSlide>
      ))}
      </Swiper>
    );
}

export default Swiperitem;
