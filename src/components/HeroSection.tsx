import { Button } from "./Button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-[100px] pt-16 pb-24 gap-10">
      <div className="max-w-[580px] flex flex-col gap-[35px]">
        <h1 className="text-4xl md:text-[60px] font-medium leading-[1.276em]">
          Navigating the digital landscape for success
        </h1>

        <p className="text-xl leading-[1.4em]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>

        <div>
          <Button variant="primary">Book a consultation</Button>
        </div>
      </div>

      <div className="relative w-full md:w-[550px] h-[550px] flex items-center justify-center">
        <Image
          src="/images/hero-illustration.svg"
          alt="Digital Marketing Illustration"
          width={550}
          height={550}
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
