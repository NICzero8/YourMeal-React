import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal, showDeliveryWindow } from "../store/slices/modalSlice";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import "./Cart.scss";

export default function Cart() {
  const [showMobileCart, setShowMobileCart] = useState(false);
  const dispatch = useDispatch();
  const { productsInCart, totalPrice, totalQuantity, freeDelivery } =
    useSelector((state) => state.cart);

  const cartCounter = useRef();
  const cartCounterMobile = useRef();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(productsInCart));
    cartCounter.current.className = "cart_counter shake";
    cartCounterMobile.current.className = "cart_counter shake";

    setTimeout(() => {
      cartCounter.current.className = "cart_counter";
      cartCounterMobile.current.className = "cart_counter";
    }, 600);
  }, [productsInCart]);

  function openDelivery() {
    setShowMobileCart(false);
    dispatch(showDeliveryWindow());
    dispatch(showModal());
  }

  return (
    <div className="cart_wrapper">
      <button
        className="cart_mobile-button"
        onClick={() => setShowMobileCart(true)}
      >
        <h3>Корзина</h3>
        <p className="cart_counter" ref={cartCounterMobile}>
          {totalQuantity}
        </p>
      </button>

      <div className={showMobileCart ? "cart cart-open" : "cart"}>
        <button
          className="cart_mobile-button_close"
          onClick={() => setShowMobileCart(false)}
        >
          Свернуть
        </button>

        <div className="cart_title" onClick={() => setShowMobileCart(false)}>
          <h3>Корзина</h3>
          <p className="cart_counter" ref={cartCounter}>
            {totalQuantity}
          </p>
        </div>

        <div className="cart_items">
          {productsInCart.length > 0 &&
            productsInCart.map((product, i) => (
              <CartItem product={product} key={i} />
            ))}
        </div>

        <div className="cart_total">
          {!productsInCart.length ? (
            <p className="cart_empty-message">Тут пока пусто :(</p>
          ) : (
            <>
              <div className="cart_total_wrapper">
                <p>Итого</p>
                <p className="cart_total-price">{totalPrice}</p>
              </div>
            </>
          )}
        </div>

        {productsInCart.length > 0 && (
          <>
            <Button isOrder={true} onClick={openDelivery}>
              Оформить заказ
            </Button>

            <div className="cart_delivery-message_wrapper">
              <div className="cart_delivery-message">
                <img src="./img/cart/delivery.svg" alt="Доставка" />

                {freeDelivery ? (
                  <p className="cart_free-delivery">Бесплатная доставка</p>
                ) : (
                  <p className="cart_paid-delivery">
                    Стоимость доставки:
                    <span className="cart_delivery-price">400</span>
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
