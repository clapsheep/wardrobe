"use client";
import { useState } from "react";
import { JoinDataProvider } from "./JoinContext";
import { Progressbar } from "@/components/atoms";
import { FirstStep, SecondStep, ThirdStep } from "./components";

interface Step {
  title: JSX.Element;
  component: JSX.Element;
}
const Join: React.FC = () => {
  const [joinStep, setJoinStep] = useState(1);
  const steps: { [key: number]: Step } = {
    1: {
      title: (
        <>
          wardrobe 서비스 이용약관에 <br />
          동의해주세요.
        </>
      ),
      component: <FirstStep setJoinStep={setJoinStep} />,
    },
    2: {
      title: (
        <>
          로그인에 사용할 <br />
          아이디를 입력해주세요.
        </>
      ),
      component: <SecondStep setJoinStep={setJoinStep} />,
    },
    3: {
      title: (
        <>
          로그인에 사용할 <br />
          비밀번호를 입력해주세요.
        </>
      ),
      component: <ThirdStep setJoinStep={setJoinStep} />,
    },
  };
  const currentStep = steps[joinStep];

  return (
    <JoinDataProvider>
      <main className="mx-auto flex w-96 flex-col items-center justify-center gap-9 pb-96">
        <div className="flex w-full flex-col items-center gap-9">
          <h2 className="text-h-1-bold">간편가입</h2>
          <Progressbar max={Object.keys(steps).length} step={joinStep} />
          <div className="w-full">
            <p className="text-h-5-semibold">{currentStep.title}</p>
          </div>
        </div>
        <form className="w-full">{currentStep.component}</form>
      </main>
    </JoinDataProvider>
  );
};

export default Join;
