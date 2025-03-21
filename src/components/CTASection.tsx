import { Button } from "./Button";

export function CTASection() {
  return (
    <section className="px-[100px] my-24 relative">
      <div className="bg-lightGray rounded-card p-16 max-w-[1240px] mx-auto">
        <div className="max-w-[600px]">
          <h2 className="text-3xl font-medium mb-6">
            Let&apos;s make things happen
          </h2>

          <p className="text-lg mb-6">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>

          <Button variant="secondary">Get your free proposal</Button>
        </div>
      </div>

      {/* Placeholder for the decorative elements */}
      <div className="absolute top-0 right-0 h-full w-1/3 flex items-center justify-center">
        <span className="text-gray-400">Decorative elements</span>
      </div>
    </section>
  );
}
