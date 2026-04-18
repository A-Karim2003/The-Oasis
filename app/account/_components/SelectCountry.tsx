"use client";

import { Field, FieldLabel } from "@/components/ui/field";
import { useFormContext } from "react-hook-form";
import { GuestFormData } from "../profile/ClientProfile";
import { getCountries } from "@/lib/data/account";
import { use } from "react";
import Image from "next/image";
import { Guest } from "@/lib/data/guests";

type SelectCountryProp = { guest: Guest | null };

const countriesPromise = getCountries();

export default function SelectCountry({ guest }: SelectCountryProp) {
  const {
    register,
    formState: { errors },
  } = useFormContext<GuestFormData>();

  const countries = use(countriesPromise);

  return (
    <Field>
      <FieldLabel
        htmlFor="country"
        className="flex items-center justify-between"
      >
        <span>Where are you from?</span>
        <span>
          <Image
            src={guest?.country_flag || ""}
            width={35}
            height={35}
            alt="Country flag"
          />
        </span>
      </FieldLabel>
      <select
        id="country"
        {...register("country")}
        className="w-full bg-primary-800 border border-primary-700 text-lg px-4 py-3 rounded-sm"
      >
        <option value="">Select country…</option>
        {countries.map((country) => (
          <option key={country.name} value={`${country.name}%${country.flag}`}>
            {country.name}
          </option>
        ))}
      </select>
      {errors.country && (
        <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
      )}
    </Field>
  );
}
