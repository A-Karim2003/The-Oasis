import Title from "@/app/_components/Title";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function ProfilePage() {
  return (
    <div>
      <Title>Update your guest profile</Title>
      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <Card className="bg-primary-900 text-primary-200 rounded-none py-8 px-12 text-lg">
        <FieldGroup>
          <Field>
            <FieldLabel
              htmlFor="fullName"
              className="text-lg"
              className="text-lg"
            >
              Full name
            </FieldLabel>
            <Input
              id="fullName"
              name="fullName"
              className="bg-primary-800 border-none h-12"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="email" className="text-lg">
              Email address
            </FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              disabled
              className="bg-primary-800 border-none h-12"
            />
          </Field>

          <Field>
            <div className="flex items-center justify-between mb-2">
              <FieldLabel htmlFor="country" className="text-lg">
                Where are you from?
              </FieldLabel>
            </div>
            <select
              id="country"
              name="country"
              className="w-full bg-primary-800 border border-primary-700 text-primary-300 rounded-sm h-12 px-4"
            >
              <option value="">Select country…</option>
            </select>
          </Field>

          <Field>
            <FieldLabel htmlFor="nationalID" className="text-lg">
              National ID number
            </FieldLabel>
            <Input
              id="nationalID"
              name="nationalID"
              className="bg-primary-200 text-primary-900 border-none h-12"
            />
          </Field>

          <div className="flex justify-end">
            <Button className="bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-6">
              Update profile
            </Button>
          </div>
        </FieldGroup>
      </Card>
    </div>
  );
}
