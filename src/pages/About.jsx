import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Factory, Award } from 'lucide-react';

import aboutImage from '../assets/images/about-chemico.jpg';

const About = () => {
    return (
        <div className="bg-surface min-h-screen">
            {/* Header section */}
            <section className="bg-primary text-white py-16 sm:py-20 relative overflow-hidden">
                <div className="container-custom relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6"
                    >
                        About Chemico Industries
                    </motion.h1>
                    <p className="text-base sm:text-xl text-white/60 max-w-2xl mx-auto px-4">
                        A legacy of excellence in chemical manufacturing and global exports since 1995.
                    </p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
                </div>
            </section>

            {/* Origin Story */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative p-4"
                        >
                            <div className="aspect-square bg-chemical-bg rounded-3xl overflow-hidden relative shadow-2xl">
                                <img
                                    src={aboutImage}
                                    alt="Chemico Industries Facility"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                            </div>
                            {/* Stats badge - visible on md+ only */}
                            <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-secondary p-5 sm:p-8 rounded-2xl text-white shadow-xl hidden md:block">
                                <p className="text-3xl sm:text-4xl font-bold">25+</p>
                                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Years of Heritage</p>
                            </div>
                        </motion.div>

                        {/* Stats row for mobile */}
                        <div className="flex justify-center md:hidden">
                            <div className="bg-secondary px-8 py-4 rounded-2xl text-white shadow-xl flex items-center gap-4">
                                <p className="text-3xl font-bold">25+</p>
                                <p className="text-sm font-semibold uppercase tracking-wider">Years of Heritage</p>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Our Journey</span>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-6 sm:mb-8 leading-tight">
                                From Local Lab to Global Industrial Leader
                            </h2>
                            <p className="text-primary/70 text-base sm:text-lg mb-6 leading-relaxed">
                                Chemico Industries started in a small facility with a vision to revolutionize the availability of high-purity specialty chemicals in the region. Over the decades, we have evolved into a major manufacturing hub with automated processes and international quality certifications.
                            </p>
                            <p className="text-primary/70 text-base sm:text-lg mb-8 leading-relaxed">
                                Our commitment to "Innovation with Integrity" has allowed us to partner with leading MNCs in pharmaceuticals, agriculture, and material science, delivering solutions that are both effective and environmentally responsible.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                                <div>
                                    <h4 className="font-bold text-primary mb-2 flex items-center">
                                        <Target className="h-5 w-5 text-secondary mr-2 shrink-0" /> Our Mission
                                    </h4>
                                    <p className="text-sm text-primary/60">To provide high-quality chemical solutions that empower global industries while maintaining sustainable practices.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary mb-2 flex items-center">
                                        <Users className="h-5 w-5 text-secondary mr-2 shrink-0" /> Our Values
                                    </h4>
                                    <p className="text-sm text-primary/60">Reliability, safety, transparency, and continuous innovation in everything we manufacture.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Achievements / Credentials */}
            <section className="section-padding bg-primary/5">
                <div className="container-custom">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-primary">Certifications &amp; Standards</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                        {[
                            { label: 'ISO 9001:2015', icon: <Award /> },
                            { label: 'GMP Certified', icon: <Award /> },
                            { label: 'REACH Compliant', icon: <Award /> },
                            { label: 'OSHA Safety', icon: <Award /> },
                        ].map((cert, i) => (
                            <div key={i} className="bg-white p-4 sm:p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
                                <div className="p-3 bg-secondary/10 rounded-full text-secondary mb-4">
                                    {cert.icon}
                                </div>
                                <span className="font-bold text-primary text-sm sm:text-base">{cert.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
