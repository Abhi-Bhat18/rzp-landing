import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import React from "react";
import rzpLogo from "../../public/razorpay.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto p-5 items- justify-between border-b-[1px] border-slate-50 shadow-sm">
      <div className="flex justify-between items-center space-x-5">
        <div className="flex">
          <div>
            <Image src={rzpLogo} alt="Rzp logo" width={150} />
          </div>
          <Navbar />
        </div>
        <div className="flex space-x-5">
          <Button variant={'outline'}>
            <Link href={"/sign-up"}>Log In</Link>
          </Button>
          <Button>
            <Link href={"/sign-up"}>Sign up</Link>
          </Button>
        </div>
      </div>
      <div>
        <Hero />
      </div>
    </main>
  );
};

export default Home;
