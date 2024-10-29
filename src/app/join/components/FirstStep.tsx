import { useState } from "react";
import { useJoinData } from "../JoinContext";
import { Checkbox, BasicButton } from "@/components/atoms";
import { TStepComponent, CheckState } from "../type";

const FirstStep = ({ setJoinStep }: TStepComponent) => {
  const { setJoinData } = useJoinData();
  const List = [
    { id: "age", desc: "[필수] 만 14세 이상입니다" },

    { id: "terms", desc: "[필수] 이용약관 동의" },
    {
      id: "privacy",
      desc: "[필수] 개인정보 수집 및 이용 동의",
    },
    {
      id: "marketing",
      desc: "[선택] 마케팅 목적의 개인정보 수집 및 이용 동의",
    },
    {
      id: "advertise",
      desc: "[선택] 광고성 정보 수신 동의",
    },
  ];
  //각 약관의 체크 여부
  const [isChecked, setIsChecked] = useState<CheckState>(() => {
    const initial: CheckState = { all: false };
    List.forEach(({ id }) => {
      initial[id] = false;
    });
    return initial;
  });

  // 약관 체크박스 클릭 이벤트 핸들러
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setIsChecked((prevState) => {
      const newState = { ...prevState };
      if (id === "all") {
        List.forEach(({ id }) => {
          newState[id] = checked;
        });
        newState.all = checked;
      } else {
        newState[id] = checked;
        const allChecked = List.every((item) => newState[item.id]);
        newState.all = allChecked;
      }
      return newState;
    });
  };

  return (
    <>
      <div
        onChange={handleCheck}
        className="flex flex-col justify-center gap-4 pb-10"
      >
        <Checkbox id="all" type="all" name="allCheck" checked={isChecked.all}>
          모두 동의(선택 정보 포함)
        </Checkbox>
        <hr />
        {List.map(({ id, desc }) => (
          <Checkbox
            key={id}
            name="내림차순"
            id={id}
            type="seperate"
            checked={isChecked[id]}
          >
            {desc}
          </Checkbox>
        ))}
      </div>
      <BasicButton
        onClick={() => {
          setJoinStep((prev) => prev + 1);
          setJoinData({ terms: isChecked });
        }}
        disabled={
          !(isChecked["age"] && isChecked["terms"] && isChecked["privacy"])
        }
        size="md"
        color="primary"
      >
        동의하고 가입하기
      </BasicButton>
    </>
  );
};
export default FirstStep;
