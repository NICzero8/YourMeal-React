import "./Content.scss";
import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productsSlice";

import Cart from "../Cart/Cart";
import CategorySelector from "../CategorySelector/CategorySelector";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
import ProductCard from "../ProductCard/ProductCard";
import { Suspense } from "react";

const DeliveryForm = lazy(() => import("../DeliveryForm/DeliveryForm"));
const ProductInfo = lazy(() => import("../ProductInfo/ProductInfo"));

export default function Content() {
  const { modalActive, isDeliveryWindow } = useSelector((state) => state.modal);
  const { products, status, category } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(category));
  }, [category]);

  const cardsContent =
    products.length > 0 ? (
      products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))
    ) : (
      <h1 className="no-products_message">
        Здесь пока ничего нет <nobr>:(</nobr>
      </h1>
    );

  return (
    <section className="products">
      <CategorySelector />

      <div className="container">
        <div className="products_wrapper">
          <h2 className="category_name">{category.name}</h2>

          <Cart />

          <div className="cards_wrapper">
            {status == "loading" ? <Loader /> : cardsContent}
          </div>
        </div>
      </div>

      {modalActive && (
        <Modal>
          {isDeliveryWindow ? (
            <Suspense fallback={<Loader />}>
              <DeliveryForm />
            </Suspense>
          ) : (
            <Suspense fallback={<Loader />}>
              <ProductInfo />
            </Suspense>
          )}
        </Modal>
      )}
    </section>
  );
}
