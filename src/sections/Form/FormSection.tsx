import Container from "../../components/Container/Container";
import Form from "../../components/Form/Form";

import styles from "./FormSection.module.scss";

const FormSection = () => {
  return (
    <Container side="right">
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
        <img src="/images/form-image.png" alt="" />
      </div>
    </Container>
  );
};
export default FormSection;
