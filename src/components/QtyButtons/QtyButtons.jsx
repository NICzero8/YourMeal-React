import "./QtyButtons.scss";
import { addToCart, removeFromCart } from '../store/slices/cartSlice';
import { useDispatch } from 'react-redux';

export default function QtyButtons( {product, isProductInfo, counter, setCounter} ) {
  const dispatch = useDispatch()
  
  function increase() {
    if (isProductInfo) {
      setCounter(counter => counter + 1)
      console.log(counter)
    } else {
      dispatch(addToCart(product))
    }
  }

  function decrease() {
    if (isProductInfo) {
      counter > 1 && setCounter(counter => counter - 1)
    } else {
      dispatch(removeFromCart(product))
    }
  }

  return (
    <div className={`quantity_buttons ${isProductInfo && "product-info_quantity-buttons"}`}>
      <button className="minus-button" onClick={decrease}>
        -
      </button>
      <p className="quantity-counter">{isProductInfo ? counter : product.quantity}</p>
      <button className="plus-button" onClick={increase}>
        +
      </button>
    </div>
  );
}
