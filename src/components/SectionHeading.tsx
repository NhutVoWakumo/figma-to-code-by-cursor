interface SectionHeadingProps {
  title: string;
  description: string;
}

const SectionHeading = ({ title, description }: SectionHeadingProps) => {
  return (
    <div className="flex flex-col mb-16 px-24">
      <div className="bg-primary px-2 py-1 rounded-md w-fit mb-2">
        <h2 className="text-black font-medium text-3xl">{title}</h2>
      </div>
      <p className="text-black text-xl max-w-3xl">{description}</p>
    </div>
  );
};

export default SectionHeading;
