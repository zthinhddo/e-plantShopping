import '../styles/ProductList.css'

function ProductItem({ plant, handleAddToCart, index }) {
  return (
    <div className="product-card" id={`product_item_${index}`}>
      <div className="product-title">{plant.name}</div>
      <div className="product-image"><img src={plant.image}></img></div>
      <div className="product-price">{plant.price}</div>
      <div className="product-description"><p><i>{plant.description}</i></p></div>
      <button className="product-button" onClick={() => handleAddToCart(plant)}>Add to Cart</button>
    </div>

  )
}

export default ProductItem;
