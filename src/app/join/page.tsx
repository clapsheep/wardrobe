import {
  Checkbox,
  Progressbar,
  BasicInput,
  BasicButton,
} from "@/components/atoms";
import TermsCheckbox from "@/components/molecules/TermsCheckbox";

const Join = () => {
  return (
    <main className={`mx-auto flex w-96 flex-col items-center justify-center`}>
      <div className="flex w-full flex-col items-center gap-9">
        <h2 className="text-h-1-bold">간편가입</h2>
        <Progressbar max={4} step={1} />
      </div>
      <form className="w-full pt-8">
        <ThirdStep />
      </form>
    </main>
  );
};
export default Join;

const List = [
  { id: "age", desc: "[필수] 만 14세 이상입니다", essential: true },
  { id: "terms", desc: "[필수] 이용약관 동의", essential: true },
  { id: "privacy", desc: "[필수] 개인정보 수집 및 이용 동의", essential: true },
  {
    id: "marketing",
    desc: "[선택] 마케팅 목적의 개인정보 수집 및 이용 동의",
    essential: false,
  },
  { id: "advertise", desc: "[선택] 광고성 정보 수신 동의", essential: false },
];
const FirstStep = () => {
  return (
    <div className="flex flex-col justify-center gap-8 pb-96">
      <p className={`text-h-5-semibold`}>
        wardrobe 서비스 이용약관에 <br />
        동의해주세요.
      </p>
      <div className="flex flex-col gap-4 pb-10">
        <Checkbox id="all" type="all">
          모두 동의(선택 정보 포함)
        </Checkbox>
        <hr />
        {List.map(({ id, desc, essential }) => (
          <Checkbox key={id} id={id} type="seperate">
            {desc}
          </Checkbox>
        ))}
      </div>
      <BasicButton size="md" color="primary">
        동의하고 가입하기
      </BasicButton>
    </div>
  );
};

const SecondStep = () => {
  return (
    <div className={`flex flex-col justify-center gap-8 pb-96`}>
      <p className={`text-h-5-semibold`}>
        로그인에 사용할
        <br /> 아이디를 입력해주세요.
      </p>
      <BasicInput id={"id"} type="text" placeholder={"아이디(이메일) 입력"} />
      <BasicButton type={"submit"} size={"md"} color={"primary"}>
        다음
      </BasicButton>
    </div>
  );
};
const ThirdStep = () => {
  return (
    <div>
      <p className={`text-h-5-semibold`}>
        로그인에 사용할 <br />
        비밀번호를 입력해주세요.
      </p>
      <BasicInput id="password" type="password" placeholder="비밀번호 입력" />
      <ul className="flex gap-4">
        <li className="flex items-center gap-1">
          <span>대소문자</span>
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`text-gray-500`}
          >
            <path
              d="M0.5 4L4.5 8L11.5 0.5"
              stroke="currentColor"
              strokeWidth="1.8"
            />
          </svg>
        </li>
        <li className="flex items-center gap-1">
          숫자
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`text-gray-500`}
          >
            <path
              d="M0.5 4L4.5 8L11.5 0.5"
              stroke="currentColor"
              strokeWidth="1.8"
            />
          </svg>
        </li>
        <li className="flex items-center gap-1">
          특수문자{" "}
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`text-gray-500`}
          >
            <path
              d="M0.5 4L4.5 8L11.5 0.5"
              stroke="currentColor"
              strokeWidth="1.8"
            />
          </svg>
        </li>
        <li className="flex items-center gap-1">
          8-20자 이내{" "}
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`text-gray-500`}
          >
            <path
              d="M0.5 4L4.5 8L11.5 0.5"
              stroke="currentColor"
              strokeWidth="1.8"
            />
          </svg>
        </li>
      </ul>
      <BasicInput
        id="confirmpassword"
        type="password"
        placeholder="비밀번호 확인"
      />
    </div>
  );
};
