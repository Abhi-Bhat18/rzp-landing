"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { updateField } from "@/lib/features/formSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

interface Props {
  items: { value: string; label: string }[];
  name: string;
}

export const ComboboxDemo: React.FC<Props> = ({ items, name }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.onboard);

  const handleSelect = (currentValue: string) => {
    setValue(currentValue === value ? "" : currentValue);
    dispatch(
      updateField({
        field: name,
        value: currentValue === value ? "" : currentValue,
      })
    );
    setOpen(false);
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-full"
        >
          {value
            ? items.find((industry) => industry.value === value)?.label
            : "Select ..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-full">
        <Command>
          <CommandInput placeholder="Search ..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {items.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={handleSelect}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
