import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { IconBrandGoogle } from "@tabler/icons-react";

import React from "react";
import { ComboboxDemo } from "@/components/ComboBox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/labe";

const countries = [
  {
    value: "India",
    label: "India",
  },
  {
    value: "Singapore",
    label: "Singapore",
  },
];

const page = () => {
  return (
    <div className="bg-[url('https://github.com/user-attachments/assets/23db32e9-13a9-4685-95ed-1640f7d10c18')] w-screen h-screen flex justify-end items-center p-5 relative">
      <div className="absolute top-10 left-10">
        <Logo w={100} />
      </div>
      <div className="absolute bottom-10 left-10">
        <p className="text-white text-2xl w-[600px]">
          Join 8 Million Businesses that Trust Razorpay to Supercharge their
          Business
        </p>
      </div>
      <div className="bg-white space-y-5 w-[450px] flex justify-center items-center p-10 h-full rounded-xl shadow-sm">
        <div className="space-y-5">
          <Logo w={100} />
          <div className="space-y-5">
            <p>Welcome to Razorpay Payments</p>
            <p className="text-xl font-bold">
              Get started with your email and contact
            </p>
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input type="text" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="John.doe@gmail.com" />
            </div>
            <div className="space-y-2">
              <Label>Contact</Label>
              <Input type="text" placeholder="9113021966" />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-xs">Country</p>
            <ComboboxDemo name="country" items={countries} />
          </div>
          <div className="w-full">
            <Button className="w-full cursor-pointer">
              <Link className="w-full" href={"/onboarding"}>Continue</Link>
            </Button>
          </div>
          <div>
            <p className="text-center">OR</p>
          </div>
          <div className="cursor-pointer">
            <div className="flex justify-center border p-2 rounded-md space-x-1 items-center">
              <IconBrandGoogle />
              <p className="text-sm">Login with Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
