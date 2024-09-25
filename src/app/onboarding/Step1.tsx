"use client";
import React, { useState } from "react";
import { ComboboxDemo } from "@/components/ComboBox";
import { RzpUsage } from "./RzpUsage";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const industries = [
  { value: "e commerce", label: "E-commerce" },
  { value: "investments", label: "Investments" },
  { value: "lending", label: "Lending" },
  { value: "Insurance", label: "Insurance" },
  { value: "Gaming", label: "Gaming" },
  { value: "Travel", label: "Travel" },
];

const paymentGateways = [
  { value: "PayU", label: "PayU" },
  { value: "PayU Instant (beta)", label: "PayU Instant (beta)" },
  { value: "Ingenico", label: "Ingenico" },
  { value: "Pine Labs", label: "Pine Labs" },
  { value: "Paytm S2S", label: "Paytm S2S" },
  { value: "Paytm Instant (beta)", label: "Paytm Instant (beta)" },
  { value: "Cashfree", label: "Cashfree" },
  { value: "Cashfree Instant (beta)", label: "Cashfree Instant (beta)" },
  { value: "BillDesk", label: "BillDesk" },
  { value: "CCAvenue", label: "CCAvenue" },
  { value: "Easebuzz", label: "Easebuzz" },
  { value: "Bank Gateways", label: "Bank Gateways" },
];

interface Props { 
  nextStep: () => void
}
const Setp1 : React.FC<Props> = ({ nextStep  }) => {
  const [hasPg, setHasPg] = useState<string | null>(null); // State to track the selected radio option

  // Handle changes in the radio group
  const handlePgChange = (value: string) => {
    setHasPg(value);

  };

  return (
    <div className="space-y-10">
      <div className="space-y-5">
        <p className="text-xl w-full">
          What kind of business are you involved in?
        </p>
        <ComboboxDemo name="industry" items={industries} />
      </div>

      <div className="space-y-5">
        <p className="text-xl w-full">Where do you plan to use Razorpay?</p>
        <RzpUsage />
      </div>

      <div className="space-y-5">
        <p className="text-xl w-full">
          Are you currently using any other payment gateway?
        </p>
        <RadioGroup
          onValueChange={handlePgChange} // Updated to handle radio selection
          className="flex space-x-5"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Yes" id="yes-option" />
            <Label htmlFor="yes-option">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="No" id="no-option" />
            <Label htmlFor="no-option">No</Label>
          </div>
        </RadioGroup>
      </div>
      {hasPg === "Yes" && (
        <div className="space-y-5">
          <p className="text-xl w-full">Which ones are you using?</p>
          <ComboboxDemo name="pgs" items={paymentGateways} />
        </div>
      )}

      <div className="w-full flex justify-end">
        <Button onClick={nextStep}>Next</Button>
      </div>
    </div>
  );
};

export default Setp1;
