import '../styles/ProductList.css'
import { useSelector } from 'react-redux';

function ProductItem({ plant, handleAddToCart, index }) {
  const cartItems = useSelector((state) => state.cart.items);
  const isAddedToCart = cartItems.some(({ name }) => name === plant.name);
  return (
    <div className="product-card" id={`product_item_${index}`}>
      <div className="product-title">{plant.name}</div>
      <div className="product-image"><img src={plant.image}></img></div>
      <div className="product-price">{plant.price}</div>
      <div className="product-description"><p><i>{plant.description}</i></p></div>
      <button disabled={isAddedToCart} className={`product-button ${isAddedToCart ? 'added-to-cart' : ''}`} onClick={() => handleAddToCart(plant)}>Add to Cart</button>
    </div>

  )
}

ProductItem.propTypes = {
  plant: {
    name: String,
    image: String,
    price: Number,
    description: String,
  },
  handleAddToCart: () => {
    console.log('trigger function adding item to cart')
  },
  index: Number,
}
export default ProductItem;
