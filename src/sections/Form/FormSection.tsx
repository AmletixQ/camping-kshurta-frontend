import Container from "../../components/Container/Container";
import Form from "../../components/Form/Form";

import styles from "./FormSection.module.scss";

import image from "/images/form-image.png";

const FormSection = () => {
  return (
    <Container className={styles.container} id="form">
      <div className={styles.form} id="form">
        <div className={styles.form__container}>
          <div className={styles.form__box}>
            <h2>Оставить заявку</h2>
            <p>
              Оставь заявку, чтобы отправиться в это незабываемое путешествие
            </p>
          </div>

          <Form />
        </div>
        <img src={image} alt="" />
      </div>
    </Container>
  );
};
export default FormSection;
