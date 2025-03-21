import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section className="my-24">
      <SectionHeading
        title="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        className="mb-16"
      />

      <div className="px-[100px] flex flex-col gap-10">
        <div className="flex gap-10">
          <ServiceCard
            title="Search engine"
            subtitle="optimization"
            color="light"
            className="flex-1"
          />
          <ServiceCard
            title="Pay-per-click"
            subtitle="advertising"
            color="green"
            className="flex-1"
          />
        </div>

        <div className="flex gap-10">
          <ServiceCard
            title="Social Media"
            subtitle="Marketing"
            color="dark"
            className="flex-1"
          />
          <ServiceCard
            title="Email"
            subtitle="Marketing"
            color="light"
            className="flex-1"
          />
        </div>

        <div className="flex gap-10">
          <ServiceCard
            title="Content"
            subtitle="Creation"
            color="green"
            className="flex-1"
          />
          <ServiceCard
            title="Analytics and"
            subtitle="Tracking"
            color="dark"
            className="flex-1"
          />
        </div>
      </div>
    </section>
  );
}
