import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How do I book an appointment?",
        answer:
            "You can book through our website by clicking the \"Book Appointment\" button, via our mobile app, or by calling our reception desk directly. We offer both physical and virtual consultation slots.",
    },
    {
        question: "What insurance providers do you accept?",
        answer:
            "We partner with most major international and local insurance providers. Please check our \"Insurers\" page for a full list or contact our billing department to verify your coverage.",
    },
    {
        question: "How can I access my medical records?",
        answer:
            "All patients are given access to the CareWellness Patient Portal. You can securely download your laboratory results, imaging reports, and prescription history anytime.",
    },
    {
        question: "Do you provide 24/7 emergency care?",
        answer:
            "Yes, our Emergency Department and trauma center are open 24/7 with board-certified emergency physicians and fully equipped ambulance services on standby.",
    },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="rounded-xl border border-slate-200 overflow-hidden">
            <button
                className="flex w-full cursor-pointer items-center justify-between p-6 text-left transition-colors hover:bg-slate-50"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
            >
                <h5 className="text-lg font-bold text-slate-900 pr-4">{question}</h5>
                <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-[color:var(--color-primary)]"
                >
                    <ChevronDown className="h-5 w-5" />
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="px-6 pb-6 leading-relaxed text-slate-600">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQ() {
    return (
        <section className="bg-white px-6 py-24 lg:px-10">
            <div className="mx-auto max-w-3xl">
                <motion.h2
                    className="mb-12 text-center text-4xl font-black tracking-tight text-slate-900"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                >
                    Frequently Asked Questions
                </motion.h2>
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {faqs.map((faq) => (
                        <FAQItem key={faq.question} {...faq} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
