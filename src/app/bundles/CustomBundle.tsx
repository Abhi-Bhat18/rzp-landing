import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/labe";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const bundles = [
  "Payment Gateway",
  "Razorpay X",
  "Optimizer",
  "Engage HQ + Billme",
  "POS",
  "Turbo UPI",
];

const CustomBundle = () => {
  return (
    <Dialog>
      <DialogTrigger className="text-blue-600">
        Not satisfied ? Create your custom bundle{" "}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="space-y-5">
            {" "}
            Create your custom bundle !
          </DialogTitle>
          {bundles.map((bundle, index) => {
            return <Bundles key={index} bundleName={bundle} />;
          })}
        </DialogHeader>
        <Button>
          <Link href={"/kyc"}>Submit</Link>
        </Button>
      </DialogContent>
    </Dialog>
  );
};

interface BundleProp {
  bundleName: string;
}

const Bundles: React.FC<BundleProp> = ({ bundleName }) => {
  return (
    <div className="space-x-5 flex items-center px-2 py-5 border-b-[1px] border-blue-100">
      <Checkbox />
      <Label>{bundleName}</Label>
    </div>
  );
};

export default CustomBundle;
