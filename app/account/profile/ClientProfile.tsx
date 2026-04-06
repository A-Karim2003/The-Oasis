"use client";

import Title from "@/app/_components/Title";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SelectCountry from "../_components/SelectCountry";

const schema = z.object({
  country: z.string().min(1, "Please select a country"),
  nationalId: z.string().min(5, "National ID must be at least 5 characters"),
});

export type FormData = z.infer<typeof schema>;

export default function ClientProfileForm() {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      country: "",
      nationalId: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <div>
      <Title>Update your guest profile</Title>
      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <Card className="bg-primary-900 text-primary-200 rounded-none py-8 px-12 text-lg">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="fullName">Full name</FieldLabel>
                <Input
                  value="Guest"
                  id="fullName"
                  disabled
                  className="bg-primary-800 text-primary-800 border-none text-lg px-4 py-6"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email address</FieldLabel>
                <Input
                  value="guest@gmail.com"
                  id="email"
                  type="email"
                  disabled
                  className="bg-primary-800 text-primary-800 border-none text-lg px-4 py-6"
                />
              </Field>

              <SelectCountry />

              <Field>
                <FieldLabel htmlFor="nationalId">National ID number</FieldLabel>
                <Input
                  id="nationalId"
                  {...register("nationalId")}
                  className="bg-primary-200 text-primary-900 border-none text-lg px-4 py-6"
                />
                {errors.nationalId && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.nationalId.message}
                  </p>
                )}
              </Field>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-6 py-6 text-lg"
                >
                  Update profile
                </Button>
              </div>
            </FieldGroup>
          </form>
        </FormProvider>
      </Card>
    </div>
  );
}
