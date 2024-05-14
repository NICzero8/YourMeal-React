import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from "../store/slices/modalSlice";
import { clearCart } from "../store/slices/cartSlice";

import "./DeliveryForm.scss";
import "./CustomRadio.scss";
import deliveryImg from "./img/delivery-img.png";

export default function DeliveryForm() {
  const [delivery, setDelivery] = useState(false);
  const dispatch = useDispatch();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const { productsInCart, totalPrice, freeDelivery } = useSelector((state) => state.cart);

  function makeDeliveryMessage(data) {
    function makeCartList(products) {
      let cartList = ""
        products.forEach(function (product) {
          cartList = `${cartList}
          ${product.name}, ${product.quantity} шт., ${product.price*product.quantity}р`;
        })
  
        return cartList
    }
    const orderNumber = Math.floor(Math.random() * 100) + 1;

    let message = `${data.name}, спасибо за Ваш заказ! Ваш заказ уже принят, ожидайте.
    Заказ №${orderNumber}

    ${delivery ? "Доставка по адресу:" : "Самовывоз"}
    ${delivery ? data.adress + (data.floor && (", этаж " + data.floor)) + (data.intercom && (", домофон " + data.intercom)) : ""}
    ${freeDelivery ? "Бесплатная доставка" : "Стоимость доставки 400р"}

    Состав заказа: ${makeCartList(productsInCart)}

    Итого: ${totalPrice}р
    `

    return message
  }

  function onSubmit(data) {
    alert(makeDeliveryMessage(data));
    dispatch(closeModal())
    dispatch(clearCart())
  }

  return (
    <div className="delivery_wrapper">
      <div className="delivery-image">
        <img src={deliveryImg} alt="Дессерт" />
      </div>

      <div className="form_wrapper">
        <form className="delivery-form" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="delivery-form_title">Доставка</h3>

          <div className="input_wrapper">
            <input
              {...register("name", {
                required: "Поле обязательно для заполнения",
                minLength: { value: 2, message: "Не менее 2-х символов" },
              })}
              className="input input_name"
              type="text"
              placeholder="Ваше имя"
            />
            {errors?.name && (
              <div className="input-error">
                <p>{errors.name.message}</p>
              </div>
            )}
          </div>

          <div className="input_wrapper">
            <input
              {...register("phone", {
                required: "Поле обязательно для заполнения",
                pattern: {
                  value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i,
                  message: "Укажите правильный номер телефона",
                },
              })}
              className="input input_tel"
              type="tel"
              placeholder="Ваш телефон"
            />
            {errors?.phone && (
              <div className="input-error">
                <p>{errors.phone.message}</p>
              </div>
            )}
          </div>

          <div className="radio_wrapper">
            <input
              type="radio"
              className="custom-radio"
              id="pickup"
              name="order"
              value="pickup"
              checked={!delivery}
              onChange={() => setDelivery(false)}
            />
            <label htmlFor="pickup">Самовывоз</label>

            <input
              type="radio"
              className="custom-radio"
              id="delivery"
              name="order"
              value="delivery"
              checked={delivery}
              onChange={() => setDelivery(true)}
            />
            <label htmlFor="delivery">Доставка</label>

            {delivery && (
              <div className="adress_wrapper">
                <div className="input-adress_wrapper input_wrapper">
                  <input
                    {...register("adress", {
                      required: "Поле обязательно для заполнения",
                      min: { value: 10, message: "Не менее 10 символов" },
                    })}
                    className="input input_adress"
                    type="text"
                    placeholder="Улица, дом, квартира"
                  />
                  {errors?.adress && (
                    <div className="input-error">
                      <p>{errors.adress.message}</p>
                    </div>
                  )}
                </div>

                <div className="input_wrapper">
                  <input
                    {...register("floor", {
                      maxLength: { value: 2, message: "Не более 2-х цифр" },
                    })}
                    className="input input_adress-details"
                    type="number"
                    placeholder="Этаж"
                  />
                  {errors?.floor && (
                    <div className="input-error">
                      <p>{errors.floor.message}</p>
                    </div>
                  )}
                </div>

                <div className="input_wrapper">
                  <input
                    {...register("intercom", {
                      maxLength: { value: 4, message: "Не более 4-х цифр" },
                    })}
                    className="input input_adress-details"
                    type="number"
                    placeholder="Домофон"
                  />
                  {errors?.intercom && (
                    <div className="input-error">
                      <p>{errors.intercom.message}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <button className="button order-button delivery-button" type="submit" disabled={!isValid} >
            Оформить заказ
          </button>
        </form>
      </div>
    </div>
  );
}
