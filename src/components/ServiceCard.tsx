interface ServiceCardProps {
  title: string;
  subtitle?: string;
  variant?: "light" | "dark" | "green";
}

const ServiceCard = ({
  title,
  subtitle,
  variant = "light",
}: ServiceCardProps) => {
  const bgColor =
    variant === "dark"
      ? "bg-secondary"
      : variant === "green"
      ? "bg-primary"
      : "bg-gray-100";

  const textColor = variant === "dark" ? "text-white" : "text-black";

  return (
    <div
      className={`${bgColor} rounded-45 p-12 shadow-card flex justify-between items-center w-full`}
    >
      <div className="flex flex-col gap-16">
        <div>
          <div className="bg-primary px-2 py-1 rounded-md mb-2 w-fit">
            <h3 className={`${textColor} font-medium text-2xl`}>{title}</h3>
          </div>
          {subtitle && (
            <div className="bg-primary px-2 py-1 rounded-md w-fit">
              <h3 className={`${textColor} font-medium text-2xl`}>
                {subtitle}
              </h3>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-black">→</span>
          </div>
          <span className={textColor}>Learn more</span>
        </div>
      </div>

      <div className="w-56 h-56 bg-gray-200 rounded-md flex items-center justify-center">
        <p className="text-gray-500 text-sm">Service Illustration</p>
      </div>
    </div>
  );
};

export default ServiceCard;
