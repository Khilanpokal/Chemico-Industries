import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Beaker, ShieldCheck, Globe, FlaskConical, Sprout, Droplets, Microscope, TestTube, Atom, Orbit, Hexagon, Pipette } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/images/hero-video.mp4';

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[95vh] flex items-center justify-center bg-primary text-white overflow-hidden py-20">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-40"
                    >
                        <source src={heroVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-primary/40"></div>
                </div>

                {/* Modern Mesh Gradient Background Overlay */}
                <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
                    <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-[100px] animate-bounce duration-[10s]"></div>
                    <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[150px]"></div>
                    <div className="absolute inset-0 chemical-pattern opacity-10"></div>
                </div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="inline-flex items-center space-x-2 px-4 py-2 mb-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-full"
                        >
                            <div className="h-2 w-2 bg-secondary rounded-full animate-ping"></div>
                            <span className="text-xs font-bold tracking-[0.2em] text-secondary uppercase">
                                Manufacturing of specialty chemicals
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-4xl sm:text-7xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tight"
                        >
                            <span className="block">Precision Chemicals</span>
                            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Global Reach</span>
                        </motion.h1>

                        <motion.p
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-base sm:text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
                        >
                            Chemico Industries provides high-purity chemical solutions and global logistics for tomorrow's industrial breakthroughs.
                        </motion.p>

                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                        >
                            <Link to="/products" className="w-full sm:w-auto group relative px-8 py-4 sm:px-10 sm:py-5 bg-secondary text-white font-bold rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(13,148,136,0.3)] text-center">
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                <span className="relative flex items-center justify-center">
                                    Explore Catalog <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                            <Link to="/about" className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 rounded-2xl font-bold transition-all text-center text-white/90">
                                Our Heritage
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Floating Abstract Chemical Structure Elements */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-[5%] top-[20%] opacity-20 hidden lg:block"
                >
                    <FlaskConical className="h-32 w-32 text-secondary" />
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-[8%] bottom-[15%] opacity-20 hidden lg:block"
                >
                    <Beaker className="h-40 w-40 text-accent" />
                </motion.div>
            </section>


            {/* Core Specialties */}
            <section className="section-padding bg-chemical-bg/30">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">Industrial Excellence</h2>
                        <p className="text-lg text-primary/60">Our state-of-the-art facilities and R&D centers are dedicated to creating high-purity chemical compounds for global requirements.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Quality Assurance',
                                desc: 'Rigorous testing protocols ensuring 99.9% purity levels across all chemical batches.',
                                icon: <ShieldCheck className="h-8 w-8" />,
                            },
                            {
                                title: 'Sustainable Innovation',
                                desc: 'Developing eco-friendly chemical processes that minimize environmental footprint.',
                                icon: <Beaker className="h-8 w-8" />,
                            },
                            {
                                title: 'Global Export',
                                desc: 'End-to-end logistics support for hazardous and non-hazardous materials worldwide.',
                                icon: <Globe className="h-8 w-8" />,
                            },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-primary/5 hover:shadow-xl transition-all"
                            >
                                <div className="h-12 w-12 md:h-14 md:w-14 bg-secondary/10 flex items-center justify-center rounded-xl text-secondary mb-6">
                                    {React.cloneElement(feature.icon, { className: 'h-6 w-6 md:h-8 md:w-8' })}
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-primary mb-4">{feature.title}</h3>
                                <p className="text-primary/60 leading-relaxed text-sm">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Categories Section */}
            <section className="section-padding bg-surface relative overflow-hidden mesh-gradient">
                <div className="absolute inset-0 molecular-grid opacity-30"></div>

                {/* Floating Decorative Icons & Bubbles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Particles/Bubbles Simulation */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={`bubble-${i}`}
                            initial={{
                                opacity: 0,
                                y: "110%",
                                x: `${10 + (Math.random() * 80)}%`
                            }}
                            animate={{
                                opacity: [0, 0.3, 0],
                                y: "-10%",
                                x: [`${(10 + Math.random() * 80)}%`, `${(20 + Math.random() * 60)}%`]
                            }}
                            transition={{
                                duration: 10 + Math.random() * 15,
                                repeat: Infinity,
                                delay: Math.random() * 20,
                                ease: "linear"
                            }}
                            className="absolute w-2 h-2 rounded-full bg-secondary/20 blur-[1px]"
                        />
                    ))}

                    <motion.div
                        animate={{
                            y: [0, -60, 20, 0],
                            x: [0, 30, -20, 0],
                            rotate: [0, 180, 360]
                        }}
                        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[5%] left-[10%] text-secondary/10"
                    >
                        <Atom className="h-28 w-28" />
                    </motion.div>

                    <motion.div
                        animate={{
                            y: [0, 40, -40, 0],
                            x: [0, -40, 40, 0],
                            rotate: [0, -180, -360]
                        }}
                        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-[15%] right-[5%] text-accent/10"
                    >
                        <Orbit className="h-36 w-36" />
                    </motion.div>

                    <motion.div
                        animate={{
                            scale: [1, 1.3, 0.9, 1],
                            rotate: [0, 45, -45, 0],
                            opacity: [0.03, 0.08, 0.03]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[35%] right-[10%] text-secondary/5"
                    >
                        <Beaker className="h-48 w-48" />
                    </motion.div>

                    <motion.div
                        animate={{
                            y: [0, -30, 0],
                            rotate: [15, -15, 15],
                            opacity: [0.05, 0.1, 0.05]
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-[30%] left-[5%] text-accent/10"
                    >
                        <FlaskConical className="h-20 w-20" />
                    </motion.div>

                    <motion.div
                        animate={{
                            x: [0, 20, -20, 0],
                            y: [0, 20, -20, 0],
                            rotate: [45, 135, 45]
                        }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[60%] left-[20%] text-secondary/5"
                    >
                        <Pipette className="h-16 w-16" />
                    </motion.div>

                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 360],
                            opacity: [0.05, 0.1, 0.05]
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[20%] right-[30%] text-secondary/10"
                    >
                        <Hexagon className="h-24 w-24" />
                    </motion.div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 mb-4 bg-secondary/10 rounded-full text-secondary text-sm font-bold tracking-wider uppercase backdrop-blur-sm border border-secondary/20"
                        >
                            Our Expertise
                        </motion.div>
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">Product Categories</h2>
                        <p className="text-lg text-primary/60">Comprehensive chemical solutions tailored for diverse industrial and agricultural applications.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: 'Industrial Chemicals',
                                icon: <TestTube className="h-6 w-6" />,
                                products: ['Sulfuric Acid', 'Acetic Acid', 'PAC Powder'],
                                color: 'bg-blue-500/10 text-blue-600',
                                border: 'hover:border-blue-500/30'
                            },
                            {
                                title: 'Fertilizer & Agri',
                                icon: <Sprout className="h-6 w-6" />,
                                products: ['Ammonium Sulphate', 'Potassium Chloride'],
                                color: 'bg-green-500/10 text-green-600',
                                border: 'hover:border-green-500/30'
                            },
                            {
                                title: 'Water Treatment',
                                icon: <Droplets className="h-6 w-6" />,
                                products: ['PAC Powder', 'Calcium Chloride'],
                                color: 'bg-cyan-500/10 text-cyan-600',
                                border: 'hover:border-cyan-500/30'
                            },
                            {
                                title: 'Specialty & Inorganic',
                                icon: <Microscope className="h-6 w-6" />,
                                products: ['Zinc Hydroxide', 'Sodium Sulphate'],
                                color: 'bg-purple-500/10 text-purple-600',
                                border: 'hover:border-purple-500/30'
                            },
                        ].map((cat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                                className={`group p-8 bg-white/40 backdrop-blur-md rounded-3xl border border-white/50 hover:shadow-2xl transition-all duration-500 ${cat.border} relative overflow-hidden`}
                            >
                                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl"></div>

                                <div className={`h-12 w-12 md:h-14 md:w-14 ${cat.color} flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                                    {React.cloneElement(cat.icon, { className: 'h-5 w-5 md:h-6 md:w-6' })}
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-primary mb-4 md:mb-6 leading-tight">{cat.title}</h3>
                                <ul className="space-y-3">
                                    {cat.products.map((prod, idx) => (
                                        <li key={idx} className="flex items-center text-primary/70 text-sm">
                                            <div className="h-1.5 w-1.5 bg-secondary rounded-full mr-3 opacity-60"></div>
                                            {prod}
                                        </li>
                                    ))}
                                </ul>
                                <motion.div
                                    className="pt-6 mt-6 border-t border-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <Link to="/products" className="text-secondary text-xs font-bold uppercase tracking-widest flex items-center">
                                        View Details <ArrowRight className="ml-2 h-3 w-3" />
                                    </Link>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding overflow-hidden relative">
                <div className="container-custom">
                    <div className="bg-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-16 relative overflow-hidden flex flex-col items-center text-center">
                        <div className="absolute top-0 right-0 h-full w-1/3 bg-secondary/20 skew-x-12"></div>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-8 max-w-2xl relative z-10">
                            Ready to transform your industrial processes?
                        </h2>
                        <p className="text-white/60 mb-6 sm:mb-10 max-w-xl relative z-10 text-sm sm:text-base">
                            Contact our experts today for a custom chemical consultation and bulk pricing details.
                        </p>
                        <Link to="/contact" className="btn-primary text-base sm:text-lg font-bold px-8 sm:px-12 py-3 sm:py-4 relative z-10">
                            Get a Professional Quote
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
