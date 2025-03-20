import SectionHeading from "./SectionHeading";

const WorkingProcessSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts.",
      isExpanded: true,
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      isExpanded: false,
    },
    {
      number: "03",
      title: "Implementation",
      isExpanded: false,
    },
    {
      number: "04",
      title: "Monitoring and Optimization",
      isExpanded: false,
    },
    {
      number: "05",
      title: "Reporting and Communication",
      isExpanded: false,
    },
    {
      number: "06",
      title: "Continual Improvement",
      isExpanded: false,
    },
  ];

  return (
    <section className="py-24">
      <SectionHeading
        title="Our Working Process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
      />

      <div className="px-24 space-y-8">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className={`rounded-45 shadow-card p-12 ${
              step.isExpanded ? "bg-primary" : "bg-gray-100"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-6">
                <span className="text-5xl font-medium">{step.number}</span>
                <h3 className="text-2xl font-medium">{step.title}</h3>
              </div>
              <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
                {step.isExpanded ? "-" : "+"}
              </div>
            </div>

            {step.isExpanded && step.description && (
              <div className="mt-8 border-t border-black pt-8">
                <p className="text-lg">{step.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkingProcessSection;
