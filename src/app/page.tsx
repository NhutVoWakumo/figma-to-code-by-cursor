import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center py-6 px-[100px] max-w-[1440px] mx-auto">
        <div className="flex items-center">
          <div className="flex items-center py-2.5">
            <div className="relative w-[40px] h-[40px]">
              <Image
                src="/images/logo-icon-updated.svg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-[120px] h-[25px] ml-2">
              <Image
                src="/images/logo-text-updated.svg"
                alt="Positivus"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <Link
            href="#"
            className="text-black text-[20px] font-normal leading-[28px]"
          >
            About us
          </Link>
          <Link
            href="#"
            className="text-black text-[20px] font-normal leading-[28px]"
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-black text-[20px] font-normal leading-[28px]"
          >
            Use Cases
          </Link>
          <Link
            href="#"
            className="text-black text-[20px] font-normal leading-[28px]"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-black text-[20px] font-normal leading-[28px]"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="border border-black rounded-[14px] px-[35px] py-5 text-[20px] font-normal leading-[28px]"
          >
            Request a quote
          </Link>
        </div>
      </nav>

      {/* Header Section */}
      <header className="flex justify-between items-center px-[100px] mt-[70px] max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[35px] max-w-[630px]">
          <h1 className="text-[60px] font-medium leading-[76.8px] tracking-[-0.01em]">
            Navigating the digital landscape for success
          </h1>
          <p className="text-[20px] leading-[28px] font-normal">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Link
            href="#"
            className="bg-[#191A23] text-white px-[35px] py-5 rounded-[14px] text-[20px] font-normal leading-[28px] inline-block w-fit"
          >
            Book a consultation
          </Link>
        </div>
        <div className="relative w-[600px] h-[500px]">
          {/* Main background illustrations */}
          <div className="absolute w-full h-full">
            <Image
              src="/images/header-main-illustration.svg"
              alt="Digital Marketing Background"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute w-full h-full">
            <Image
              src="/images/header-secondary-illustration.svg"
              alt="Digital Marketing Framework"
              fill
              className="object-contain"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-[30px] h-[30px]">
            <Image
              src="/images/header-element-1.svg"
              alt="Decorative Element"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-1/3 right-1/4 w-[25px] h-[25px]">
            <Image
              src="/images/header-element-2.svg"
              alt="Decorative Element"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-1/3 left-1/3 w-[40px] h-[40px]">
            <Image
              src="/images/header-element-3.svg"
              alt="Decorative Element"
              fill
              className="object-contain"
            />
          </div>

          {/* Interactive elements */}
          <div className="absolute top-[20%] right-[30%] w-[50px] h-[50px]">
            <Image
              src="/images/header-element-4.svg"
              alt="Interactive Element"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-[25%] right-[35%] w-[45px] h-[45px]">
            <Image
              src="/images/header-element-5.svg"
              alt="Interactive Element"
              fill
              className="object-contain"
            />
          </div>

          {/* Additional accent elements */}
          <div className="absolute top-[40%] left-[20%] w-[35px] h-[35px]">
            <Image
              src="/images/header-element-6.svg"
              alt="Accent Element"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-[15%] left-[40%] w-[30px] h-[30px]">
            <Image
              src="/images/header-element-7.svg"
              alt="Accent Element"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-[30%] left-[15%] w-[25px] h-[25px]">
            <Image
              src="/images/header-element-8.svg"
              alt="Accent Element"
              fill
              className="object-contain"
            />
          </div>

          {/* Highlight elements */}
          <div className="absolute bottom-[40%] right-[20%] w-[35px] h-[35px]">
            <Image
              src="/images/header-element-9.svg"
              alt="Highlight Element"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-[35%] right-[15%] w-[40px] h-[40px]">
            <Image
              src="/images/header-element-10.svg"
              alt="Highlight Element"
              fill
              className="object-contain"
            />
          </div>

          {/* Decorative circles */}
          <div className="absolute top-[10%] left-[10%] w-[15px] h-[15px] rounded-full border border-black"></div>
          <div className="absolute bottom-[15%] right-[10%] w-[20px] h-[20px] rounded-full border border-black"></div>
          <div className="absolute top-[25%] right-[5%] w-[10px] h-[10px] rounded-full border border-black"></div>

          {/* Accent circles */}
          <div className="absolute top-[50%] left-[5%] w-[12px] h-[12px] rounded-full bg-[#B9FF66]"></div>
          <div className="absolute bottom-[10%] left-[40%] w-[15px] h-[15px] rounded-full bg-[#B9FF66]"></div>
          <div className="absolute top-[15%] right-[30%] w-[10px] h-[10px] rounded-full bg-white"></div>
        </div>
      </header>

      {/* Client Logos Section */}
      <div className="flex justify-between items-center px-[100px] mt-[70px] max-w-[1440px] mx-auto">
        <div className="relative h-[50px] w-[150px]">
          <Image
            src="/images/company-logo-1.svg"
            alt="Company 1"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative h-[50px] w-[150px]">
          <Image
            src="/images/company-logo-2.svg"
            alt="Company 2"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative h-[50px] w-[150px]">
          <Image
            src="/images/company-logo-3.svg"
            alt="Company 3"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative h-[50px] w-[150px]">
          <Image
            src="/images/company-logo-4.svg"
            alt="Company 4"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative h-[50px] w-[150px]">
          <Image
            src="/images/company-logo-5.svg"
            alt="Company 5"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative h-[50px] w-[150px]">
          <Image
            src="/images/company-logo-6.svg"
            alt="Company 6"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Services Section */}
      <section className="mt-[70px]">
        <div className="flex px-[100px] gap-10 max-w-[1440px] mx-auto">
          <div className="bg-[#B9FF66] px-[7px] py-0 rounded-[7px] h-fit">
            <h2 className="text-[40px] font-medium leading-[51px]">Services</h2>
          </div>
          <p className="text-[18px] font-normal leading-[23px] max-w-[800px]">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>

        {/* Services Cards Row 1 */}
        <div className="flex px-[100px] gap-10 mt-[40px] max-w-[1440px] mx-auto">
          <div className="flex justify-between items-center p-[50px] bg-[#F3F3F3] rounded-[45px] border border-black shadow-[0px_5px_0px_0px_rgba(25,26,35,1)] w-[600px]">
            <div className="flex flex-col gap-[93px]">
              <div>
                <div className="bg-[#B9FF66] px-[7px] py-0 rounded-[7px] mb-2 inline-block">
                  <h3 className="text-[30px] font-medium leading-[38px]">
                    Search engine
                  </h3>
                </div>
                <div className="bg-[#B9FF66] px-[7px] py-0 rounded-[7px] inline-block">
                  <h3 className="text-[30px] font-medium leading-[38px]">
                    optimization
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-[15px]">
                <div className="w-[40px] h-[40px] rounded-full bg-[#191A23] relative flex items-center justify-center">
                  <div className="w-[20px] h-[2px] bg-[#B9FF66]"></div>
                </div>
                <span className="text-[20px] font-normal leading-[28px]">
                  Learn more
                </span>
              </div>
            </div>
            <div className="w-[200px] h-[200px] relative">
              <Image
                src="/images/seo-card-updated.svg"
                alt="Search Engine Optimization"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex justify-between items-center p-[50px] bg-[#B9FF66] rounded-[45px] border border-black shadow-[0px_5px_0px_0px_rgba(25,26,35,1)] w-[600px]">
            <div className="flex flex-col gap-[93px]">
              <div>
                <div className="bg-black px-[7px] py-0 rounded-[7px] mb-2 inline-block">
                  <h3 className="text-[30px] font-medium leading-[38px] text-white">
                    Pay-per-click
                  </h3>
                </div>
                <div className="bg-black px-[7px] py-0 rounded-[7px] inline-block">
                  <h3 className="text-[30px] font-medium leading-[38px] text-white">
                    advertising
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-[15px]">
                <div className="w-[40px] h-[40px] rounded-full bg-[#191A23] relative flex items-center justify-center">
                  <div className="w-[20px] h-[2px] bg-[#B9FF66]"></div>
                </div>
                <span className="text-[20px] font-normal leading-[28px]">
                  Learn more
                </span>
              </div>
            </div>
            <div className="w-[200px] h-[200px] relative">
              <Image
                src="/images/ppc-card-updated.svg"
                alt="Pay-per-click Advertising"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Services Cards Row 2 */}
        <div className="flex px-[100px] gap-10 mt-[40px] max-w-[1440px] mx-auto">
          <div className="flex justify-between items-center p-[50px] bg-[#191A23] rounded-[45px] border border-black shadow-[0px_5px_0px_0px_rgba(25,26,35,1)] w-[600px]">
            <div className="flex flex-col gap-[93px]">
              <div>
                <div className="bg-black px-[7px] py-0 rounded-[7px] mb-2 inline-block">
                  <h3 className="text-[30px] font-medium leading-[38px] text-white">
                    Social Media
                  </h3>
                </div>
                <div className="bg-black px-[7px] py-0 rounded-[7px] inline-block">
                  <h3 className="text-[30px] font-medium leading-[38px] text-white">
                    Marketing
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-[15px]">
                <div className="w-[40px] h-[40px] rounded-full bg-black border border-white flex items-center justify-center">
                  <div className="w-[20px] h-[2px] bg-black"></div>
                </div>
                <span className="text-[20px] font-normal leading-[28px] text-[#B9FF66]">
                  Learn more
                </span>
              </div>
            </div>
            <div className="w-[200px] h-[200px] relative">
              <Image
                src="/images/social-media-card-updated.svg"
                alt="Social Media Marketing"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex justify-between items-center p-[50px] bg-[#F3F3F3] rounded-[45px] border border-black shadow-[0px_5px_0px_0px_rgba(25,26,35,1)] w-[600px]">
            <div className="flex flex-col gap-[93px]">
              <div>
                <div className="bg-[#B9FF66] px-[7px] py-0 rounded-[7px] mb-2 inline-block">
                  <h3 className="text-[30px] font-medium leading-[38px]">
                    Email
                  </h3>
                </div>
                <div className="bg-[#B9FF66] px-[7px] py-0 rounded-[7px] inline-block">
                  <h3 className="text-[30px] font-medium leading-[38px]">
                    Marketing
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-[15px]">
                <div className="w-[40px] h-[40px] rounded-full bg-[#191A23] relative flex items-center justify-center">
                  <div className="w-[20px] h-[2px] bg-[#B9FF66]"></div>
                </div>
                <span className="text-[20px] font-normal leading-[28px]">
                  Learn more
                </span>
              </div>
            </div>
            <div className="w-[200px] h-[200px] relative">
              <Image
                src="/images/email-card-updated.svg"
                alt="Email Marketing"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Services Cards Row 3 */}
        <div className="flex px-[100px] gap-10 mt-[40px] max-w-[1440px] mx-auto">
          <div className="flex justify-between items-center p-[50px] bg-[#B9FF66] rounded-[45px] border border-black shadow-[0px_5px_0px_0px_rgba(25,26,35,1)] w-[600px]">
            <div className="flex flex-col gap-[93px]">
              <div>
                <div className="bg-black px-[7px] py-0 rounded-[7px] mb-2 inline-block">
                  <h3 className="text-[30px] font-medium leading-[38px] text-white">
                    Content
                  </h3>
                </div>
                <div className="bg-black px-[7px] py-0 rounded-[7px] inline-block">
                  <h3 className="text-[30px] font-medium leading-[38px] text-white">
                    Creation
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-[15px]">
                <div className="w-[40px] h-[40px] rounded-full bg-[#191A23] relative flex items-center justify-center">
                  <div className="w-[20px] h-[2px] bg-[#B9FF66]"></div>
                </div>
                <span className="text-[20px] font-normal leading-[28px]">
                  Learn more
                </span>
              </div>
            </div>
            <div className="w-[200px] h-[200px] relative">
              <Image
                src="/images/content-creation-card-updated.svg"
                alt="Content Creation"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex justify-between items-center p-[50px] bg-[#191A23] rounded-[45px] border border-black shadow-[0px_5px_0px_0px_rgba(25,26,35,1)] w-[600px]">
            <div className="flex flex-col gap-[93px]">
              <div>
                <div className="bg-[#B9FF66] px-[7px] py-0 rounded-[7px] mb-2 inline-block">
                  <h3 className="text-[30px] font-medium leading-[38px]">
                    Analytics and
                  </h3>
                </div>
                <div className="bg-[#B9FF66] px-[7px] py-0 rounded-[7px] inline-block">
                  <h3 className="text-[30px] font-medium leading-[38px]">
                    Tracking
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-[15px]">
                <div className="w-[40px] h-[40px] rounded-full bg-black border border-white flex items-center justify-center">
                  <div className="w-[20px] h-[2px] bg-black"></div>
                </div>
                <span className="text-[20px] font-normal leading-[28px] text-[#B9FF66]">
                  Learn more
                </span>
              </div>
            </div>
            <div className="w-[200px] h-[200px] relative">
              <Image
                src="/images/analytics-card-updated.svg"
                alt="Analytics and Tracking"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-[100px] mt-[70px] max-w-[1440px] mx-auto">
        <div className="bg-[#F3F3F3] rounded-[45px] flex items-center w-full h-[347px]">
          <div className="flex flex-col gap-[26px] max-w-[600px] px-[60px]">
            <h3 className="text-[30px] font-medium leading-[38.28px]">
              Let&apos;s make things happen
            </h3>
            <p className="text-[18px] font-normal leading-[23px]">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <Link
              href="#"
              className="bg-[#191A23] text-white px-[35px] py-[20px] rounded-[14px] text-[20px] font-normal leading-[28px] inline-block w-fit"
            >
              Get your free proposal
            </Link>
          </div>
          <div className="absolute right-[160px] w-[250px] h-[250px]">
            <div className="relative w-full h-full">
              <Image
                src="/images/cta-illustration.svg"
                alt="CTA Illustration"
                fill
                className="object-contain"
              />
              {/* Decorative elements */}
              <div className="absolute top-[10%] left-[10%] w-[30px] h-[30px] rounded-full border border-black"></div>
              <div className="absolute bottom-[20%] left-[20%] w-[40px] h-[40px] rounded-full border border-black"></div>
              <div className="absolute top-[30%] right-[15%] w-[20px] h-[20px] rounded-full border border-black"></div>
              <div className="absolute top-[50%] right-[30%] w-[25px] h-[25px] rounded-[3px] rotate-45 border border-black"></div>
              <div className="absolute bottom-[30%] right-[10%] w-[15px] h-[15px] rounded-full bg-[#B9FF66]"></div>
              <div className="absolute bottom-[15%] right-[40%] w-[10px] h-[10px] rounded-full bg-[#B9FF66]"></div>
              <div className="absolute top-[20%] right-[30%] w-[20px] h-[20px] rounded-full border border-black bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="mt-[70px] max-w-[1440px] mx-auto">
        <div className="flex px-[100px] gap-10">
          <div className="bg-[#B9FF66] px-[7px] py-0 rounded-[7px] h-fit">
            <h2 className="text-[40px] font-medium leading-[51px]">
              Case Studies
            </h2>
          </div>
          <p className="text-[18px] font-normal leading-[23px] max-w-[800px]">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>

        <div className="px-[100px] mt-[40px]">
          <div className="bg-[#191A23] rounded-[45px] p-[70px] flex gap-[64px]">
            <div className="flex flex-col gap-[20px] max-w-[350px]">
              <p className="text-white text-[18px] leading-[23px]">
                For a local restaurant, we implemented a targeted PPC campaign
                that resulted in a 50% increase in website traffic and a 25%
                increase in sales.
              </p>
              <div className="flex items-center gap-[15px]">
                <span className="text-[#B9FF66] text-[20px] font-normal leading-[28px]">
                  Learn more
                </span>
                <Image
                  src="/images/arrow-right.svg"
                  alt="Arrow Right"
                  width={24}
                  height={24}
                />
              </div>
            </div>

            <div className="w-[1px] h-[150px] bg-white self-center"></div>

            <div className="flex flex-col gap-[20px] max-w-[350px]">
              <p className="text-white text-[18px] leading-[23px]">
                For a B2B software company, we developed an SEO strategy that
                resulted in a first page ranking for key keywords and a 200%
                increase in organic traffic.
              </p>
              <div className="flex items-center gap-[15px]">
                <span className="text-[#B9FF66] text-[20px] font-normal leading-[28px]">
                  Learn more
                </span>
                <Image
                  src="/images/arrow-right.svg"
                  alt="Arrow Right"
                  width={24}
                  height={24}
                />
              </div>
            </div>

            <div className="w-[1px] h-[150px] bg-white self-center"></div>

            <div className="flex flex-col gap-[20px] max-w-[350px]">
              <p className="text-white text-[18px] leading-[23px]">
                For a national retail chain, we created a social media marketing
                campaign that increased followers by 25% and generated a 20%
                increase in online sales.
              </p>
              <div className="flex items-center gap-[15px]">
                <span className="text-[#B9FF66] text-[20px] font-normal leading-[28px]">
                  Learn more
                </span>
                <Image
                  src="/images/arrow-right.svg"
                  alt="Arrow Right"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mt-[70px] max-w-[1440px] mx-auto">
        <div className="flex px-[100px] gap-10">
          <div className="bg-[#B9FF66] px-[7px] py-0 rounded-[7px] h-fit">
            <h2 className="text-[40px] font-medium leading-[51px]">
              Our Working Process
            </h2>
          </div>
          <p className="text-[18px] font-normal leading-[23px] max-w-[800px]">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>

        <div className="px-[100px] mt-[30px] flex flex-col gap-[30px]">
          {/* Step 1 - Active/Expanded */}
          <div className="bg-[#B9FF66] rounded-[45px] p-[41px_60px] border border-[#191A23] shadow-[0px_5px_0px_0px_rgba(25,26,35,1)]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[25px]">
                <span className="text-[60px] font-medium leading-[76.56px]">
                  01
                </span>
                <h3 className="text-[30px] font-medium leading-[38.28px]">
                  Consultation
                </h3>
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-[#F3F3F3] border border-black flex items-center justify-center">
                <Image
                  src="/images/process-minus-icon.svg"
                  alt="Collapse"
                  width={20}
                  height={2}
                />
              </div>
            </div>
            <div className="mt-[30px] border-t border-black pt-[30px]">
              <p className="text-[18px] font-normal leading-[23px]">
                During the initial consultation, we will discuss your business
                goals and objectives, target audience, and current marketing
                efforts. This will allow us to understand your needs and tailor
                our services to best fit your requirements.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#F3F3F3] rounded-[45px] p-[41px_60px] border border-[#191A23] shadow-[0px_5px_0px_0px_rgba(25,26,35,1)]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[25px]">
                <span className="text-[60px] font-medium leading-[76.56px]">
                  02
                </span>
                <h3 className="text-[30px] font-medium leading-[38.28px]">
                  Research and Strategy Development
                </h3>
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-[#F3F3F3] border border-black flex items-center justify-center">
                <Image
                  src="/images/process-plus-icon.svg"
                  alt="Expand"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#F3F3F3] rounded-[45px] p-[41px_60px] border border-[#191A23] shadow-[0px_5px_0px_0px_rgba(25,26,35,1)]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[25px]">
                <span className="text-[60px] font-medium leading-[76.56px]">
                  03
                </span>
                <h3 className="text-[30px] font-medium leading-[38.28px]">
                  Implementation
                </h3>
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-[#F3F3F3] border border-black flex items-center justify-center">
                <Image
                  src="/images/process-plus-icon.svg"
                  alt="Expand"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-[#F3F3F3] rounded-[45px] p-[41px_60px] border border-[#191A23] shadow-[0px_5px_0px_0px_rgba(25,26,35,1)]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[25px]">
                <span className="text-[60px] font-medium leading-[76.56px]">
                  04
                </span>
                <h3 className="text-[30px] font-medium leading-[38.28px]">
                  Monitoring and Optimization
                </h3>
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-[#F3F3F3] border border-black flex items-center justify-center">
                <Image
                  src="/images/process-plus-icon.svg"
                  alt="Expand"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-[#F3F3F3] rounded-[45px] p-[41px_60px] border border-[#191A23] shadow-[0px_5px_0px_0px_rgba(25,26,35,1)]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[25px]">
                <span className="text-[60px] font-medium leading-[76.56px]">
                  05
                </span>
                <h3 className="text-[30px] font-medium leading-[38.28px]">
                  Reporting and Communication
                </h3>
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-[#F3F3F3] border border-black flex items-center justify-center">
                <Image
                  src="/images/process-plus-icon.svg"
                  alt="Expand"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-[#F3F3F3] rounded-[45px] p-[41px_60px] border border-[#191A23] shadow-[0px_5px_0px_0px_rgba(25,26,35,1)]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[25px]">
                <span className="text-[60px] font-medium leading-[76.56px]">
                  06
                </span>
                <h3 className="text-[30px] font-medium leading-[38.28px] text-[#191A23]">
                  Continual Improvement
                </h3>
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-[#F3F3F3] border border-black flex items-center justify-center">
                <Image
                  src="/images/process-plus-icon.svg"
                  alt="Expand"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mt-[70px]">
        <div className="flex px-[100px] gap-10">
          <div className="bg-[#B9FF66] px-[7px] py-0 rounded-[7px] h-fit">
            <h2 className="text-[40px] font-medium">Team</h2>
          </div>
          <p className="text-[18px] max-w-[800px]">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>

        <div className="flex px-[100px] gap-10 mt-[40px]">
          <div className="bg-white rounded-[45px] p-[40px_35px] border border-black shadow-[0px_5px_0px_0px_rgba(25,26,35,1)] w-[387px] h-[331px]">
            <div className="flex flex-col gap-[28px]">
              <div className="flex justify-between items-end">
                <div className="flex items-end gap-[20px]">
                  <div className="w-[70px] h-[70px] rounded-full bg-[#B9FF66] overflow-hidden">
                    {/* Team member image would go here */}
                  </div>
                  <div>
                    <p className="text-[20px] font-medium">John Smith</p>
                    <p className="text-[18px]">CEO and Founder</p>
                  </div>
                </div>
                <div className="w-[40px] h-[40px] rounded-full bg-black flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 10H15M15 10L10 5M15 10L10 15"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full h-[1px] bg-black"></div>
              <p className="text-[18px]">
                10+ years of experience in digital marketing. Expertise in SEO,
                PPC, and content strategy
              </p>
            </div>
          </div>

          {/* More team member cards would be added here */}
        </div>

        <div className="flex justify-center mt-[40px]">
          <Link
            href="#"
            className="bg-[#191A23] text-white px-[35px] py-[20px] rounded-[14px] text-[20px] inline-block"
          >
            See all team
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-[70px]">
        <div className="flex px-[100px] gap-10">
          <div className="bg-[#B9FF66] px-[7px] py-0 rounded-[7px] h-fit">
            <h2 className="text-[40px] font-medium">Testimonials</h2>
          </div>
          <p className="text-[18px] max-w-[800px]">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </p>
        </div>

        <div className="px-[100px] mt-[40px]">
          <div className="bg-[#191A23] rounded-[45px] p-[50px]">
            <div className="flex gap-[50px]">
              <div className="flex flex-col items-end gap-[20px]">
                <div className="relative">
                  <div className="bg-[#191A23] rounded-[45px] border border-[#B9FF66] p-[30px] text-white text-[18px] max-w-[500px]">
                    &quot;We have been working with Positivus for the past year
                    and have seen a significant increase in website traffic and
                    leads as a result of their efforts. The team is
                    professional, responsive, and truly cares about the success
                    of our business. We highly recommend Positivus to any
                    company looking to grow their online presence.&quot;
                  </div>
                </div>
                <p className="text-white text-[18px]">
                  John Smith
                  <br />
                  Marketing Director at XYZ Corp
                </p>
              </div>

              {/* More testimonial cards would be added here */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-[70px]">
        <div className="flex px-[100px] gap-10">
          <div className="bg-[#B9FF66] px-[7px] py-0 rounded-[7px] h-fit">
            <h2 className="text-[40px] font-medium">Contact Us</h2>
          </div>
          <p className="text-[18px] max-w-[800px]">
            Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
          </p>
        </div>

        <div className="px-[100px] mt-[40px] relative">
          <div className="bg-[#F3F3F3] rounded-[45px] p-[60px_100px_80px] w-[1240px]">
            <div className="flex flex-col gap-[40px] max-w-[600px]">
              <div className="flex gap-[35px]">
                <div className="flex items-center">
                  <div className="w-[20px] h-[20px] rounded-full bg-white border border-black flex items-center justify-center">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#B9FF66]"></div>
                  </div>
                  <span className="ml-[10px] text-[18px]">Say Hi</span>
                </div>
                <div className="flex items-center">
                  <div className="w-[20px] h-[20px] rounded-full bg-white border border-black"></div>
                  <span className="ml-[10px] text-[18px]">Get a Quote</span>
                </div>
              </div>

              <div className="flex flex-col gap-[25px]">
                <div className="flex flex-col gap-[5px]">
                  <label className="text-[16px]">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-white border border-black rounded-[14px] px-[30px] py-[18px] w-[556px] text-[18px] placeholder-[#898989]"
                  />
                </div>

                <div className="flex flex-col gap-[5px]">
                  <label className="text-[16px]">Email*</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-white border border-black rounded-[14px] px-[30px] py-[18px] w-[556px] text-[18px] placeholder-[#898989]"
                  />
                </div>

                <div className="flex flex-col gap-[5px]">
                  <label className="text-[16px]">Message*</label>
                  <textarea
                    placeholder="Message"
                    className="bg-white border border-black rounded-[14px] px-[30px] py-[18px] w-[556px] h-[190px] text-[18px] placeholder-[#898989] resize-none"
                  ></textarea>
                </div>
              </div>

              <button className="bg-[#191A23] text-white px-[35px] py-[20px] rounded-[14px] text-[20px] w-[556px]">
                Send Message
              </button>
            </div>
          </div>

          <div className="absolute right-[200px] top-[50px] w-[300px] h-[300px]">
            <Image
              src="/images/contact-illustration-1.svg"
              alt="Contact Illustration"
              fill
              className="object-contain"
            />
            <Image
              src="/images/contact-illustration-2.svg"
              alt="Contact Elements"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-[70px]">
        <div className="bg-[#191A23] rounded-t-[45px] p-[55px_60px_50px]">
          <div className="flex flex-col gap-[66px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[155px]">
                <div className="flex items-center">
                  <Image
                    src="/images/logo-icon.svg"
                    alt="Logo"
                    width={30}
                    height={30}
                    className="filter invert"
                  />
                  <Image
                    src="/images/logo-text.svg"
                    alt="Positivus"
                    width={120}
                    height={30}
                    className="ml-2 filter invert"
                  />
                </div>

                <div className="flex gap-[40px]">
                  <Link href="#" className="text-white text-[18px]">
                    About us
                  </Link>
                  <Link href="#" className="text-white text-[18px]">
                    Services
                  </Link>
                  <Link href="#" className="text-white text-[18px]">
                    Use Cases
                  </Link>
                  <Link href="#" className="text-white text-[18px]">
                    Pricing
                  </Link>
                  <Link href="#" className="text-white text-[18px]">
                    Blog
                  </Link>
                </div>

                <div className="flex gap-[20px]">
                  <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 10H15M15 10L10 5M15 10L10 15"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="w-[40px] h-[40px] rounded-full bg-white"></div>
                  <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 10H15M15 10L10 5M15 10L10 15"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex gap-[154px]">
                <div className="flex flex-col gap-[27px]">
                  <div className="bg-[#B9FF66] px-[7px] py-0 rounded-[7px] inline-block">
                    <h3 className="text-[20px] font-medium">Contact us:</h3>
                  </div>

                  <div className="flex flex-col gap-[20px]">
                    <p className="text-white text-[18px]">
                      Email: info@positivus.com
                    </p>
                    <p className="text-white text-[18px]">
                      Phone: 555-567-8901
                    </p>
                    <p className="text-white text-[18px]">
                      Address: 1234 Main St
                      <br />
                      Moonstone City, Stardust State 12345
                    </p>
                  </div>
                </div>

                <div className="bg-[#292A32] rounded-[14px] p-[58px_40px] flex gap-[20px]">
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-transparent text-white border border-white rounded-[14px] px-[35px] py-[22px] w-[285px] text-[18px] placeholder-white"
                  />
                  <button className="bg-[#B9FF66] text-black px-[35px] py-[20px] rounded-[14px] text-[20px] whitespace-nowrap">
                    Subscribe to news
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[50px]">
              <div className="w-full h-[1px] bg-white"></div>

              <div className="flex gap-[40px]">
                <p className="text-white text-[18px]">
                  © 2023 Positivus. All Rights Reserved.
                </p>
                <p className="text-white text-[18px]">Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
