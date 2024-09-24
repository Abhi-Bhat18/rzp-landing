import React from "react";
import rzpLogo from "../../public/razorpay.svg";
import Image from "next/image";
import Link from "next/link";

interface Props {
  w: number;
}

const Logo: React.FC<Props> = ({ w }) => {
  return (
    <Link href={'/'}>
      <Image src={rzpLogo} width={w} alt="Rzp logo" />
    </Link>
  );
};

export default Logo;
