import Image from "next/image";

const LogoBanner = () => {
  const logos = [
    {
      src: "/images/logos/company-logo-1.svg",
      alt: "Company Logo 1",
      width: 120,
      height: 40,
    },
    {
      src: "/images/logos/company-logo-2.svg",
      alt: "Company Logo 2",
      width: 120,
      height: 40,
    },
    {
      src: "/images/logos/company-logo-3.svg",
      alt: "Company Logo 3",
      width: 120,
      height: 40,
    },
    {
      src: "/images/logos/company-logo-4.svg",
      alt: "Company Logo 4",
      width: 120,
      height: 40,
    },
    {
      src: "/images/logos/company-logo-5.svg",
      alt: "Company Logo 5",
      width: 120,
      height: 40,
    },
    {
      src: "/images/logos/company-logo-6.svg",
      alt: "Company Logo 6",
      width: 120,
      height: 40,
    },
  ];

  return (
    <div className="flex justify-between items-center py-10 px-[100px]">
      {logos.map((logo, index) => (
        <div key={index} className="flex items-center justify-center">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
          />
        </div>
      ))}
    </div>
  );
};

export default LogoBanner;
