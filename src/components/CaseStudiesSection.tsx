import SectionHeading from "./SectionHeading";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      description:
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
      description:
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
      description:
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
  ];

  return (
    <section className="py-24">
      <SectionHeading
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <div className="px-24">
        <div className="bg-secondary rounded-45 p-16 text-white">
          {caseStudies.map((study, index) => (
            <div key={index} className="flex flex-col gap-5 mb-8">
              <p className="text-lg">{study.description}</p>
              <div className="flex items-center gap-2">
                <span className="text-primary">Learn more</span>
                <span>→</span>
              </div>
              {index < caseStudies.length - 1 && (
                <div className="border-t border-white/20 my-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
