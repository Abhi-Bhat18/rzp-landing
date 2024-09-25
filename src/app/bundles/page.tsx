'use client'
import Logo from "@/components/Logo";
import Link from "next/link";
import CustomBundle from "./CustomBundle";
import { useRouter } from "next/navigation";

export default function Bundles() {
  const router = useRouter();

  const handleClick = () => { 
    router.push('/kyc');
  }

  return (
    <div className="bg-gray-100 py-14 h-screen relative">
      <div className="absolute top-10 left-10">
        <Logo w={150} />
      </div>
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-xl font-bold text-center text-gray-800">
          Based on what we see our existing merchants use,
        </h2>
        <p className="text-center text-gray-500 mt-4">
          we believe this bundle is the best fit for you.
        </p>

        <p className="mt-4"></p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {/* Basic Plan */}
          <div className="p-8 bg-white rounded-xl shadow-md border border-gray-300 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Growth Bundle
              </h3>
              <p className="mt-4 text-gray-500">
                Key products to fuel your business growth.
              </p>
              {/* <p className="mt-8 text-4xl font-bold text-gray-800">$10</p>
            <p className="text-gray-500">per month</p> */}
              <ul className="mt-6 space-y-4">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-green-500">✓</span>
                  Payment Gateway
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-green-500">✓</span>
                  Razorpay X
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-green-500">✓</span>
                  POS
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-green-500">✓</span>
                  Billme
                </li>
              </ul>
            </div>

            <button onClick={handleClick} className="mt-8 w-full bg-[#011162] text-white py-2 rounded-lg">
                Choose Growth
            </button>
          </div>

          {/* Most Popular Plan */}
          <div className="p-8 b rounded-xl shadow-md text-white border-4 bg-[#011162] border-[#011162]transform scale-105 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold">Premium Bundle</h3>
              <p className="mt-4">
                Comprehensive solutions for maximum business success.
              </p>
            </div>
            {/* <p className="mt-8 text-4xl font-bold">$30</p>
            <p>per month</p> */}
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Payment Gateway
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Razorpay X
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Optimizer
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Engage HQ + Billme
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                POS
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Turbo UPI
              </li>
            </ul>
            <button onClick={handleClick} className="mt-8 w-full bg-white text-blue-600 py-2 rounded-lg">
                Choose Premium
            </button>
            <div className="absolute top-0 right-0 bg-red-500 text-xs font-bold px-3 py-1 rounded-bl-lg">
              Most Popular
            </div>
          </div>

          {/* Essential Plan */}
          <div className="p-8 bg-white rounded-xl shadow-md border border-gray-300 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Essential Bundle
              </h3>
              <p className=" text-gray-500 mt-4">
                Core products for essential business operations.
              </p>
              {/* <p className="mt-8 text-4xl font-bold text-gray-800">$50</p>
            <p className="text-gray-500">per month</p> */}
              <ul className="space-y-4 mt-6">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-green-500">✓</span>
                  Payment Gateway
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-green-500">✓</span>
                  POS
                </li>
              </ul>
            </div>

            <button onClick={handleClick} className="mt-8 w-full bg-[#011162] text-white py-2 rounded-lg">
                Choose Essentials{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full py-10 flex justify-center">
        <CustomBundle />
      </div>
    </div>
  );
}
