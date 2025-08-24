import { Link } from "react-router-dom";
import { Car, Mail, Phone, MapPin, Instagram } from "lucide-react";
import { SOCIAL_LINKS } from "../../pages/constant/sociallinks"

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-primary rounded-lg">
                <Car className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Wheelvise</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Making vehicle decisions simple and smart. Find the perfect car or bike 
              that fits your budget, lifestyle, and preferences.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                gauravjangra936@gmail.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recommendations" className="text-muted-foreground hover:text-primary transition-colors">
                  Recommendations
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-muted-foreground hover:text-primary transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Instagram */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
            <Instagram className="h-6 w-6 text-pink-500 hover:text-pink-400" />
          </a>
          <span className="text-muted-foreground font-medium">@revwithgaurav</span>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-4 pt-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Wheelvise. All rights reserved. Making smart vehicle choices easier.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
