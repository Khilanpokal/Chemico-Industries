import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Globe, ShieldCheck } from 'lucide-react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        companyName: '',
        inquiryType: 'General Inquiry',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const whatsappNumber = '9157938445';
        const messageHeader = `Industrial Inquiry for Chemico Industries`;
        const messageBody = `*Full Name:* ${formData.fullName}\n*Email:* ${formData.email}\n*Company:* ${formData.companyName}\n*Inquiry Type:* ${formData.inquiryType}\n*Message:* ${formData.message}`;

        const fullMessage = `${messageHeader}\n\n${messageBody}`;
        const encodedMessage = encodeURIComponent(fullMessage);

        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className="bg-surface min-h-screen">
            {/* Header */}
            <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
                <div className="container-custom relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6"
                    >
                        Connect With Our Experts
                    </motion.h1>
                    <p className="text-base sm:text-xl text-white/60 max-w-2xl mx-auto px-4">
                        Whether you have a technical query or a volume inquiry, our global team is ready to assist you.
                    </p>
                </div>
                <div className="absolute inset-0 chemical-pattern opacity-5"></div>
            </section>

            {/* Main Contact Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Left Column: Contact Details */}
                        <div className="lg:col-span-1 space-y-6 sm:space-y-8">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-8">Get In Touch</h2>
                                <p className="text-primary/60 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                                    Our corporate headquarters and manufacturing facilities are located in the heart of the industrial chemical zone.
                                </p>
                            </div>

                            <div className="space-y-4 sm:space-y-6">
                                {[
                                    { icon: <MapPin className="text-secondary h-5 w-5" />, title: 'Office Address', detail: 'PLOT NO. S-307-MLS3, Chemico Industries, GIDC Multilevel Shed, opp. Surya Lifesciences Ltd, Brahmanpuri, Ankleshwar GIDC, Ankleshwar, Gujarat 393002' },
                                    { icon: <Phone className="text-secondary h-5 w-5" />, title: 'Contact Number', detail: '+91 76218 19777' },
                                    { icon: <ShieldCheck className="text-secondary h-5 w-5" />, title: 'GSTIN', detail: '24BLOPJ4514J1Z0' },
                                    { icon: <Mail className="text-secondary h-5 w-5" />, title: 'Inquiries', detail: 'info@chemico-industries.com' },
                                    { icon: <Clock className="text-secondary h-5 w-5" />, title: 'Business Hours', detail: 'Mon - Sat: 9:00 AM - 6:00 PM (IST)' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start space-x-4 p-3 sm:p-4 bg-white rounded-xl border border-primary/5 hover:border-secondary/20 transition-all shadow-sm">
                                        <div className="shrink-0 mt-0.5">{item.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-primary text-xs sm:text-sm uppercase tracking-wider">{item.title}</h4>
                                            <p className="text-primary/60 text-xs sm:text-sm mt-1">{item.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-4 sm:pt-8">
                                <h4 className="font-bold text-primary mb-4">Export Desk</h4>
                                <div className="flex items-center space-x-2 text-secondary font-bold">
                                    <Globe className="h-5 w-5 shrink-0" />
                                    <a href="mailto:export@chemico-industries.com" className="hover:underline text-sm sm:text-base break-all">chemicoindustries.ac@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Inquiry Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl sm:rounded-[2rem] shadow-2xl overflow-hidden border border-primary/5">
                                <div className="bg-secondary/10 p-6 sm:p-8 border-b border-secondary/10">
                                    <h3 className="text-xl sm:text-2xl font-bold text-primary">Industrial Inquiry Form</h3>
                                    <p className="text-primary/50 text-sm mt-2">Required fields are marked with an asterisk (*)</p>
                                </div>
                                <form className="p-6 sm:p-8 md:p-12" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 mb-6 sm:mb-8">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary/70 block">Full Name *</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                required
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className="w-full bg-surface border border-primary/10 rounded-xl py-3 sm:py-4 px-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-sm sm:text-base"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary/70 block">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-surface border border-primary/10 rounded-xl py-3 sm:py-4 px-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-sm sm:text-base"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary/70 block">Company Name *</label>
                                            <input
                                                type="text"
                                                name="companyName"
                                                required
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                className="w-full bg-surface border border-primary/10 rounded-xl py-3 sm:py-4 px-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-sm sm:text-base"
                                                placeholder="Acme Chemicals Ltd."
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary/70 block">Inquiry Type</label>
                                            <select
                                                name="inquiryType"
                                                value={formData.inquiryType}
                                                onChange={handleChange}
                                                className="w-full bg-surface border border-primary/10 rounded-xl py-3 sm:py-4 px-4 focus:outline-none focus:border-secondary transition-all appearance-none cursor-pointer text-sm sm:text-base"
                                            >
                                                <option>General Inquiry</option>
                                                <option>Product Bulk Pricing</option>
                                                <option>Export Requirements</option>
                                                <option>Custom Manufacturing</option>
                                                <option>Technical Data Sheet</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-6 sm:mb-8">
                                        <label className="text-sm font-bold text-primary/70 block">Message / Requirements *</label>
                                        <textarea
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className="w-full bg-surface border border-primary/10 rounded-xl py-3 sm:py-4 px-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-sm sm:text-base"
                                            placeholder="Please describe your chemical requirements in detail..."
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="w-full btn-primary py-4 sm:py-5 text-base sm:text-lg font-bold flex items-center justify-center rounded-xl sm:rounded-2xl">
                                        Submit Final Inquiry <Send className="ml-2 h-5 w-5" />
                                    </button>

                                    <p className="text-center mt-6 text-xs text-primary/40 italic">
                                        By submitting this form, you agree to our privacy policy regarding the handling of your data.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
