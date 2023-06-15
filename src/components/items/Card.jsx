import { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../redux/HomeSlice";
import Items from "./Items";

const Card = () => {
  const dispatch = useDispatch();

	const { items } = useSelector((state) => state.items)
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div>
      {items?.map((item) => (
        <Items key={item.id.toString()} item={item} />
      ))}
    </div>
  );
};

export default Card;