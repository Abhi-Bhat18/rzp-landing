import Logo from "@/components/Logo";
import Link from "next/link";
import CustomBundle from "./CustomBundle";

export default function Bundles() {
  return (
    <div className="bg-gray-100 py-14 h-screen relative">
      <div className="absolute top-10 left-10">
        <Logo w={150} />
      </div>
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Choose the plan that’s right for you
        </h2>

        <p className="text-center text-gray-500 mt-4">
          The perfect plan for growing teams.
        </p>

        <p className="mt-4"></p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {/* Basic Plan */}
          <div className="p-8 bg-white rounded-xl shadow-md border border-gray-300 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Growth</h3>
              <p className="mt-4 text-gray-500">
                For small teams and startups.
              </p>
              {/* <p className="mt-8 text-4xl font-bold text-gray-800">$10</p>
            <p className="text-gray-500">per month</p> */}
              <ul className="mt-6 space-y-4">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-green-500">✓</span>
                  Payment Gateway/Payment App
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

            <button className="mt-8 w-full bg-blue-600 text-white py-2 rounded-lg">
              <Link className="w-full" href={"/kyc"}>Choose Growth</Link>
            </button>
          </div>

          {/* Most Popular Plan */}
          <div className="p-8 bg-blue-600 rounded-xl shadow-md text-white border-4 border-blue-600 transform scale-105 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold">Premium</h3>
              <p className="mt-4"> For large teams and organizations.</p>
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
            <button className="mt-8 w-full bg-white text-blue-600 py-2 rounded-lg">
              <Link className="w-full" href={"/kyc"}>Choose Premium</Link>
            </button>
            <div className="absolute top-0 right-0 bg-red-500 text-xs font-bold px-3 py-1 rounded-bl-lg">
              Most Popular
            </div>
          </div>

          {/* Essential Plan */}
          <div className="p-8 bg-white rounded-xl shadow-md border border-gray-300 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Essential</h3>
              <p className=" text-gray-500 mt-4">
                Simple pricing for your business.
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

            <button className="mt-8 w-full bg-blue-600 text-white py-2 rounded-lg">
              <Link className="w-full" href={"/kyc"}>Choose Essentials </Link>
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
