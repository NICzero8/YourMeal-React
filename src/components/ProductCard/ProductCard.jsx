import { useDispatch } from 'react-redux';
import { showModal, setSelectedProduct } from "../store/slices/modalSlice";
import { addToCart } from '../store/slices/cartSlice';

import "./ProductCard.scss";
import Button from "../Button/Button";

export default function ProductCard({ product }) {

  const dispatch = useDispatch();

  function openInfo() {
    dispatch(setSelectedProduct(product))
    dispatch(showModal())
  }

  return (
    <div className="product_card" onClick={openInfo}>
      <div
        className="card_product-image"
      >
        <img
          src={`./img/products/${product.category}/${product.image}.png`}
          alt={product.name}
        />
      </div>
      <p className="product_price card_product-price">{product.price}</p>
      <p className="card_product-name">{product.name}</p>
      <div className="spacer"></div>
      <span className="card_product-weight">{product.weight}</span>
      <Button product={product} onClick={() => dispatch(addToCart(product))}>Добавить</Button>
    </div>
  );
}
