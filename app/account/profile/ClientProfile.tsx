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
import { Guest } from "@/lib/data/guests";
import { updateGuest } from "../lib/actions";
import { toast } from "react-toastify";

const schema = z.object({
  country: z.string().min(1, "Please select a country"),
  nationalId: z.string().min(5, "National ID must be at least 5 characters"),
});

export type GuestFormData = z.infer<typeof schema>;

type ClientProfileFormProp = {
  guest: Guest | null;
};

export default function ClientProfileForm({ guest }: ClientProfileFormProp) {
  const methods = useForm<GuestFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      country: guest?.nationality || "",
      nationalId: guest?.nationality_id || "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  async function onSubmit(data: GuestFormData) {
    try {
      await updateGuest(data);
      toast.success("Profile updated!");
    } catch {
      toast.error("Something went wrong");
    }
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
                  value={guest?.name}
                  id="fullName"
                  disabled
                  className="bg-primary-800 text-primary-800 border-none text-lg px-4 py-6"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email address</FieldLabel>
                <Input
                  value={guest?.email}
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
