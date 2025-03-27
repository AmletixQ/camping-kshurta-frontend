import { useState } from "react";
import Input from "../../Input/Input";
import Button from "../Button/Button";

import styles from "./Form.module.scss";
import PhoneInput from "../PhoneInput/PhoneInput";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    phonenumber: "",
  });
  return (
    <form className={styles.form}>
      <div className={styles.form__inputs}>
        <div className={styles.form__input_container}>
          <label htmlFor="name">Имя</label>
          <Input id="name" placeholder="Иван Иванов" />
        </div>

        <div className={styles.form__input_container}>
          <label htmlFor="phonenumber">Телефон</label>
          <PhoneInput
            value={data.phonenumber}
            onChange={(phonenumber) => setData({ ...data, phonenumber })}
          />
        </div>
      </div>

      <Button color="primary">Оставить заявку</Button>
    </form>
  );
};
export default Form;
