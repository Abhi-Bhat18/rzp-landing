import Logo from '@/components/Logo';
import React from 'react'
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Complete = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center py-10 relative bg-gray-100">
      <div className="absolute top-10 left-20">
        <Logo w={150} />
      </div>
      <div className="max-w-xl w-full h-fit shadow-md p-10 space-y-5 bg-white rounded-lg">
        <div>
          <Image
            src={
              "https://github.com/user-attachments/assets/13be169b-b675-4b5f-872d-dda4328f4060"
            }
            alt='thank you'
            width={500}
            height={500}
            className='rounded-lg'
          />
        </div>
        <p className="text-2xl">Thank you for submitting your basic details</p>
        <p>
          As a next step, complete your KYC to activate payment for your account
        </p>
        <div className='w-full'>
          <Button className='w-full'>Continue to Dashboard</Button>
        </div>
      </div>
    </div>
  );
}

export default Complete;