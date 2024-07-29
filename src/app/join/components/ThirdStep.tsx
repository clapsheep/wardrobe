import { useDebounce } from "@/hooks";
import { useJoinData } from "../JoinContext";
import { useReducer, useEffect } from "react";
import { passwordReducer } from "../utils/joinReducer";
import { BasicInput, BasicButton } from "@/components/atoms";
import { TStepComponent, ThirdStepState, TJoinData } from "../type";
// import { hasNumber, hasBothCases, hasSpecialCharacter } from "@/lib/utils";

const passwordInitial: ThirdStepState = {
  enteredPassword: "",
  confirmPassword: "",
  isButtonDisable: true,
  비밀번호일치: false,
  대소문자있니: false,
  숫자있니: false,
  특수문자있니: false,
  여덟스무글자: false,
};

const ThirdStep = ({ setJoinStep }: TStepComponent) => {
  const { setJoinData } = useJoinData();
  const [state, dispatch] = useReducer(passwordReducer, passwordInitial);
  const debouncedPassword = useDebounce(state.enteredPassword, 300);
  const debouncedConfirmPassword = useDebounce(state.confirmPassword, 300);

  const style = {
    li: "flex items-center gap-1 text-b-3-regular",
  };
  const hasNumber = (str: string) => {
    const regex = /\d/;
    return regex.test(str);
  };
  const hasSpecialCharacter = (str: string) => {
    const regex = /[^a-zA-Z0-9가-힣]/;
    return regex.test(str);
  };
  const hasBothCases = (str: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    return regex.test(str);
  };

  useEffect(() => {
    if (debouncedPassword) {
      dispatch({
        type: "CHECK_PROPER_VALUE",
        payload:
          8 <= debouncedPassword.length && debouncedPassword.length <= 20,
      });
      dispatch({
        type: "CHECK_INCLUDES_DIGITS",
        payload: hasNumber(debouncedPassword),
      });
      dispatch({
        type: "CHECK_INCLUDSE_SPECIAL_CHARS",
        payload: hasSpecialCharacter(debouncedPassword),
      });
      dispatch({
        type: "CHECK_INCLUDES_BOTHCASES",
        payload: hasBothCases(debouncedPassword),
      });
    }

    if (debouncedConfirmPassword && debouncedPassword) {
      dispatch({
        type: "SET_SAME_PASSWORD",
        payload: debouncedPassword === debouncedConfirmPassword,
      });
    }
  }, [debouncedPassword, debouncedConfirmPassword]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "password") {
      dispatch({ type: "SET_PASSWORD", payload: e.target.value });
    }
    if (e.target.id === "confirmpassword") {
      dispatch({ type: "SET_CONFIRM_PASSWORD", payload: e.target.value });
    }
  };
  return (
    <>
      <div onChange={handleInputChange} className="flex flex-col gap-3 pb-10">
        <BasicInput id="password" type="password" placeholder="비밀번호 입력" />
        <ul className="flex gap-4">
          <li className={`${style.li}`}>
            <span>대소문자</span>
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={` ${state.대소문자있니 ? "text-accent-red" : "text-gray-500"}`}
            >
              <path
                d="M0.5 4L4.5 8L11.5 0.5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
          </li>
          <li className={`${style.li}`}>
            숫자
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              className={` ${state.숫자있니 ? "text-accent-red" : "text-gray-500"}`}
            >
              <path
                d="M0.5 4L4.5 8L11.5 0.5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
          </li>
          <li className={`${style.li}`}>
            특수문자
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${state.특수문자있니 ? "text-accent-red" : "text-gray-500"}`}
            >
              <path
                d="M0.5 4L4.5 8L11.5 0.5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
          </li>
          <li className={`${style.li}`}>
            8-20자 이내{" "}
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={` ${state.여덟스무글자 ? "text-accent-red" : "text-gray-500"}`}
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
        <div className={`${style.li}`}>
          비밀번호 일치
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={` ${state.비밀번호일치 ? "text-accent-red" : "text-gray-500"}`}
          >
            <path
              d="M0.5 4L4.5 8L11.5 0.5"
              stroke="currentColor"
              strokeWidth="1.8"
            />
          </svg>
        </div>
      </div>
      <BasicButton
        onClick={() =>
          setJoinData((prev: TJoinData) => ({
            ...prev,
            password: debouncedPassword,
            passwordConfirm: debouncedConfirmPassword,
          }))
        }
        size="md"
        color="primary"
        disabled={
          !(
            state.비밀번호일치 &&
            state.대소문자있니 &&
            state.비밀번호일치 &&
            state.숫자있니 &&
            state.숫자있니 &&
            state.여덟스무글자 &&
            state.특수문자있니
          )
        }
      >
        완료
      </BasicButton>
    </>
  );
};

export default ThirdStep;
