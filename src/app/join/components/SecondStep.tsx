import { useDebounce } from "@/hooks";
import { useJoinData } from "../JoinContext";
import { useReducer, useEffect } from "react";
import { emailReducer } from "../utils/joinReducer";
import { BasicInput, BasicButton } from "@/components/atoms";
// import { isProperEmail, isRegisteredEmail } from "@/lib/utils";

interface TStepComponent {
  setJoinStep: React.Dispatch<React.SetStateAction<number>>;
}

type SecondStepState = {
  enteredEmail: string;
  isButtonDisabled: boolean;
  errorMessage: string;
};

const initialState: SecondStepState = {
  enteredEmail: "",
  isButtonDisabled: true,
  errorMessage: "",
};
const SecondStep = ({ setJoinStep }: TStepComponent) => {
  const { setJoinData } = useJoinData();
  const [state, dispatch] = useReducer(emailReducer, initialState);
  const debouncedEmail = useDebounce(state.enteredEmail, 300);
  const isProperEmail = (email: string) => {
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    return emailReg.test(email);
  };

  // 가입한 이메일 체크 수정 필요
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
        <BasicInput
          id="id"
          type="text"
          placeholder="아이디(이메일) 입력"
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
          setJoinData((prev: any) => ({ ...prev, email: debouncedEmail }));
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
export default SecondStep;
