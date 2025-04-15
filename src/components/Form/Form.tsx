import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../../components/Input/Input";

import styles from "./Form.module.scss";
import { formatPhoneNumber } from "../../utlis/formatPhoneNumber";

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

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value.replace(/\D/g, "");
    if (phone.length > 15) {
      return;
    }

    setData((prev) => ({ ...prev, phoneNumber: formatPhoneNumber(phone) }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__inputs}>
        <Input
          label="Имя"
          htmlFor="name"
          placeholder="Иван Иванов"
          value={data.fullname}
          onChange={(e) =>
            setData((prev) => ({ ...prev, fullname: e.target.value }))
          }
          required
        />
        <div>
          <Input
            type="tel"
            label="Телефон"
            htmlFor="phone"
            placeholder="+7 900 800 00 00"
            value={data.phoneNumber}
            onChange={(e) => handlePhoneNumberChange(e)}
            required
          />
        </div>
      </div>

      <button className={styles.form__button}>Оставить заявку</button>
    </form>
  );
};
export default Form;
