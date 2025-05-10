import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="text-white py-10 px-6" style={{ backgroundColor: 'rgb(2, 17, 65)' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Email: nlatchoomun@udm.ac.mu</p>
          <p>Phone: +230 460-9500</p>
          <p>Address: Rose-Hill campus Avenue de la Concorde,Roches Brunes</p>
        </div>

        {/* Sponsor Logos */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Sponsors</h3>
          <div className="flex flex-wrap gap-4">
            <Image src='/sponsors/hsbc.svg' alt="HSBC" width={100} height={50} />
            <Image src='/sponsors/rht.png' alt="RHT" width={100} height={50} />
            <Image src='/sponsors/business_mauritius.png' alt="BUSINESS_MAURITIUS" width={100} height={50} />
            {/* Add more logos as needed */}
          </div>
        </div>

        {/* Links or Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
            <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
            <li><a href="#" className="hover:text-gray-400">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-400 text-sm">
        © {new Date().getFullYear()} CEVMAURITIUS. All rights reserved.
      </div>
    </footer>
  );
}