"use client";

import Title from "@/app/_components/Title";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import type { Cabin as CabinType } from "@/app/cabins/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { enGB } from "react-day-picker/locale";

type CabinReservationProps = {
  cabin: CabinType;
  bookedDates: Date[];
};

export default function CabinReservation({
  cabin,
  bookedDates,
}: CabinReservationProps) {
  console.log(bookedDates);

  const [range, setRange] = useState<DateRange | undefined>();
  const [minBookingLength, maxBookingLength] = [1, 23];

  return (
    <div className="mt-15 h-full">
      <Title className="text-5xl text-center mb-12">
        Reserve {cabin.name} today. Pay on arrival.
      </Title>

      <div className="grid grid-cols-2 max-[900px]:grid-cols-1 border border-primary-800">
        {/* Left — Calendar + price bar */}
        <div className="flex flex-col">
          <Calendar
            locale={enGB}
            mode="range"
            disabled={{ before: new Date() }}
            min={minBookingLength}
            max={maxBookingLength}
            endMonth={
              new Date(new Date().getFullYear() + 2, new Date().getMonth())
            }
            numberOfMonths={2}
            selected={range}
            onSelect={setRange}
            className="bg-primary-950 text-white p-4 w-full flex-1"
          />
          <div className="bg-accent-500 text-primary-900 p-4 flex items-center h-20">
            <span className="text-3xl font-bold">
              ${cabin.price - cabin.discount}
            </span>
            <span className="text-sm ml-1">/night</span>
          </div>
        </div>

        {/* Right — Form */}
        <div className="bg-primary-900 flex flex-col">
          <div className="bg-primary-950 flex items-center justify-around gap-3 p-4">
            <span className="text-primary-300 text-sm">Logged in as</span>
            <div className="flex items-center gap-4">
              <Avatar className="w-8 h-8">
                <AvatarImage src="" />
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
              <span className="text-primary-100 font-semibold">Username</span>
            </div>
          </div>

          <div className="p-8 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-primary-200 text-lg">
                How many guests?
              </label>
              <select className="bg-primary-800 text-primary-100 p-3 w-full border border-primary-700">
                <option value="">Select number of guests...</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-primary-200 text-lg">
                Anything we should know about your stay?
              </label>
              <textarea
                className="bg-primary-800 text-primary-100 p-3 border border-primary-700 resize-none h-32"
                placeholder="Any pets, allergies, special requirements, etc.?"
              />
            </div>

            <div className="flex justify-end mt-auto">
              <span className="text-primary-400 italic">
                Start by selecting dates
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
