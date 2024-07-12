import { BasicButton, BasicInput } from "@/components/atoms";

const LoginPage = () => {
  return (
    <main className="mx-auto my-0 flex w-[440px] flex-col items-center justify-center py-[50px]">
      <h1 className="inline-block w-full border-b-4 border-black pb-4 text-center text-h-1-regular">
        로그인
      </h1>
      <form className="w-full">
        <BasicInput
          type="text"
          // label="아이디"
          placeholder="아이디(이메일)을 입력하세요."
          className="my-4 h-12"
          id="userId"
        />
        <BasicInput
          type="password"
          // label="비밀번호"
          placeholder="비밀번호를 입력하세요."
          className="my-4 h-12"
          id="password"
        />
        <BasicButton type="submit" size="lg" color="primary">
          로그인 하기
        </BasicButton>
      </form>
      <BasicButton
        className="mt-4 rounded-full"
        size="lg"
        color="secondary"
        href="/"
      >
        간편 회원가입하기
      </BasicButton>
    </main>
  );
};

export default LoginPage;
