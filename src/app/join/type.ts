import React from "react";

export interface TStepComponent {
  setJoinStep: React.Dispatch<React.SetStateAction<number>>;
}

export interface Step {
  title: JSX.Element;
  component: JSX.Element;
}

//JoinContext 타입
export interface TJoinData {
  terms?: {};
  email?: string;
  password?: string;
  passwordConfrim?: string;
}

// FirstStep 컴포넌트 타입
export type CheckState = Record<string, boolean> & { all: boolean };

// SecondStep 컴포넌트 타입
export interface SecondStepState {
  enteredEmail: string;
  isButtonDisabled: boolean;
  errorMessage: string;
}

export type SecondStepAction =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_ERROR"; payload: string }
  | { type: "CLEAR_ERROR" }
  | { type: "ENABLE_BUTTON" }
  | { type: "DISABLE_BUTTON" };

// ThirdStep 컴포넌트 타입
export interface ThirdStepState {
  enteredPassword: string;
  confirmPassword: string;
  isButtonDisable: boolean;
  비밀번호일치: boolean;
  대소문자있니: boolean;
  숫자있니: boolean;
  특수문자있니: boolean;
  여덟스무글자: boolean;
}

export type ThirdStepAction =
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_CONFIRM_PASSWORD"; payload: string }
  | { type: "SET_SAME_PASSWORD"; payload: boolean }
  | { type: "CHECK_PROPER_VALUE"; payload: boolean }
  | { type: "CHECK_INCLUDES_DIGITS"; payload: boolean }
  | { type: "CHECK_INCLUDSE_SPECIAL_CHARS"; payload: boolean }
  | { type: "CHECK_INCLUDES_BOTHCASES"; payload: boolean };
