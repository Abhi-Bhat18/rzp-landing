import React from "react";
import YesOrNo from "./YesOrNo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";
interface Props {
  prevStep?: () => void;
}

const eCommerceQuestions = [
  "Do you make payouts to vendors?",
  "Do you receive recurring payments from vendors or retailers?",
  "Do you run marketing campaigns to drive repeat customers?",
  "Interested in setting up a wallet for customers to store refunds and boost retention?",
  "Do you operate an offline business?",
  "Would you like to automate your monthly payroll?",
];

const lendingQuestions = [
  "Do you have a strong refund policy?",
  "Do you receive recurring payments from vendors or retailers?",
  "Do you run marketing campaigns to drive repeat customers?",
  "Interested in setting up a wallet for customers to store refunds and boost retention?",
  "Do you operate an offline business?",
  "Would you like to automate your monthly payroll?",
];

const Step2: React.FC<Props> = ({ }) => {

    const form = useAppSelector(state => state.onboard);

  return (
    <div className="space-y-8">
      {form.industry === "e commerce" ? (
        <>
          {eCommerceQuestions.map((ele, ind) => (
            <div className="space-y-5" key={ind}>
              <p className="text-lg w-full">{ele}</p>
              <div>
                <YesOrNo />
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {lendingQuestions.map((ele, ind) => (
            <div className="space-y-5" key={ind}>
              <p className="text-lg w-full">{ele}</p>
              <div>
                <YesOrNo />
              </div>
            </div>
          ))}
        </>
      )}

      <div className="flex justify-end">
        <Button>
          <Link href={"/bundles"}>Submit</Link>
        </Button>
      </div>
    </div>
  );
};

export default Step2;
