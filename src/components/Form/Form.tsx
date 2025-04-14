import { FormEvent, useState } from "react";

import Input from "../../components/Input/Input";
import PhoneInput from "../PhoneInput/PhoneInput";

import styles from "./Form.module.scss";

const Form = () => {
  const [data, setData] = useState({
    fullname: "",
    phoneNumber: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!data.fullname || !data.phoneNumber) return;

    const formData = new FormData();
    formData.append("fullname", data.fullname);
    formData.append("phoneNumber", data.phoneNumber);

    await fetch("send.php", {
      method: "POST",
      body: formData,
    });

    setData({ fullname: "", phoneNumber: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__inputs}>
        <div className={styles.form__input_container}>
          <label htmlFor="name">Имя</label>
          <Input
            id="name"
            placeholder="Иван Иванов"
            value={data.fullname}
            onChange={(e) =>
              setData((prev) => ({ ...prev, fullname: e.target.value }))
            }
            required
          />
        </div>

        <div className={styles.form__input_container}>
          <label htmlFor="phonenumber">Телефон</label>
          <PhoneInput
            value={data.phoneNumber}
            onChange={(phonenumber) =>
              setData({ ...data, phoneNumber: phonenumber })
            }
          />
        </div>
      </div>

      <button className={styles.form__button}>Оставить заявку</button>
    </form>
  );
};
export default Form;
