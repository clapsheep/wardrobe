"use client";
import {
  Checkbox,
  Progressbar,
  BasicInput,
  BasicButton,
} from "@/components/atoms";
import { useState } from "react";

const FirstStep = () => {
  const [isChecked, setIsChecked] = useState(new Map());

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;

    if (id === "all") {
      setIsChecked(() => {
        const newMap = new Map();
        newMap.set(id, checked);
        List.forEach((item) => newMap.set(item.id, checked));
        return newMap;
      });
    } else {
      setIsChecked((prevState) => new Map(prevState).set(id, checked));
      if (!checked) {
        setIsChecked((prev) => new Map(prev).set("all", false));
      }
      if (
        List.filter((item) => isChecked.get(item.id) === true).length ===
        List.length
      ) {
        setIsChecked((prev) => new Map(prev).set("all", true));
      }
    }
  };

  const List = [
    { id: "age", desc: "[필수] 만 14세 이상입니다", essential: true },
    { id: "terms", desc: "[필수] 이용약관 동의", essential: true },
    {
      id: "privacy",
      desc: "[필수] 개인정보 수집 및 이용 동의",
      essential: true,
    },
    {
      id: "marketing",
      desc: "[선택] 마케팅 목적의 개인정보 수집 및 이용 동의",
      essential: false,
    },
    {
      id: "advertise",
      desc: "[선택] 광고성 정보 수신 동의",
      essential: false,
    },
  ];

  return (
    <div
      onChange={handleCheck}
      className="flex flex-col justify-center gap-4 pb-10"
    >
      <Checkbox id="all" type="all" checked={isChecked.get("all")}>
        모두 동의(선택 정보 포함)
      </Checkbox>
      <hr />
      {List.map(({ id, desc }) => (
        <Checkbox key={id} id={id} type="seperate" checked={isChecked.get(id)}>
          {desc}
        </Checkbox>
      ))}
    </div>
  );
};

const SecondStep = () => {
  return (
    <div className={`flex flex-col justify-center gap-8`}>
      <BasicInput id={"id"} type="text" placeholder={"아이디(이메일) 입력"} />
    </div>
  );
};

const ThirdStep = () => {
  return (
    <div className="flex flex-col gap-2">
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
      <div className="flex items-center gap-1">
        비밀번호 일치
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
      </div>
    </div>
  );
};

type Step = {
  title: JSX.Element;
  buttonDesc: string;
  component: JSX.Element;
};

const Join = () => {
  const steps: Record<number, Step> = {
    1: {
      title: (
        <>
          wardrobe 서비스 이용약관에 <br />
          동의해주세요.
        </>
      ),
      buttonDesc: "동의하고 가입하기",
      component: <FirstStep />,
    },
    2: {
      title: (
        <>
          로그인에 사용할 <br />
          아이디를 입력해주세요.
        </>
      ),
      buttonDesc: "다음",
      component: <SecondStep />,
    },
    3: {
      title: (
        <>
          로그인에 사용할 <br />
          비밀번호를 입력해주세요.
        </>
      ),
      buttonDesc: "완료",
      component: <ThirdStep />,
    },
  };
  const [joinStep, setJoinStep] = useState<number>(1);
  const currentStep = steps[joinStep];

  return (
    <main
      className={`mx-auto flex w-96 flex-col items-center justify-center gap-9 pb-96`}
    >
      <div className="flex w-full flex-col items-center gap-9">
        <h2 className="text-h-1-bold">간편가입</h2>
        <Progressbar max={Object.keys(steps).length} step={joinStep} />
        <div className="w-full">
          <p className={`text-h-5-semibold`}>{currentStep.title}</p>
        </div>
      </div>
      <form className="w-full">{currentStep.component}</form>
      <BasicButton
        onClick={() => setJoinStep((prevStep) => Math.min(prevStep + 1, 3))}
        size="md"
        color="primary"
      >
        {currentStep.buttonDesc}
      </BasicButton>
    </main>
  );
};

export default Join;
