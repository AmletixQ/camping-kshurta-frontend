export const formatPhoneNumber = (phone: string): string => {
  if (phone.startsWith("7")) {
    if (phone.length <= 1) return `+${phone}`;
    if (phone.length <= 4) return `+7 (${phone.slice(1)}`;
    if (phone.length <= 7) return `+7 (${phone.slice(1, 4)}) ${phone.slice(4)}`;
    if (phone.length <= 9)
      return `+7 (${phone.slice(1, 4)}) ${phone.slice(4, 7)}-${phone.slice(7)}`;
    return `+7 (${phone.slice(1, 4)}) ${phone.slice(4, 7)}-${phone.slice(
      7,
      9
    )}-${phone.slice(9)}`;
  }
  return phone ? `+${phone}` : "";
};
