type TitleProp = React.ComponentProps<"h2">;

export default function Title({ children, className, ...props }: TitleProp) {
  return (
    <h2
      className={`font-semibold text-2xl text-accent-400 mb-7 ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}
