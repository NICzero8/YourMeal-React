import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from '../store/slices/cartSlice';

import QtyButtons from "../QtyButtons/QtyButtons";
import "./ProductInfo.scss";
import Button from "../Button/Button";

export default function ProductInfo() {
  const product = useSelector((state) => state.modal.selectedProduct)
  const [counter, setCounter] = useState(product.quantity)
  const dispatch = useDispatch()

  function makeIngridientList(ingridientsArray) {
    return (ingridientsArray.map((ingridient, i) => <li key={i}>{ingridient}</li>))
  }

  function toCart() {
    let i = counter
    while (i > 0) {
      dispatch(addToCart(product));
      i--
    }
    setCounter(product.quantity)
  }

  return (
    <div data-id="${selectedProduct.id}" className="product-info_wrapper">
      <h2 className="product_title">{product.name}</h2>

      <div className="product-details_wrapper">
        <div className="product-details_left-wrapper">
            <img
              className="product_image"
              src={`./img/products/${product.category}/${product.image}@2x.png`}
              alt={product.name}
            />
        </div>

        <div className="product-details_right-wrapper">
          <p className="product_description">{product.description}</p>

          <div className="ingridients_wrapper">
            <h4>Состав:</h4>
            <ul className="igridient_list">{makeIngridientList(product.ingridients)}</ul>
            <p className="nutritional-value">
              <span className="product-weight">{product.weight}</span>
              <span className="product-energy">{product.energy}</span>
            </p>
          </div>
        </div>
      </div>

      <div
        className="product-info_buttons-wrapper"
      >
        <Button isProductInfo={true} onClick={toCart}>
          Добавить
        </Button>

        <div className="product-quantity_wrapper">

          <QtyButtons product={product} isProductInfo={true} counter={counter} setCounter={setCounter}/>

          <p className="product_price">{product.price}</p>
        </div>
      </div>
    </div>
  );
}
