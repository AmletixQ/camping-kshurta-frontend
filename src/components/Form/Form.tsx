import { ChangeEvent, FormEvent, useState } from "react";
import { formatPhoneNumber } from "../../utlis/formatPhoneNumber";
import { useRequest } from "../../hooks/useRequest";

import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

import styles from "./Form.module.scss";

const Form = () => {
  const [errors, setErrors] = useState<{
    fullname?: string;
    phoneNumber?: string;
  }>({});
  const [data, setData] = useState({
    fullname: "",
    phoneNumber: "",
  });
  const { request, isLoading, modal, closeModal } = useRequest(data);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const fieldErrors = {
      fullname: validateField("fullname", data.fullname),
      phoneNumber: validateField("phoneNumber", data.phoneNumber),
    };

    setErrors(fieldErrors);
    if (Object.values(fieldErrors).some(Boolean)) return;

    const { success } = await request();
    if (success) setData({ fullname: "", phoneNumber: "" });
  };

  const validateField = (field: keyof typeof data, value: string) => {
    if (!value.trim()) return "Обязательное поле";

    if (field === "fullname") {
      if (value.length < 4) return "Слишком короткое имя";
      if (!/^[A-Za-zА-Яа-яЁё\s\-']+$/u.test(value))
        return "Только буквы и дефисы";
    } else if (field === "phoneNumber") {
      const cleaned = value.replace(/\D/g, "");
      if (cleaned.length < 11) return "Номер слишком короткий";
    }

    return "";
  };

  const handleChange =
    (field: keyof typeof data) => (e: ChangeEvent<HTMLInputElement>) => {
      const fieldValue = e.target.value;

      let value: string;
      if (field === "fullname") {
        value = fieldValue
          .replace(/[^A-Za-zА-Яа-яЁё\s\-']/gu, "")
          .replace(/\s+/g, " ")
          .trim();
      } else {
        value = formatPhoneNumber(fieldValue.replace(/\D/g, "").slice(0, 16));
      }

      setData((prev) => ({ ...prev, [field]: value }));
      // if (errors[field]) setData((prev) => ({ ...prev, [field]: "" }));
    };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form__inputs}>
          <Input
            required
            label="Имя"
            htmlFor="name"
            placeholder="Иван Иванов"
            value={data.fullname}
            onChange={handleChange("fullname")}
            error={errors.fullname}
            minLength={4}
          />
          <Input
            required
            type="tel"
            label="Телефон"
            htmlFor="phone"
            placeholder="+7 900 800 00 00"
            value={data.phoneNumber}
            onChange={handleChange("phoneNumber")}
            error={errors.phoneNumber}
            minLength={11}
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className={styles.form__button}
        >
          {isLoading ? "Отправка..." : "Оставить заявку"}
        </Button>
      </form>
      <Modal
        isOpen={modal.isOpen}
        onClose={closeModal}
        type={modal.type}
        message={modal.message}
      />
    </>
  );
};
export default Form;
