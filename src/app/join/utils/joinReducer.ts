type SecondStepState = {
  enteredEmail: string;
  isButtonDisabled: boolean;
  errorMessage: string;
};

type SecondStepAction =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_ERROR"; payload: string }
  | { type: "CLEAR_ERROR" }
  | { type: "ENABLE_BUTTON" }
  | { type: "DISABLE_BUTTON" };

export function emailReducer(
  state: SecondStepState,
  action: SecondStepAction,
): SecondStepState {
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
type ThirdStepState = {
  enteredPassword: string;
  confirmPassword: string;
  isButtonDisable: boolean;
  비밀번호일치: boolean;
  대소문자있니: boolean;
  숫자있니: boolean;
  특수문자있니: boolean;
  여덟스무글자: boolean;
};

type ThirdStepAction =
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_CONFIRM_PASSWORD"; payload: string }
  | { type: "SET_SAME_PASSWORD"; payload: boolean }
  | { type: "CHECK_PROPER_VALUE"; payload: boolean }
  | { type: "CHECK_INCLUDES_DIGITS"; payload: boolean }
  | { type: "CHECK_INCLUDSE_SPECIAL_CHARS"; payload: boolean }
  | { type: "CHECK_INCLUDES_BOTHCASES"; payload: boolean };

export const passwordReducer = (
  state: ThirdStepState,
  action: ThirdStepAction,
): ThirdStepState => {
  switch (action.type) {
    case "SET_PASSWORD":
      return { ...state, enteredPassword: action.payload };
    case "SET_CONFIRM_PASSWORD":
      return { ...state, confirmPassword: action.payload };
    case "SET_SAME_PASSWORD":
      return { ...state, 비밀번호일치: action.payload };
    case "CHECK_PROPER_VALUE":
      return { ...state, 여덟스무글자: action.payload };
    case "CHECK_INCLUDES_DIGITS":
      return { ...state, 숫자있니: action.payload };
    case "CHECK_INCLUDSE_SPECIAL_CHARS":
      return { ...state, 특수문자있니: action.payload };
    case "CHECK_INCLUDES_BOTHCASES":
      return { ...state, 대소문자있니: action.payload };
    default:
      return state;
  }
};
