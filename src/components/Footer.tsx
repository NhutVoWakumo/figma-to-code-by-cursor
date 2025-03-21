import { Logo } from "./Logo";
import { Button } from "./Button";

type FooterLinkProps = {
  title: string;
  href: string;
};

const FooterLink = ({ title, href }: FooterLinkProps) => (
  <a
    href={href}
    className="text-lg text-white hover:text-opacity-80 transition-colors"
  >
    {title}
  </a>
);

const navLinks = [
  { title: "About us", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Use Cases", href: "#use-cases" },
  { title: "Pricing", href: "#pricing" },
  { title: "Blog", href: "#blog" },
];

export function Footer() {
  return (
    <footer className="bg-darkGreen text-white rounded-t-card px-[60px] pt-14 pb-12">
      <div className="flex flex-col gap-12">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-16 max-w-[700px]">
            <div className="flex justify-between items-center">
              <Logo variant="light" />

              <div className="flex gap-10">
                {navLinks.map((link) => (
                  <FooterLink
                    key={link.title}
                    title={link.title}
                    href={link.href}
                  />
                ))}
              </div>

              {/* Social links placeholder */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-white"></div>
                <div className="w-10 h-10 rounded-full bg-white"></div>
                <div className="w-10 h-10 rounded-full bg-white"></div>
              </div>
            </div>

            <div className="flex gap-20">
              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-medium bg-green text-black px-2 py-1 rounded-md inline-block">
                  Contact us:
                </h3>
                <div className="flex flex-col gap-5">
                  <p className="text-lg">Email: info@positivus.com</p>
                  <p className="text-lg">Phone: 555-567-8901</p>
                  <p className="text-lg">
                    Address: 1234 Main St
                    <br />
                    Moonstone City, Stardust State 12345
                  </p>
                </div>
              </div>

              <div className="bg-[#292A32] rounded-button p-10 flex gap-5">
                <div className="border border-white rounded-button px-9 py-5 flex items-center">
                  <span className="text-white text-lg">Email</span>
                </div>
                <Button variant="secondary">Subscribe to news</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white pt-12">
          <div className="flex gap-10 justify-between">
            <p className="text-lg">© 2023 Positivus. All Rights Reserved.</p>
            <p className="text-lg">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
