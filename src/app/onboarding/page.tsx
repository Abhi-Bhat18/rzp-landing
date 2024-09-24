'use client'
import React, { useState } from "react";
import Stepper from "./stepper";
import { CircleChevronLeft } from "lucide-react";
import rzp from "../../../public/razorpay.svg";
import Image from "next/image";

import Step1 from "./Step1";
import Step2 from "./Step2";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ["Step 1", "Step 2", "Step 3"];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <Step1 nextStep={nextStep} />;
      case 1:
        return <Step2 prevStep={prevStep} />;
      default:
        return <Step1 nextStep={nextStep} />;
    }
  };

  return (
    <div className="w-full h-screen flex justify-center py-10 relative bg-gray-100">
      <div className="absolute top-10 left-20">
        <Image width={200} src={rzp} alt="Rzp logo" />
      </div>
      <div className="max-w-2xl w-full h-fit shadow-md p-5 space-y-5 bg-white rounded-lg">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer" onClick={prevStep}>
            {currentStep > 0 && <CircleChevronLeft />}
          </div>
          <div>
            <Stepper currentStep={currentStep} />
          </div>
        </div>
        <div>{renderStepContent()}</div>
      </div>
    </div>
  );
};

export default Onboarding;
