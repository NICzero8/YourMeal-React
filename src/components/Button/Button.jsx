import "./Button.scss";

export default function Button({ children, isProductInfo, isOrder, onClick, disabled }) {

  function handleClick(e) {
    e.stopPropagation();
    onClick();
  }

  return (
    <button
    disabled={disabled}
      className={
        isProductInfo
          ? "button add-button product-info_add-button"
          : isOrder
          ? "button order-button"
          : "button add-button"
      }
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
