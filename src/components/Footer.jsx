import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import logo from '../assets/images/chemico-logo-removebg-preview.png';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-12 sm:pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
                    {/* Company Info */}
                    <div className="space-y-5 sm:space-y-6">
                        <div className="flex items-center">
                            <img src={logo} alt="Chemico Industries Logo" className="h-8 w-auto object-contain brightness-0 invert" />
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Leading manufacturer and exporter of specialty chemicals, providing sustainable solutions for global industries since 1995.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors"><Twitter className="h-4 w-4" /></a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors"><Linkedin className="h-4 w-4" /></a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors"><Facebook className="h-4 w-4" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h4>
                        <ul className="space-y-3 sm:space-y-4 text-white/60 text-sm">
                            <li><Link to="/about" className="hover:text-secondary transition-colors">About Company</Link></li>
                            <li><Link to="/products" className="hover:text-secondary transition-colors">Our Products</Link></li>
                            <li><Link to="/why-us" className="hover:text-secondary transition-colors">Why Choose Us</Link></li>
                            <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Support</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4 sm:space-y-6">
                        <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Us</h4>
                        <div className="flex items-start space-x-3 text-white/60 text-sm">
                            <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                            <a
                                href="https://www.google.com/maps?q=PLOT+NO.+S-203-MLS3,+Chemico+Industries,+GIDC+Multilevel+Shed,+opp.+Surya+Lifesciences+Ltd,+Brahmanpuri,+Ankleshwar+GIDC,+Ankleshwar,+Gujarat+393002"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-secondary transition-colors"
                            >
                                PLOT NO. S-203-MLS3, Chemico Industries, GIDC Multilevel Shed, opp. Surya Lifesciences Ltd, Brahmanpuri, Ankleshwar GIDC, Ankleshwar, Gujarat 393002
                            </a>
                        </div>
                        <div className="flex items-center space-x-3 text-white/60 text-sm">
                            <Phone className="h-5 w-5 text-secondary shrink-0" />
                            <span>+91 76218 19777</span>
                        </div>
                        <div className="flex items-center space-x-3 text-white/60 text-sm">
                            <Mail className="h-5 w-5 text-secondary shrink-0" />
                            <span className="break-all">info@chemico-industries.com</span>
                        </div>
                    </div>

                    {/* Location Map */}
                    <div className="space-y-4 sm:space-y-6">
                        <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Our Location</h4>
                        <div className="w-full h-40 sm:h-48 rounded-xl overflow-hidden border border-white/10 transition-all duration-500 shadow-lg">
                            <iframe
                                src="https://maps.google.com/maps?q=Chemico+Industries+Ankleshwar&z=15&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-white/40 text-xs text-center sm:text-left">
                    <p>© 2024 Chemico Industries. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
