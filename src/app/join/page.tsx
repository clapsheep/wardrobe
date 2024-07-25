"use client";
import {
  Checkbox,
  Progressbar,
  BasicInput,
  BasicButton,
} from "@/components/atoms";
import {
  useState,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { useDebounce } from "@/hooks";

//타입 지정
interface TStepComponent {
  setJoinStep: React.Dispatch<React.SetStateAction<number>>;
  setJoinData: any;
}
interface Step {
  title: JSX.Element;
  component: JSX.Element;
}

type CheckState = Record<string, boolean> & { all: boolean };

//회원가입 첫번째 단계
const FirstStep = ({ setJoinStep }: TStepComponent) => {
  const setJoinData = useContext(JoinData);
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
        <Checkbox id="all" type="all" checked={isChecked.all}>
          모두 동의(선택 정보 포함)
        </Checkbox>
        <hr />
        {List.map(({ id, desc }) => (
          <Checkbox key={id} id={id} type="seperate" checked={isChecked[id]}>
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

//회원가입 두번째 단계
/*const SecondStep = ({ setJoinStep }: TStepComponent) => {
  const setJoinData = useContext(JoinData);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const debouncedData = useDebounce(enteredEmail, 300);
  const isProperEmail = (email: string) => {
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    return emailReg.test(email);
  };
  const isRegsiterdEmail = (email: string) => {
    return true;
  };
  useEffect(() => {
    if (debouncedData) {
      if (!isProperEmail(debouncedData)) {
        setErrorMessage("이메일 형식이 올바르지 않습니다.");
      } else if (!isRegsiterdEmail(debouncedData)) {
        setErrorMessage("가입된 이메일임");
      } else {
        setErrorMessage("");
        setDisableButton(false);
      }
    }
  }, [debouncedData]);
  return (
    <div
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setEnteredEmail(e.target.value)
      }
      className={`flex flex-col justify-center gap-8`}
    >
      <div>
        <BasicInput id={"id"} type="text" placeholder={"아이디(이메일) 입력"} />
        <span className="text-b-3-regular text-accent-red">{errorMessage}</span>
      </div>
      <BasicButton
        onClick={() => {
          setJoinStep((prev) => prev + 1);
          setJoinData((prev) => {
            return { ...prev, email: debouncedData };
          });
        }}
        size="md"
        color="primary"
        disabled={disableButton}
      >
        다음
      </BasicButton>
    </div>
  );
};*/

type State = {
  enteredEmail: string;
  isButtonDisabled: boolean;
  errorMessage: string;
};

type Action =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_ERROR"; payload: string }
  | { type: "CLEAR_ERROR" }
  | { type: "ENABLE_BUTTON" }
  | { type: "DISABLE_BUTTON" };

const initialState: State = {
  enteredEmail: "",
  isButtonDisabled: true,
  errorMessage: "",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, enteredEmail: action.payload };
    case "SET_ERROR":
      return { ...state, errorMessage: action.payload, isButtonDisabled: true };
    case "CLEAR_ERROR":
      return { ...state, errorMessage: "", isButtonDisabled: false };
    case "ENABLE_BUTTON":
      return { ...state, isButtonDisabled: false };
    case "DISABLE_BUTTON":
      return { ...state, isButtonDisabled: true };
    default:
      return state;
  }
}

//회원가입 두번째 단계
const SecondStep = ({ setJoinStep, setJoinData }: TStepComponent) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const debouncedEmail = useDebounce(state.enteredEmail, 300);

  const isProperEmail = (email: string) => {
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    return emailReg.test(email);
  };

  const isRegisteredEmail = (email: string) => {
    return false;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
  };

  useEffect(() => {
    if (debouncedEmail) {
      if (!isProperEmail(debouncedEmail)) {
        dispatch({
          type: "SET_ERROR",
          payload: "이메일 형식이 올바르지 않습니다.",
        });
      } else if (isRegisteredEmail(debouncedEmail)) {
        dispatch({ type: "SET_ERROR", payload: "가입된 이메일입니다." });
      } else {
        dispatch({ type: "CLEAR_ERROR" });
      }
    } else {
      dispatch({ type: "DISABLE_BUTTON" });
    }
  }, [debouncedEmail]);

  return (
    <div className={`flex flex-col justify-center gap-8`}>
      <div>
        <input
          id="id"
          type="text"
          placeholder="아이디(이메일) 입력"
          value={state.enteredEmail}
          onChange={handleInputChange}
          className="w-full rounded border p-2"
        />
        {state.errorMessage && (
          <span className="mt-2 block text-b-3-regular text-accent-red">
            {state.errorMessage}
          </span>
        )}
      </div>
      <BasicButton
        onClick={() => {
          setJoinStep((prev) => prev + 1);
          setJoinData((prev) => ({ ...prev, email: debouncedEmail }));
        }}
        size="md"
        color="primary"
        disabled={state.isButtonDisabled}
      >
        다음
      </BasicButton>
    </div>
  );
};

//회원가입 세번째 단계
const ThirdStep = ({ setJoinStep }: TStepComponent) => {
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
      <BasicButton
        onClick={() => console.log("완룡")}
        size="md"
        color="primary"
      >
        완료
      </BasicButton>
    </div>
  );
};

const JoinData = createContext({});

const Join: React.FC = () => {
  const [joinData, setJoinData] = useState();
  console.log(joinData);
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
    <JoinData.Provider value={setJoinData}>
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
    </JoinData.Provider>
  );
};

export default Join;
