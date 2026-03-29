import { Button } from "@/components/ui/button";

type ButtonProp = React.ComponentProps<"button">;

export default function PrimaryBtn({
  children,
  className,
  ...props
}: ButtonProp) {
  return (
    <Button
      type="submit"
      className={`bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-6 py-6 text-lg! ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
