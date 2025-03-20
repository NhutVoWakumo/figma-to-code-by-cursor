import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <div className="flex justify-between items-center py-16 px-[100px] gap-[206px]">
      <div className="flex flex-col gap-[35px]">
        <h1 className="text-6xl font-medium font-space-grotesk leading-[1.28em] text-black max-w-[600px]">
          Navigating the digital landscape for success
        </h1>
        <p className="text-xl font-normal font-space-grotesk leading-[1.4em] text-black max-w-[600px]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Link
          href="#"
          className={cn(
            "bg-[#191A23] rounded-[14px] py-5 px-[35px] w-fit",
            "text-white text-xl font-normal font-space-grotesk leading-[1.4em] text-center"
          )}
        >
          Book a consultation
        </Link>
      </div>

      <div className="relative">
        <Image
          src="/images/hero/hero-illustration.svg"
          alt="Hero Illustration"
          width={600}
          height={600}
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
