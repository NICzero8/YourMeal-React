import { useState } from "react";
import { useDispatch } from 'react-redux';
import { closeModal } from "../store/slices/modalSlice";
import "./Modal.scss";

export default function Modal( {children} ) {
  const [isClosing, setIsClosing] = useState(false);
  const dispatch = useDispatch();

  function closeHandler() {
    setIsClosing(true);
    setTimeout(() => {
      dispatch(closeModal());
    }, 500);
  }

  return (
    <div className={isClosing ? "modal modal_close-animation" : "modal"}>
      <div className="modal_window">
        <button className="close-button" onClick={closeHandler}></button>
        {children}
      </div>
    </div>
  );
}
