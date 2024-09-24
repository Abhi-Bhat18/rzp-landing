import React from "react";

interface Props {
  currentStep: number;
}

const Stepper: React.FC<Props> = ({ currentStep }) => {
  return (
    <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
      <li
        className={`flex items-center ${
          currentStep + 1 >= 1 ? "text-blue-600 dark:text-blue-500" : ""
        }`}
      >
        <span
          className={`flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0 ${
            currentStep + 1 >= 1
              ? "border-blue-600 dark:border-blue-500"
              : "border-gray-500 dark:border-gray-400"
          }`}
        >
          1
        </span>
        Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
        <svg
          className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m7 9 4-4-4-4M1 9l4-4-4-4"
          />
        </svg>
      </li>
      <li
        className={`flex items-center ${
          currentStep + 1 >= 2 ? "text-blue-600 dark:text-blue-500" : ""
        }`}
      >
        <span
          className={`flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0 ${
            currentStep >= 2
              ? "border-blue-600 dark:border-blue-500"
              : "border-gray-500 dark:border-gray-400"
          }`}
        >
          2
        </span>
        Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
      </li>
    </ol>
  );
};

export default Stepper;
