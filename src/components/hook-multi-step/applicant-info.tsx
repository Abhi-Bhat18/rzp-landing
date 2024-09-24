"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ComboboxDemo } from "@/app/something/compbox";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const FormSchema = z.object({
  username: z.string(),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {}

  return (
    <div className="container mx-auto mb-10">
      <div className="grid grid-cols-2 gap-20 my-10">
        <ComboboxDemo />
        <div className="flex flex-col ">
          <Label htmlFor="" className="mb-2">
            why?
          </Label>
          <Input placeholder="shadcn" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-20">
        <div className="flex flex-col ">
          <Label htmlFor="" className="mb-2">
            why?
          </Label>
          <Input placeholder="shadcn" />
        </div>
        <div className="flex flex-col ">
          <Label htmlFor="" className="mb-2">
            why?
          </Label>
          <Input placeholder="shadcn" />
        </div>
      </div>
    </div>
  );
}
