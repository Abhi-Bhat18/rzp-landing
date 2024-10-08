import { STEPPER_FORM_KEYS } from "./hookstepper";

export type StepperFormKeysType =
  (typeof STEPPER_FORM_KEYS)[keyof typeof STEPPER_FORM_KEYS][number];

export type StepperFormValues = {
  [FieldName in StepperFormKeysType]: FieldName extends
    | "annualIncome"
    | "loanAmount"
    | "repaymentTerms"
    | "creditScore"
    ? number
    : string;
};
