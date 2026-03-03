import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    CalendarCheck,
    User,
    Mail,
    Phone,
    Stethoscope,
    Calendar,
    WifiOff,
} from "lucide-react";

type Step = "form" | "unavailable";

const departments = [
    "Executive Wellness",
    "Cardiology",
    "Oncology",
    "Orthopedics",
    "Pediatrics",
    "Diagnostic Imaging",
    "Neurology",
    "Obstetrics & Gynecology",
    "Emergency Care",
    "Rehabilitation",
];

const EASE_OUT = [0, 0, 0.58, 1] as const;

const overlay = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

const panel = {
    hidden: { opacity: 0, scale: 0.94, y: 24 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: EASE_OUT } },
    exit: { opacity: 0, scale: 0.94, y: 16, transition: { duration: 0.2 } },
};

export default function BookingModal() {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState<Step>("form");
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
        date: "",
        notes: "",
    });

    // Listen for the custom event fired by any button across the site
    useEffect(() => {
        const handler = () => {
            setStep("form");
            setForm({ name: "", email: "", phone: "", department: "", date: "", notes: "" });
            setOpen(true);
        };
        window.addEventListener("open-booking-modal", handler);
        return () => window.removeEventListener("open-booking-modal", handler);
    }, []);

    // Close on Escape key
    useEffect(() => {
        if (!open) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [open]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep("unavailable");
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    };

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        variants={overlay}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm"
                        onClick={() => setOpen(false)}
                    />

                    {/* Panel */}
                    <motion.div
                        key="panel"
                        variants={panel}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4"
                        // Stop click from propagating to the backdrop
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl">
                            {/* Close button */}
                            <button
                                onClick={() => setOpen(false)}
                                aria-label="Close modal"
                                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <AnimatePresence mode="wait">
                                {step === "form" ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -30 }}
                                        transition={{ duration: 0.25 }}
                                        className="p-8"
                                    >
                                        {/* Header */}
                                        <div className="mb-7 flex items-center gap-3">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]">
                                                <CalendarCheck className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-black text-slate-900">Book Appointment</h2>
                                                <p className="text-sm text-slate-500">Fill in your details below</p>
                                            </div>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            {/* Name */}
                                            <div>
                                                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                                                    Full Name <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={form.name}
                                                        onChange={handleChange}
                                                        required
                                                        placeholder="e.g. Maria Santos"
                                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-[color:var(--color-primary)] focus:ring-2 focus:ring-[color:var(--color-primary)]/20"
                                                    />
                                                </div>
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                                                    Email Address <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={form.email}
                                                        onChange={handleChange}
                                                        required
                                                        placeholder="you@email.com"
                                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-[color:var(--color-primary)] focus:ring-2 focus:ring-[color:var(--color-primary)]/20"
                                                    />
                                                </div>
                                            </div>

                                            {/* Phone */}
                                            <div>
                                                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                                                    Phone Number
                                                </label>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={form.phone}
                                                        onChange={handleChange}
                                                        placeholder="+63 912 345 6789"
                                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-[color:var(--color-primary)] focus:ring-2 focus:ring-[color:var(--color-primary)]/20"
                                                    />
                                                </div>
                                            </div>

                                            {/* Department */}
                                            <div>
                                                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                                                    Department / Service <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <Stethoscope className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                                    <select
                                                        name="department"
                                                        value={form.department}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-[color:var(--color-primary)] focus:ring-2 focus:ring-[color:var(--color-primary)]/20"
                                                    >
                                                        <option value="" disabled>Select a department…</option>
                                                        {departments.map((d) => (
                                                            <option key={d} value={d}>{d}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Preferred Date */}
                                            <div>
                                                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                                                    Preferred Date <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                                    <input
                                                        type="date"
                                                        name="date"
                                                        value={form.date}
                                                        onChange={handleChange}
                                                        required
                                                        min={new Date().toISOString().split("T")[0]}
                                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-[color:var(--color-primary)] focus:ring-2 focus:ring-[color:var(--color-primary)]/20"
                                                    />
                                                </div>
                                            </div>

                                            {/* Notes */}
                                            <div>
                                                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                                                    Additional Notes
                                                </label>
                                                <textarea
                                                    name="notes"
                                                    value={form.notes}
                                                    onChange={handleChange}
                                                    rows={3}
                                                    placeholder="Briefly describe your symptoms or concerns…"
                                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[color:var(--color-primary)] focus:ring-2 focus:ring-[color:var(--color-primary)]/20 resize-none"
                                                />
                                            </div>

                                            {/* Submit */}
                                            <motion.button
                                                type="submit"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="mt-2 w-full rounded-xl bg-[color:var(--color-primary)] py-3.5 text-base font-bold text-white shadow-lg shadow-[color:var(--color-primary)]/25 transition-colors hover:bg-[color:var(--color-primary-dark)]"
                                            >
                                                Confirm Appointment Request
                                            </motion.button>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="unavailable"
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -30 }}
                                        transition={{ duration: 0.25 }}
                                        className="flex flex-col items-center p-10 text-center"
                                    >
                                        {/* Icon */}
                                        <motion.div
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.4, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] as const }}
                                            className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 text-amber-500"
                                        >
                                            <WifiOff className="h-10 w-10" />
                                        </motion.div>

                                        <h3 className="mb-3 text-2xl font-black text-slate-900">
                                            Service Not Available
                                        </h3>
                                        <p className="mb-2 text-slate-600 leading-relaxed">
                                            Thank you, <span className="font-semibold text-slate-900">{form.name || "there"}</span>! <br />
                                            Online booking is not available yet. We're working hard to bring this feature to you soon.
                                        </p>
                                        <p className="mb-8 text-sm text-slate-500">
                                            In the meantime, please call us to schedule your appointment:
                                        </p>

                                        <a
                                            href="tel:028889000"
                                            className="mb-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[color:var(--color-primary)] py-3.5 text-base font-bold text-white shadow-lg shadow-[color:var(--color-primary)]/25 transition-colors hover:bg-[color:var(--color-primary-dark)]"
                                        >
                                            <Phone className="h-5 w-5" />
                                            Call (02) 888-9000
                                        </a>

                                        <button
                                            onClick={() => setOpen(false)}
                                            className="w-full rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50"
                                        >
                                            Close
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
