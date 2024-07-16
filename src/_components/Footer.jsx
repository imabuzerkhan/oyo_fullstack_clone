import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold">The World's Fastest Growing Hotel Chain</h2>
        </div>
        <div className="flex justify-center mb-8">
          <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <Image src="/app-store.svg" alt="Download on the App Store" width={150} height={50} />
          </Link>
          <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <Image src="/google-play.svg" alt="Get it on Google Play" width={150} height={50} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div>
            <h3 className="font-semibold">Download App</h3>
          </div>
          <div>
            <h3 className="font-semibold">About Us</h3>
            <ul>
              <li><Link href="#">Teams / Careers</Link></li>
              <li><Link href="#">Blogs</Link></li>
              <li><Link href="#">Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Official OYO Blog</h3>
            <ul>
              <li><Link href="#">Investor Relations</Link></li>
              <li><Link href="#">OYO Circle</Link></li>
              <li><Link href="#">OYO Frames</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Terms and Conditions</h3>
            <ul>
              <li><Link href="#">Guest Policies</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Trust and Safety</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center mb-4">
          <p>Found security issues, that you’d like us to know? <Link href="#" className="underline">Know More</Link></p>
          <p>Have Queries? Email for any assistance on <Link href="mailto:customer.support_nepal@oyorooms.com" className="underline">customer.support_nepal@oyorooms.com</Link></p>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="#" className="text-gray-300 hover:text-white"><FontAwesomeIcon icon={faFacebookF} /></Link>
          <Link href="#" className="text-gray-300 hover:text-white"><FontAwesomeIcon icon={faInstagram} /></Link>
          <Link href="#" className="text-gray-300 hover:text-white"><FontAwesomeIcon icon={faTwitter} /></Link>
          <Link href="#" className="text-gray-300 hover:text-white"><FontAwesomeIcon icon={faPinterest} /></Link>
        </div>
        <div className="text-center">
          <p>© 2013-2022 © Oravel Stays Limited</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
