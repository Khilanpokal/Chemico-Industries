import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Zap, Headphones, BarChart, FlaskConical } from 'lucide-react';

const WhyChooseUs = () => {
    const reasons = [
        {
            title: 'Uncompromising Quality',
            desc: 'Our chemicals undergo multi-stage testing in ISO-certified labs to ensure they meet the highest global standards.',
            icon: <ShieldCheck className="h-8 w-8 sm:h-10 sm:w-10" />,
            color: 'bg-emerald-500/10 text-emerald-600',
        },
        {
            title: 'Reliable Supply Chain',
            desc: 'Strategically located facilities and robust logistics network ensure on-time delivery, even for urgent industrial requirements.',
            icon: <Truck className="h-8 w-8 sm:h-10 sm:w-10" />,
            color: 'bg-blue-500/10 text-blue-600',
        },
        {
            title: 'R&D Excellence',
            desc: 'Continuous investment in research allows us to develop custom formulations tailored to specific client processes.',
            icon: <FlaskConical className="h-8 w-8 sm:h-10 sm:w-10" />,
            color: 'bg-purple-500/10 text-purple-600',
        },
        {
            title: 'Competitive Industry Pricing',
            desc: 'Optimized manufacturing processes allow us to offer premium quality products at highly competitive market rates.',
            icon: <BarChart className="h-8 w-8 sm:h-10 sm:w-10" />,
            color: 'bg-amber-500/10 text-amber-600',
        },
        {
            title: 'Scalable Solutions',
            desc: 'From pilot-scale requirements to high-volume industrial supplies, we scale our production to meet your growth.',
            icon: <Zap className="h-8 w-8 sm:h-10 sm:w-10" />,
            color: 'bg-rose-500/10 text-rose-600',
        },
        {
            title: 'Expert Technical Support',
            desc: 'Our team of PhD chemists and engineers provides comprehensive technical guidance on product application.',
            icon: <Headphones className="h-8 w-8 sm:h-10 sm:w-10" />,
            color: 'bg-cyan-500/10 text-cyan-600',
        },
    ];

    return (
        <div className="bg-surface min-h-screen">
            {/* Header */}
            <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
                            Why Industry Leaders Choose{' '}
                            <span className="text-secondary">Chemico</span>
                        </h1>
                        <p className="text-base sm:text-xl text-white/60 leading-relaxed">
                            Beyond just manufacturing chemicals, we build partnerships based on trust, quality, and mutual growth.
                        </p>
                    </motion.div>
                </div>
                <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"></div>
            </section>

            {/* Reasons Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                        {reasons.map((reason, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-6 sm:p-10 bg-white rounded-3xl border border-primary/5 shadow-sm hover:shadow-2xl transition-all duration-500"
                            >
                                <div className={`h-16 w-16 sm:h-20 sm:w-20 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-500 ${reason.color}`}>
                                    {reason.icon}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4 group-hover:text-secondary transition-colors">{reason.title}</h3>
                                <p className="text-primary/60 leading-relaxed text-sm sm:text-base">
                                    {reason.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="section-padding bg-chemical-bg/20">
                <div className="container-custom">
                    <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 md:p-16 shadow-xl border border-primary/5 overflow-hidden relative">
                        <div className="absolute top-0 right-0 h-full w-2 bg-secondary"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                            <div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6 sm:mb-8">The Chemico Advantage</h2>
                                <p className="text-base sm:text-lg text-primary/70 mb-8 sm:mb-10 leading-relaxed">
                                    We don't just sell chemicals; we solve complex industrial challenges with precision engineering and global logistics expertise.
                                </p>

                                <ul className="space-y-4 sm:space-y-6">
                                    {[
                                        'Direct Factory-to-Client Pricing',
                                        'Real-time Logistics Tracking',
                                        'Custom Chemical Synthesis Capability',
                                        'Zero-Tolerance Quality Control'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center space-x-3 sm:space-x-4">
                                            <div className="h-6 w-6 rounded-full bg-secondary text-white flex items-center justify-center shrink-0">
                                                <ShieldCheck className="h-4 w-4" />
                                            </div>
                                            <span className="font-bold text-primary text-sm sm:text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative">
                                <div className="aspect-video bg-primary/90 rounded-2xl flex items-center justify-center text-white/10 overflow-hidden relative group">
                                    <BarChart className="h-24 w-24 sm:h-32 sm:w-32 group-hover:scale-125 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChooseUs;
