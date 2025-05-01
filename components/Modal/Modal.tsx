import { FC, useEffect } from "react";

import Success from "../icons/Status/Success";
import Button from "../Button/Button";

import styles from "./Modal.module.scss";
import Failed from "../icons/Status/Failed";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "error" | "success";
}

const Modal: FC<IModalProps> = ({ isOpen, onClose, type }) => {
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
        {type === "success" ? <Success /> : <Failed />}
        <div className={styles.modal__content}>
          <h2 className={styles.modal__title}>
            {type === "success" ? "Ваша заявка отправлена!" : "Ошибка!"}
          </h2>
          {type === "error" && <p>Упс... Что-то не так, попробуйте ещё раз</p>}
        </div>
        <Button onClick={onClose}>Закрыть</Button>
      </div>
    </div>
  );
};

export default Modal;
