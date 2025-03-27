import { ChangeEvent, FC } from "react";
import Input from "../../Input/Input";

interface IPhoneInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PhoneInput: FC<IPhoneInputProps> = ({ value, onChange, ...props }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value.replace(/\D/g, "");
    if (phone.length > 15) {
      return;
    }
    onChange(formatPhoneNumber(phone));
  };

  const formatPhoneNumber = (phone: string): string => {
    if (phone.startsWith("7")) {
      if (phone.length <= 1) return `+${phone}`;
      if (phone.length <= 4) return `+7 (${phone.slice(1)}`;
      if (phone.length <= 7)
        return `+7 (${phone.slice(1, 4)}) ${phone.slice(4)}`;
      if (phone.length <= 9)
        return `+7 (${phone.slice(1, 4)}) ${phone.slice(4, 7)}-${phone.slice(
          7
        )}`;
      return `+7 (${phone.slice(1, 4)}) ${phone.slice(4, 7)}-${phone.slice(
        7,
        9
      )}-${phone.slice(9)}`;
    }
    return phone ? `+${phone}` : "";
  };

  return (
    <Input
      id="phonenumber"
      placeholder="+7 900 800 00 00"
      font="number"
      type="text"
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};
export default PhoneInput;
