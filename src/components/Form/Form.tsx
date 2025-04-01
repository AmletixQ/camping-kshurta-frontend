import { FormEvent, useState } from "react";
import { axiosInstance } from "../../configs/axios.instance";

import Input from "../../components/Input/Input";
import PhoneInput from "../PhoneInput/PhoneInput";

import styles from "./Form.module.scss";

const Form = () => {
  const [data, setData] = useState({
    fullname: "",
    phonenumber: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!data.fullname || !data.phonenumber) return;

    const { data: result } = await axiosInstance.post("applications", {
      data,
    });

    setData({ fullname: "", phonenumber: "" });

    console.log(result);
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
          />
        </div>

        <div className={styles.form__input_container}>
          <label htmlFor="phonenumber">Телефон</label>
          <PhoneInput
            value={data.phonenumber}
            onChange={(phonenumber) => setData({ ...data, phonenumber })}
          />
        </div>
      </div>

      <button className={styles.form__button}>Оставить заявку</button>
    </form>
  );
};
export default Form;
