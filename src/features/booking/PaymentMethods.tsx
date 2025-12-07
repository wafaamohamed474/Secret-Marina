"use client";
import * as React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import visa from "@/assets/images/Visa.svg";
import paypal from "@/assets/images/PayPal.svg";
import masterCard from "@/assets/images/Mastercard.svg";
import applePay from "@/assets/images/ApplePay.svg";
import Image from "next/image";

interface Method {
  id: string;
  label: string;
  img: any; // imported SVG
}

const methods: Method[] = [
  { id: "visa", label: "Visa", img: visa },
  { id: "mastercard", label: "Master Card", img: masterCard },
  { id: "paypal", label: "PayPal", img: paypal },
  { id: "apple_pay", label: "Apple Pay", img: applePay },
];

interface PaymentMethodsProps {
  onSelect: (method: string) => void;
}

export default function PaymentMethods({ onSelect }: PaymentMethodsProps) {
  const [selected, setSelected] = React.useState<string>(methods[0].id);

  const handleChange = (value: string) => {
    setSelected(value);
    onSelect(value);
  };

  return (
    <RadioGroup
      value={selected}
      onValueChange={handleChange}
      className="grid grid-cols-1 md:grid-cols-2 py-5"
    >
      {methods.map((method) => (
        <div
          key={method.id}
          className={`
            flex items-center justify-between rounded-lg p-2 border cursor-pointer
            ${
              selected === method.id
                ? "border-(--primary)"
                : "border-(--input-border)"
            }
          `}
        >
          <div className="flex gap-3">
            <Image
              src={method.img}
              alt={method.label}
              className="object-contain w-10 h-10"
            />

            <Label htmlFor={method.id} className="text-xs font-semibold">
              {method.label}
            </Label>
          </div>

          <RadioGroupItem
            value={method.id}
            id={method.id}
            className="cursor-pointer "
          />
        </div>
      ))}
    </RadioGroup>
  );
}
