/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";


const Hero = () => {
  return (
    <div
      className={`bg-[url('https://github.com/user-attachments/assets/0dd80881-af81-45fb-b529-28a10c02c4f9')] w-full h-[80vh] bg-no-repeat bg-cover`}
    >
      <div className="pt-40 text-4xl space-y-5 w-full">
        <div className="space-y-2">
          <p className="text-primary">Advance Payment Solutions </p>
          <p className=" text-gray-900">for India&apos;s finest disruptors</p>
        </div>
        <div className="">
          <Button>
            <Link href={'/sign-up'}>Sign up know</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
