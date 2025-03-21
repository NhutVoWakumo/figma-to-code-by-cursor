import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ServiceCardProps = {
  title: string;
  subtitle?: string;
  color?: "light" | "green" | "dark";
  className?: string;
  children?: ReactNode;
};

export function ServiceCard({
  title,
  subtitle,
  color = "light",
  className = "",
  children,
}: ServiceCardProps) {
  const colorClasses = {
    light: "bg-lightGray text-black",
    green: "bg-green text-black",
    dark: "bg-darkGreen text-white",
  };

  return (
    <div
      className={twMerge(
        "p-12 rounded-card shadow-card flex justify-between",
        colorClasses[color],
        className
      )}
    >
      <div className="flex flex-col justify-between">
        <div className="mb-24">
          <div className="bg-green px-2 py-1 rounded-md inline-block mb-1">
            <h3 className="text-3xl font-medium">{title}</h3>
          </div>
          {subtitle && (
            <div className="bg-green px-2 py-1 rounded-md inline-block">
              <h3 className="text-3xl font-medium">{subtitle}</h3>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-green flex items-center justify-center">
            <span>→</span>
          </div>
          <span className="text-xl">Learn more</span>
        </div>
      </div>

      <div className="w-[250px] h-[250px] flex items-center justify-center">
        {children || <div className="text-gray-400">Service image</div>}
      </div>
    </div>
  );
}
