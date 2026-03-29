"use client";

import Title from "@/app/_components/Title";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  country: z.string().min(1, "Please select a country"),
  nationalId: z.string().min(5, "National ID must be at least 5 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ProfilePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      country: "",
      nationalId: "",
    },
  });

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <div>
      <Title>Update your guest profile</Title>

      <Card className="bg-primary-900 text-primary-200 rounded-none py-8 px-12 text-lg!">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* Full Name (disabled) */}
            <Field>
              <FieldLabel className="text-lg" htmlFor="fullName">
                Full name
              </FieldLabel>
              <Input
                value="Guest"
                id="fullName"
                name="fullName"
                disabled
                className="bg-primary-800 text-primary-800 border-none text-lg! px-4 py-6"
              />
            </Field>

            {/* Email (disabled) */}
            <Field>
              <FieldLabel className="text-lg" htmlFor="email">
                Email address
              </FieldLabel>
              <Input
                value="guest@gmail.com"
                id="email"
                type="email"
                name="email"
                disabled
                className="bg-primary-800 text-primary-800 border-none text-lg! px-4 py-6"
              />
            </Field>

            {/* Country */}
            <Field>
              <FieldLabel className="text-lg" htmlFor="country">
                Where are you from?
              </FieldLabel>
              <select
                id="country"
                {...register("country")}
                className="w-full bg-primary-800 border border-primary-700 text-lg! px-4 py-3 rounded-sm"
              >
                <option value="">Select country…</option>
              </select>
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.country.message}
                </p>
              )}
            </Field>

            {/* National ID */}
            <Field>
              <FieldLabel className="text-lg" htmlFor="nationalId">
                National ID number
              </FieldLabel>
              <Input
                id="nationalId"
                {...register("nationalId")}
                className="bg-primary-200 text-primary-900 border-none text-lg! px-4 py-6"
              />
              {errors.nationalId && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nationalId.message}
                </p>
              )}
            </Field>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-6 py-6 text-lg!"
              >
                Update profile
              </Button>
            </div>
          </FieldGroup>
        </form>
      </Card>
    </div>
  );
}
