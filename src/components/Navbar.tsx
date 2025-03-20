import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-[100px]">
      <div className="flex items-center py-2.5">
        <div className="flex items-center">
          <Image
            src="/icons/logo-icon.svg"
            alt="Positivus Logo Icon"
            width={28}
            height={28}
            className="mr-2"
          />
          <Image
            src="/icons/logo-text.svg"
            alt="Positivus"
            width={125}
            height={28}
          />
        </div>
      </div>

      <div className="flex items-center gap-10">
        <Link
          href="#"
          className={cn(
            "text-black text-xl font-normal font-space-grotesk leading-[1.4em]"
          )}
        >
          About us
        </Link>
        <Link
          href="#"
          className={cn(
            "text-black text-xl font-normal font-space-grotesk leading-[1.4em]"
          )}
        >
          Services
        </Link>
        <Link
          href="#"
          className={cn(
            "text-black text-xl font-normal font-space-grotesk leading-[1.4em]"
          )}
        >
          Use Cases
        </Link>
        <Link
          href="#"
          className={cn(
            "text-black text-xl font-normal font-space-grotesk leading-[1.4em]"
          )}
        >
          Pricing
        </Link>
        <Link
          href="#"
          className={cn(
            "text-black text-xl font-normal font-space-grotesk leading-[1.4em]"
          )}
        >
          Blog
        </Link>
        <Link
          href="#"
          className={cn(
            "border border-[#191A23] rounded-[14px] py-5 px-[35px]",
            "text-black text-xl font-normal font-space-grotesk leading-[1.4em] text-center"
          )}
        >
          Request a quote
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
