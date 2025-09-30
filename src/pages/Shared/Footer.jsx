import { Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-black text-gray-300 px-8 py-12">
      <div className="grid md:grid-cols-5 gap-9">
        <div className="space-y-4">
          <h1 className="text-2xl">CC — Career Code</h1>
          <p>
            Career Code helps you discover opportunities, build your career, and
            connect with the right jobs. Sign up today and take the next step in
            your professional journey
          </p>
        </div>
        <div className="space-y-4 flex flex-col">
          <h1 className="text-2xl">Company</h1>
          <a href="#">About Us</a>
          <a href="#">Our Mission</a>
          <a href="#">Contact Saled</a>
        </div>
        <div className="space-y-4 flex flex-col">
          <h1 className="text-2xl">Services</h1>
          <a href="#">Products & Services</a>
          <a href="#">Customer Stories</a>
          <a href="#">Download Apps</a>
        </div>
        <div className="space-y-4 flex flex-col">
          <h1 className="text-2xl">Information</h1>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Join Us </a>
        </div>
        <div className="space-y-4 flex flex-col">
          <h1 className="text-2xl">Social Links</h1>
          <a href="#" className="flex gap-1">
            <Facebook />
            @CC—Facebook/Code
          </a>
          <a href="#" className="flex gap-1">
            <Linkedin />
            @CC—Career Code/linkedin
          </a>

          <a href="#">@CC — Career Code </a>
          <a href="#">@CC — Career Code </a>
        </div>
      </div>
      <div className="text-left md:text-center text-gray-500 text-sm mt-8">
        © 2025 CC — Career Code. <br className="block md:hidden" /> All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
