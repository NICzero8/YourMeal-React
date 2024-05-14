import "./CategorySelector.scss";
import burgerIcon from "./img/burger.svg";
import comboIcon from "./img/combo.svg";
import dessertIcon from "./img/dessert.svg";
import hotdogIcon from "./img/hotdog.svg";
import pizzaIcon from "./img/pizza.svg";
import sauceIcon from "./img/sauce.svg";
import shawarmaIcon from "./img/shawarma.svg";
import snacksIcon from "./img/snacks.svg";
import wokIcon from "./img/wok.svg";

import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from "../store/slices/productsSlice";

export default function CategorySelector() {

  const selectedCategory = useSelector((state) => state.products.category)
  const dispatch = useDispatch()

  const categories = [
    { value: "burgers", name: "Бургеры", img: burgerIcon },
    { value: "snacks", name: "Закуски", img: snacksIcon },
    { value: "hotdogs", name: "Хот-доги", img: hotdogIcon },
    { value: "combo", name: "Комбо", img: comboIcon },
    { value: "shawarma", name: "Шаурма", img: shawarmaIcon },
    { value: "pizza", name: "Пицца", img: pizzaIcon },
    { value: "wok", name: "Вок", img: wokIcon },
    { value: "desserts", name: "Дессерты", img: dessertIcon },
    { value: "sauce", name: "Соусы", img: sauceIcon },
  ];

  return (
    <div className="product-category_selection">
      <ul id="selectCategory" className="category_list">

        {categories.map((category) => (
          <li key={category.value}>
            <button
              onClick={() => {
                dispatch(changeCategory(category));
              }}
              className={
                selectedCategory.value === category.value
                  ? "category_button category_selected"
                  : "category_button"
              }
            >
              <img src={category.img} alt={category.name} /> {category.name}
            </button>
          </li>
        ))}
        
      </ul>
    </div>
  );
}
