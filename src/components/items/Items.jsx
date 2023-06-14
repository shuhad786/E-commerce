import PropTypes from 'prop-types';

const Items = ({ item }) => {
 const {id, name, description, price, image} = item;

 return (
   <div>
     <h1>{id}</h1>
     <h1>{name}</h1>
     <h2 className="p-8">{description}</h2>
     <h3>{price}$</h3>
     <img src={image} width='400px' height='200px' alt={name} />
   </div>
 );
};

Items.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Items;

{/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/item/:id' element={<Item />} />
      </Routes> */}