import React from "react";
import YesOrNo from "./YesOrNo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  prevStep: () => void;
}

const Step2: React.FC<Props> = ({ prevStep }) => {
  return (
    <div className="space-y-10">
      <div className="space-y-5">
        <p className="text-lg w-full">Do you make payouts to vendors?</p>
        <div>
          <YesOrNo />
        </div>
      </div>
      <div className="space-y-5">
        <p className="text-lg w-full">
          Do you receive recurring payments from vendors or retailers?
        </p>
        <div>
          <YesOrNo />
        </div>
      </div>
      <div className="space-y-5">
        <p className="text-lg w-full">
          Do you run marketing campaigns to drive repeat customers?
        </p>
        <div>
          <YesOrNo />
        </div>
      </div>
      <div className="space-y-5">
        <p className="text-lg w-full">
          Interested in setting up a wallet for customers to store refunds and
          boost retention?
        </p>
        <div>
          <YesOrNo />
        </div>
      </div>
      <div className="space-y-5">
        <p className="text-lg w-full">
          Would you like to automate your monthly payroll?
        </p>
        <div>
          <YesOrNo />
        </div>
      </div>
      <div className="flex justify-end">
        <Button>
          <Link href={'/bundles'}>Submit</Link>
        </Button>
      </div>
    </div>
  );
};

export default Step2;
