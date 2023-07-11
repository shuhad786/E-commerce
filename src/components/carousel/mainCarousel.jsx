import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../redux/HomeSlice";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import '../../../node_modules/swiper/swiper-bundle.min.css';
import '../../../node_modules/swiper/modules/scrollbar.min.css'

function mainCarousel() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items.items);

  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  return (
    <Swiper
      modules={[Scrollbar]}
      spaceBetween={5}
      slidesPerView={3}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="mt-16 mb-10 p-10 hover:duration-700 hover:ease-in ease-out transition-all"
    >
      {items.map((item, index) => (
        <SwiperSlide className="p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-xl" key={item}>
          <p>{item.title}</p>
          <img className="w-60 h-60" src={item.image} alt={index} />
          <p>${item.price}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default mainCarousel
