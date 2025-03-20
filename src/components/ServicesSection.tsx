import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services: {
    title: string;
    subtitle: string;
    variant: "light" | "dark" | "green";
  }[] = [
    { title: "Search engine", subtitle: "optimization", variant: "light" },
    { title: "Pay-per-click", subtitle: "advertising", variant: "green" },
    { title: "Social Media", subtitle: "Marketing", variant: "dark" },
    { title: "Email", subtitle: "Marketing", variant: "light" },
    { title: "Content", subtitle: "Creation", variant: "green" },
    { title: "Analytics and", subtitle: "Tracking", variant: "dark" },
  ];

  return (
    <section className="py-24">
      <SectionHeading
        title="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />

      <div className="px-24 grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-10">
          <ServiceCard {...services[0]} />
          <ServiceCard {...services[2]} />
          <ServiceCard {...services[4]} />
        </div>
        <div className="flex flex-col gap-10">
          <ServiceCard {...services[1]} />
          <ServiceCard {...services[3]} />
          <ServiceCard {...services[5]} />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
