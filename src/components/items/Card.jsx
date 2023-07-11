import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { fetchItems, fetchItemsByJewelery, fetchItemsByMenClothing, fetchItemsByElectronics, fetchItemsByWomenClothing  } from "../../redux/HomeSlice"; 
import Items from "./Items";

const Card = () => {
  const dispatch = useDispatch();

	const items = useSelector((state) => state.items.items);
  
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleByAll = () => {
    dispatch(fetchItems());
  }

  const handleByJewelery = () => {
    dispatch(fetchItemsByJewelery());
  };

  const handleByMenClothing = () => {
    dispatch(fetchItemsByMenClothing());
  };

  const handleByWomenClothing = () => {
    dispatch(fetchItemsByWomenClothing());
  };

  const handleByElectronics = () => {
    dispatch(fetchItemsByElectronics());
  };

  return (
    <div className="overscroll-y-none">
      <div className="flex w-full justify-between">
        <div className="flex w-3/5 justify-evenly">
          <button onClick={handleByMenClothing} className="px-4 py-2 mr-2 bg-slate-200 font-semibold rounded-full hover:bg-emerald-400 hover:text-white">Men's Clothing <i className="fa-solid fa-angle-down ml-1"></i></button>
          <button onClick={handleByWomenClothing} className="px-4 py-2 mr-2 bg-slate-200 font-semibold rounded-full hover:bg-emerald-400 v">Women's Clothing <i className="fa-solid fa-angle-down ml-1"></i></button>
          <button onClick={handleByJewelery} className="px-4 py-2 mr-2 bg-slate-200 font-semibold rounded-full hover:bg-emerald-400 hover:text-white">Jewellery <i className="fa-solid fa-angle-down ml-1"></i></button>
          <button onClick={handleByElectronics} className="px-4 py-2 mr-2 bg-slate-200 font-semibold rounded-full hover:bg-emerald-400 hover:text-white">Electronics <i className="fa-solid fa-angle-down ml-1"></i></button>
        </div>
        <button onClick={handleByAll} className="px-4 py-2 mr-2 bg-slate-200 font-semibold rounded-full hover:bg-emerald-400 hover:text-white">Display all <i class="fa-solid fa-angles-down"></i></button>
      </div>
      {items?.map((item) => (
        <Items key={item.id} item={item} />
      ))}
      
    </div>
  );
};

export default Card;