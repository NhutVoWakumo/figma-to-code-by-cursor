const CtaSection = () => {
  return (
    <section className="py-16 px-24 relative">
      <div className="bg-gray-100 rounded-45 px-16 py-20 flex gap-10 shadow-card">
        <div className="w-2/3">
          <h2 className="text-3xl font-medium mb-6">
            Let&apos;s make things happen
          </h2>
          <p className="text-lg mb-8">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="bg-secondary text-white py-5 px-9 rounded-14">
            Get your free proposal
          </button>
        </div>
        <div className="w-1/3 relative">
          {/* Placeholder for illustration */}
          <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
            <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center">
              <p className="text-gray-500 text-sm">CTA Illustration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
