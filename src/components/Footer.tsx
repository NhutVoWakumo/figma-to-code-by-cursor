const Footer = () => {
  return (
    <footer className="bg-secondary text-white rounded-t-45 py-14 px-14">
      <div className="grid grid-cols-3 gap-10 mb-14">
        <div>
          <div className="text-white font-bold text-3xl mb-8">Positivus</div>
          <div className="space-y-4">
            <a href="#" className="block text-white">
              About us
            </a>
            <a href="#" className="block text-white">
              Services
            </a>
            <a href="#" className="block text-white">
              Use Cases
            </a>
            <a href="#" className="block text-white">
              Pricing
            </a>
            <a href="#" className="block text-white">
              Blog
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-6 bg-primary px-2 py-1 text-black rounded-md inline-block">
            Contact us:
          </h3>
          <div className="space-y-4">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>
              Address: 1234 Main St
              <br />
              Moonstone City, Stardust State 12345
            </p>
          </div>
        </div>

        <div>
          <div className="bg-gray-800 rounded-14 p-10">
            <div className="border border-white p-4 rounded-14 mb-6">
              <span className="text-gray-200">Email</span>
            </div>
            <button className="bg-primary text-black py-4 px-6 rounded-14 w-full">
              Subscribe to news
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 pt-12">
        <div className="flex justify-between">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
