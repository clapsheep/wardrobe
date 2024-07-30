export const hasNumber = (str: string) => {
  const regex = /\d/;
  return regex.test(str);
};
export const hasSpecialCharacter = (str: string) => {
  const regex = /[^a-zA-Z0-9가-힣]/;
  return regex.test(str);
};
export const hasBothCases = (str: string) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
  return regex.test(str);
};
