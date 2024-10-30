import { BasicButton, BasicInput } from "@/components/atoms";
import { auth, signIn } from "@/auth";

const LoginPage = async () => {
  const loginAction = async (formData: FormData) => {
    "use server";
    await signIn("credentials", formData);
  };
  const session = await auth();
  console.log("********뭐나오냐********", session);

  return (
    <main className="mx-auto my-0 flex max-w-[480px] flex-col items-center justify-center px-5 py-[50px]">
      <h1 className="inline-block w-full border-b-4 border-black pb-4 text-center text-h-1-regular">
        로그인
      </h1>
      <form className="w-full" action={loginAction}>
        <BasicInput
          type="text"
          placeholder="아이디를 입력하세요."
          className="my-4 h-12"
          id="username"
        />
        <BasicInput
          type="password"
          placeholder="비밀번호를 입력하세요."
          className="my-2 h-12"
          id="password"
        />
        {/* <span className="text-b-3-regular text-accent-red">
          아이디와 비밀번호를 확인해주세요.
        </span> */}
        <BasicButton className="mt-2" type="submit" size="lg" color="primary">
          로그인 하기
        </BasicButton>
      </form>

      <BasicButton
        className="mt-4 rounded-full"
        size="lg"
        color="secondary"
        href="/join"
      >
        간편 회원가입하기
      </BasicButton>
    </main>
  );
};

export default LoginPage;
