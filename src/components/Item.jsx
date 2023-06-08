import { useLocation } from "react-router-dom";

const Item = () => {
  const { state } = useLocation();
  const item = state?.item;

  return (
    <div>
      {item && (
        <>
          <h1>{item.name}</h1>
          <h2>{item.description}</h2>
        </>
      )}
    </div>
  );
};

export default Item;
