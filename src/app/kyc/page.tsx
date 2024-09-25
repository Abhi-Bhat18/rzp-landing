"use client";
import Logo from "@/components/Logo";
import React, { useState, useEffect } from "react";
import { IconCircleChevronLeft } from "@tabler/icons-react";
import {
  IconBriefcase,
  IconFingerprint,
  IconBuildingBank,
  IconMapPin,
  IconFileStack,
} from "@tabler/icons-react";
import KycCard from "./KycCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const kycDocs = [
  {
    name: "Business Address",
    Icon: IconMapPin,
  },
  {
    name: "Bank Details",
    Icon: IconBuildingBank,
  },
  {
    name: "Identity Proof",
    Icon: IconFingerprint,
  },
  {
    name: "Business Policy",
    Icon: IconBriefcase,
  },
  {
    name: "Business Category",
    Icon: IconFileStack,
  },
];

const Kyc = () => {
  const [docStatus, setDocStatus] = useState(
    kycDocs.map((doc) => ({ ...doc, isTimeOver: false }))
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDocStatus((prevDocs) =>
        prevDocs.map((doc, index) =>
          index === currentIndex ? { ...doc, isTimeOver: true } : doc
        )
      );
      
      setCurrentIndex((prevIndex) => (prevIndex + 1));
    }, 2000);

    if (currentIndex > 4) {
      clearInterval(timer);
    }

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, [currentIndex]);

  return (
    <div className="bg-gray-100 h-screen w-screen py-10 relative flex justify-center items-center">
      <div className="absolute top-10 left-10">
        <Logo w={200} />
      </div>
      <div className="bg-white h-fit w-full max-w-2xl rounded-md shadow-sm p-10 space-y-10">
        <Link href={"/bundles"} className="flex space-x-2">
          <IconCircleChevronLeft /> <span>Back</span>
        </Link>
        <div className="space-y-5">
          <p className="text-2xl font-bold">Complete your KYC</p>
          <p>You can finish each section in any order</p>
        </div>
        <div className="space-y-5">
          <p className="text-xl">
            {currentIndex > 4 ? "COMPLETED" : "YET TO COMPLETE"}
          </p>
          <div className="grid grid-cols-2 gap-10">
            {docStatus.map((doc, index) => {
              return (
                <KycCard
                  key={index}
                  cardName={doc.name}
                  Icon={doc.Icon}
                  timeOver={doc.isTimeOver}
                />
              );
            })}
          </div>
        </div>
        <div className="w-full">
          <Button disabled={currentIndex <= 4} className="w-full">
            <Link className="w-full" href={"/complete"}>
              Submit KYC
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Kyc;
