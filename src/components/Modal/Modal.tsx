import { FC, useEffect } from "react";

import Success from "../icons/Success/Success";
import Button from "../Button/Button";

import styles from "./Modal.module.scss";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "error" | "success";
  message?: string;
}

const Modal: FC<IModalProps> = ({ isOpen, onClose, type, message }) => {
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div
      onClick={onClose}
      className={styles.modal}
      data-open={isOpen ? "opened" : "closed"}
    >
      <div className={styles.modal__container}>
        {type === "success" && <Success />}
        <h2 className={styles.modal__title}>
          {type === "success" ? "Ваша заявка отправлена!" : message}
        </h2>
        <Button onClick={onClose}>Закрыть</Button>
      </div>
    </div>
  );
};

export default Modal;
