import { Field, FieldLabel } from "@/components/ui/field";
import { useFormContext } from "react-hook-form";
import { FormData } from "../profile/ClientProfile";
import { getCountries } from "@/lib/data/account";
import { use } from "react";

const countriesPromise = getCountries();

export default function SelectCountry() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  const countries = use(countriesPromise);

  return (
    <Field>
      <FieldLabel
        htmlFor="country"
        className="flex items-center justify-between"
      >
        <span>Where are you from?</span>
        <span>flag</span>
      </FieldLabel>
      <select
        id="country"
        {...register("country")}
        className="w-full bg-primary-800 border border-primary-700 text-lg px-4 py-3 rounded-sm"
      >
        <option value="">Select country…</option>
        {countries.map((country) => (
          <option value={country.name} key={country.name}>
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
