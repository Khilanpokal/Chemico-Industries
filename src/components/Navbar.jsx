import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import logo from '../assets/images/chemico-logo-removebg-preview.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Why Us', path: '/why-us' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="glass-nav fixed w-full z-50 top-0 left-0">
            <div className="container-custom">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="Chemico Industries Logo" className="h-10 w-auto object-contain" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-secondary ${location.pathname === link.path ? 'text-secondary font-bold' : 'text-primary/70'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" className="btn-primary flex items-center">
                            Inquiry <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-primary hover:text-secondary"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[-1] md:hidden transition-opacity duration-300"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-surface border-b border-primary/10 animate-in slide-in-from-top duration-300 overflow-hidden shadow-2xl">
                    <div className="px-6 pt-4 pb-10 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center justify-between px-4 py-4 rounded-xl text-lg font-semibold transition-all ${location.pathname === link.path
                                        ? 'bg-secondary/10 text-secondary'
                                        : 'text-primary/70 hover:bg-primary/5 hover:text-secondary'
                                    }`}
                            >
                                <span>{link.name}</span>
                                <ChevronRight className={`h-5 w-5 opacity-50 ${location.pathname === link.path ? 'opacity-100' : ''}`} />
                            </Link>
                        ))}
                        <div className="pt-6">
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="btn-primary w-full py-4 rounded-2xl flex items-center justify-center text-lg font-bold shadow-lg shadow-secondary/20 active:scale-95 transition-transform"
                            >
                                Send Inquiry <ChevronRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
