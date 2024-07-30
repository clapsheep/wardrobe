export const isProperEmail = (email: string) => {
  const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return emailReg.test(email);
};

// 가입한 이메일 체크 수정 필요
export const isRegisteredEmail = (email: string) => {
  return false;
};
