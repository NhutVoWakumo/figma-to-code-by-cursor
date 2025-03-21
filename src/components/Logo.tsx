import Image from "next/image";
import { twMerge } from "tailwind-merge";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  return (
    <div className={twMerge("flex items-center", className)}>
      <div className="flex items-center">
        <div className="mr-2">
          <Image
            src="/images/logo-icon.svg"
            alt="Positivus Logo Icon"
            width={40}
            height={40}
          />
        </div>
        <Image
          src="/images/logo-text.svg"
          alt="Positivus"
          width={100}
          height={28}
          className={variant === "dark" ? "" : "filter invert"}
        />
      </div>
    </div>
  );
}
