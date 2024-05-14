import QtyButtons from "../QtyButtons/QtyButtons";

export default function CartItem({ product }) {
  return (
    <div className="cart_item">
      <div className="cart_item_img">
        <img
          src={`./img/products/${product.category}/${product.image}.png`}
          alt={product.name}
        />
      </div>

      <div className="cart_item_info">
        <p className="cart_product-name">{product.name}</p>
        <span className="cart_product-weight">{product.weight}</span>
        <p className="cart_product-price">
          {product.price * product.quantity}
        </p>
      </div>

      <QtyButtons product={product} />
    </div>
  );
}
