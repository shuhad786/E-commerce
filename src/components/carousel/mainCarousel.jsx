import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../redux/HomeSlice";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import '../../../node_modules/swiper/swiper-bundle.min.css';
import '../../../node_modules/swiper/modules/scrollbar.min.css'

function mainCarousel() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <Swiper
      modules={[Scrollbar]}
      spaceBetween={10}
      slidesPerView={3}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="mt-4 mb-10 p-4 hover:duration-700 hover:ease-in ease-out transition-all"
    >
      {items.map((item, index) => (
        <SwiperSlide className="w-fit flex p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-xl" key={item.id}>
          <div className="flex flex-col justify-between mr-6">
            <p className="shadow-inner shadow-neutral-200 rounded-lg w-36 p-2 text-sm text-clip">{item.title}</p>
            <p className="shadow-inner shadow-neutral-200 rounded-lg w-fit p-2">${item.price}</p>
          </div>
          <div className="flex justify-center">
            <img className="w-60 h-60 rounded-lg shadow-neutral-200 shadow-inner p-2" src={item.image} alt={index} />
          </div>
          
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default mainCarousel
