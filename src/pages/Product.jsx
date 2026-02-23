import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, FlaskConical, Sprout, Droplets, Hexagon, ExternalLink } from 'lucide-react';

const Product = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const productCategories = [
        { title: 'All', icon: <Filter className="h-4 w-4" /> },
        { title: 'Fertilizer & NPK Materials', icon: <Sprout className="h-4 w-4" /> },
        { title: 'Micronutrients', icon: <Droplets className="h-4 w-4" /> },
        { title: 'Carbonates & Inorganic Compounds', icon: <Hexagon className="h-4 w-4" /> },
        { title: 'Industrial & Specialty Chemicals', icon: <FlaskConical className="h-4 w-4" /> },
    ];

    const products = [
        // Fertilizer & NPK Materials
        { name: 'Ammonium Sulphate', grade: 'Crystalline/Granular', purity: '21% Nitrogen', application: 'Agricultural Fertilizer', category: 'Fertilizer & NPK Materials' },
        { name: 'Potassium Chloride', grade: 'NPK Use', purity: '60% K2O', application: 'Fertilizer Blending', category: 'Fertilizer & NPK Materials' },
        { name: 'Potassium Sulphate', grade: 'Water Soluble', purity: '50% K2O', application: 'Fertigation / Foliar', category: 'Fertilizer & NPK Materials' },
        { name: 'Raw Phosphorus', grade: 'Industrial', purity: '99%+', application: 'Chemical Synthesis', category: 'Fertilizer & NPK Materials' },
        { name: 'Phosphoric Acid', grade: 'Technical/Food', purity: '85%', application: 'Phosphate Fertilizer', category: 'Fertilizer & NPK Materials' },
        { name: 'Sulphur Pallets', grade: 'High Purity', purity: '99.9%', application: 'Soil Amendment / Acid Plant', category: 'Fertilizer & NPK Materials' },

        // Micronutrients
        { name: 'Zinc Sulphate', grade: 'Mono/Hepta', purity: '21% / 33% Zn', application: 'Zinc Deficiency Correction', category: 'Micronutrients' },
        { name: 'Copper Sulphate', grade: 'Technical', purity: '24% Cu', application: 'Fungicides / Feed Additive', category: 'Micronutrients' },
        { name: 'Ferrous Sulphate', grade: 'Heptahydrate', purity: '19% Fe', application: 'Iron Source for Soil', category: 'Micronutrients' },
        { name: 'Manganese Sulphate', grade: 'Liquid/Powder', purity: '30.5% Mn', application: 'Plant Growth Regulator', category: 'Micronutrients' },
        { name: 'Magnesium Sulphate', grade: 'Epsom Salt', purity: '9.6% Mg', application: 'Chlorophyll Production', category: 'Micronutrients' },
        { name: 'Sodium Sulphate', grade: 'Micronutrient Use', purity: '99%', application: 'Filler in Micronutrients', category: 'Micronutrients' },
        { name: 'Micronutrient Materials', grade: 'Custom Mix', purity: 'Multi-Element', application: 'Zn, Copper, Boron Blends', category: 'Micronutrients' },

        // Carbonates & Inorganic Compounds
        { name: 'Potassium Carbonate', grade: 'Technical', purity: '99%', application: 'Glass / Fertilizer Mfg', category: 'Carbonates & Inorganic Compounds' },
        { name: 'Manganese Carbonate', grade: 'Industrial', purity: '44% Mn', application: 'Pigments / Fertilizers', category: 'Carbonates & Inorganic Compounds' },
        { name: 'Magnesium Carbonate', grade: 'Light/Heavy', purity: '40-45% MgO', application: 'Industrial Applications', category: 'Carbonates & Inorganic Compounds' },
        { name: 'Ferrous Carbonate', grade: 'Technical', purity: '38% Fe', application: 'Animal Feed / Soil', category: 'Carbonates & Inorganic Compounds' },
        { name: 'Carbon', grade: 'Activated/Industrial', purity: 'High Surface Area', application: 'Water Treatment / Purification', category: 'Carbonates & Inorganic Compounds' },
        { name: 'Potash Based Inorganic Materials', grade: 'Technical', purity: '98%+', application: 'Specialty Inorganics', category: 'Carbonates & Inorganic Compounds' },

        // Industrial & Specialty Chemicals
        { name: 'Nitro based organic compounds', grade: 'Technical', purity: '98%+', application: 'Dye / Pharma Intermediate', category: 'Industrial & Specialty Chemicals' },
        { name: 'Calcium Chloride & Calcium Sulphate', grade: 'Industrial/Fused', purity: 'High Purity', application: 'De-icing / Construction / Soil Stabilizer', category: 'Industrial & Specialty Chemicals' },
    ];

    const filteredProducts = products.filter(p => {
        const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-surface min-h-screen">
            {/* Search & Category Header */}
            <section className="bg-primary text-white py-12 sm:py-16">
                <div className="container-custom">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Our Product Portfolio</h1>

                    <div className="flex flex-col gap-4 mb-6">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 h-5 w-5" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search chemicals by name..."
                                className="w-full bg-white/10 border border-white/20 rounded-xl py-3 sm:py-4 pl-12 pr-4 focus:outline-none focus:border-secondary transition-colors text-sm sm:text-base"
                            />
                        </div>
                    </div>

                    {/* Horizontally scrollable category buttons on mobile */}
                    <div className="flex overflow-x-auto pb-2 gap-2 sm:flex-wrap sm:overflow-visible scrollbar-hide">
                        {productCategories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveCategory(cat.title)}
                                className={`flex items-center shrink-0 space-x-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${activeCategory === cat.title
                                    ? 'bg-secondary text-white border-secondary shadow-lg shadow-secondary/20'
                                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                                    }`}
                            >
                                {cat.icon}
                                <span>{cat.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {filteredProducts.map((prod, idx) => (
                            <motion.div
                                key={`${activeCategory}-${idx}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white p-5 sm:p-6 rounded-2xl border border-primary/5 shadow-sm hover:shadow-xl hover:border-secondary/20 transition-all group"
                            >
                                <div className="flex justify-between items-start mb-4 sm:mb-6">
                                    <div className="h-10 w-10 sm:h-12 sm:w-12 bg-chemical-bg rounded-lg flex items-center justify-center text-primary/40 group-hover:text-secondary group-hover:bg-secondary/10 transition-colors">
                                        <FlaskConical className="h-5 w-5 sm:h-6 sm:w-6" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary text-white/80 rounded-md">
                                        {prod.grade}
                                    </span>
                                </div>

                                <h3 className="text-base sm:text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{prod.name}</h3>
                                <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-secondary mb-4">
                                    <span>Purity: {prod.purity}</span>
                                    <span className="h-1 w-1 bg-primary/20 rounded-full hidden sm:block"></span>
                                    <span className="text-primary/50 font-normal">{prod.category}</span>
                                </div>

                                <div className="pt-4 border-t border-primary/5">
                                    <p className="text-sm text-primary/50 mb-4 sm:mb-6">
                                        <span className="font-bold text-primary/70">Typical Use:</span> {prod.application}
                                    </p>

                                    <button className="w-full py-2.5 sm:py-3 border border-secondary text-secondary font-bold rounded-xl hover:bg-secondary hover:text-white transition-all flex items-center justify-center text-sm sm:text-base">
                                        MSDS / Specification <ExternalLink className="ml-2 h-4 w-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-primary/40 italic">No products found in this category.</p>
                        </div>
                    )}

                </div>
            </section>
        </div>
    );
};

export default Product;
