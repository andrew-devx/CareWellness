import { motion } from "framer-motion";
import { BadgeCheck, PlayCircle, CheckCircle } from "lucide-react";
import { openBookingModal } from "../lib/modalEvents";

// Cubic-bezier arrays sidestep Framer Motion v12 strict Easing string-literal typing
const EASE_OUT = [0, 0, 0.58, 1] as const;
const EASE_BACK = [0.34, 1.56, 0.64, 1] as const;

export default function Hero() {
    return (
        <section className="medical-gradient relative overflow-hidden px-6 py-16 lg:px-10 lg:py-24">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row">
                {/* Text Side */}
                <div className="flex flex-1 flex-col gap-7 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0, ease: EASE_OUT }}
                        className="inline-flex items-center self-center lg:self-start gap-2 rounded-full bg-[color:var(--color-primary)]/10 px-4 py-1.5 text-sm font-bold text-[color:var(--color-primary)]"
                    >
                        <BadgeCheck className="h-4 w-4" />
                        Rated 4.9/5 by over 10,000+ patients
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
                        className="text-5xl font-black leading-tight tracking-tight text-slate-900 lg:text-7xl"
                    >
                        World-Class Healthcare,{" "}
                        <br className="hidden lg:block" />
                        <span className="text-[color:var(--color-primary)]">Designed Around You.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: EASE_OUT }}
                        className="max-w-2xl text-lg leading-relaxed text-slate-600"
                    >
                        Experience a new standard of medical excellence. We combine cutting-edge technology
                        with compassionate care to ensure you and your family receive the best treatment possible.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: EASE_OUT }}
                        className="flex flex-wrap justify-center gap-4 lg:justify-start"
                    >
                        <button
                            onClick={openBookingModal}
                            className="flex min-w-[180px] items-center justify-center rounded-xl bg-[color:var(--color-primary)] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[color:var(--color-primary)]/30 transition-transform hover:scale-105"
                        >
                            Schedule Your Visit
                        </button>
                        <button
                            onClick={openBookingModal}
                            className="flex min-w-[180px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-900 transition-colors hover:bg-slate-50"
                        >
                            <PlayCircle className="h-5 w-5 text-[color:var(--color-primary)]" />
                            Watch Facility Tour
                        </button>
                    </motion.div>
                </div>

                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: EASE_OUT }}
                    className="relative flex-1"
                >
                    <div className="aspect-square w-full max-w-[500px] overflow-hidden rounded-3xl shadow-2xl mx-auto">
                        <img
                            alt="Professional doctor in a modern clinic"
                            className="h-full w-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDajwrxcxQ8mOnrSlpV7aL2CYsGim_2qPOP_S1g2bhgDfflGV_YgOqSc5bnus13hyZNqUYg5uboXap82geZDrGWfa5JLgp_Z7g97b5M7tKXv420qYhrPpNfhz8duDDGi-x2u2WMel-UOO_eHD20CrjaPha___0Xl5TImdH44B5S1jwpvl1Ll2vVjgx9aoepZv8KOw-_eKh1uWkHlddcDti820ztCoNLx-VDGoioF2avZHgyblMIcd6P-WIKE9_owtjBd_XsQUYI8Q"
                            width={500}
                            height={500}
                        />
                    </div>

                    {/* Floating badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.7, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8, ease: EASE_BACK }}
                        className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-xl lg:block"
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <CheckCircle className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Success Rate</p>
                                <p className="text-xl font-black text-slate-900">99.2% Positive</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
