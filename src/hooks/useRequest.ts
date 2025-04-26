import { useState } from "react";

interface IFormData {
  fullname: string;
  phoneNumber: string;
}

interface IModal {
  isOpen: boolean;
  type: "error" | "success";
  message?: string;
}

export const useRequest = (data: IFormData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState<IModal>({ isOpen: false, type: "error" });

  const closeModal = () => setModal((prev) => ({ ...prev, isOpen: false }));

  const request = async () => {
    setIsLoading(true);

    const response = await fetch("/api/send.php", {
      method: "POST",
      // mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: data.fullname,
        phonenumber: data.phoneNumber,
      }),
    })
      .then((res) => res.json())
      .then((json) => json)
      .catch((e) => console.log(e));

    console.log(response);

    if (!response) {
      setModal({
        isOpen: true,
        type: "error",
        message: response || "Ошибка сервера, попробуйте позже",
      });
      setIsLoading(false);
      return { success: false };
    }

    setModal({
      isOpen: true,
      type: "success",
    });
    setIsLoading(false);

    return { success: true };
  };

  return { request, isLoading, closeModal, modal };
};
