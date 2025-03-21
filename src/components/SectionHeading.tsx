import { twMerge } from "tailwind-merge";

type SectionHeadingProps = {
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={twMerge("flex flex-col gap-10 px-[100px]", className)}>
      <div className="inline-block bg-green px-2 py-1 rounded-md">
        <h2 className="text-4xl font-medium text-black">{title}</h2>
      </div>
      <p className="text-lg max-w-[800px]">{description}</p>
    </div>
  );
}
