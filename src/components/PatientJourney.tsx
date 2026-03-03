import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Direct Booking",
    description: "Easily schedule through our site or app with your preferred specialist.",
  },
  {
    number: "2",
    title: "Clinical Assessment",
    description: "Comprehensive diagnostic tests and consultation to identify your needs.",
  },
  {
    number: "3",
    title: "Tailored Treatment",
    description: "Personalized medical plan designed specifically for your recovery goal.",
  },
  {
    number: "4",
    title: "Continuous Follow-up",
    description: "Post-treatment care and monitoring to ensure long-term wellness.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0, 0, 0.58, 1] as const } },
};

export default function PatientJourney() {
  return (
    <section className="bg-[color:var(--color-background-light)] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="mb-16 text-center text-4xl font-black tracking-tight text-slate-900"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          Your Journey to Recovery
        </motion.h2>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={item}
              className="relative flex flex-col items-center text-center"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--color-primary)] text-white text-2xl font-black shadow-lg shadow-[color:var(--color-primary)]/30">
                {step.number}
              </div>
              <h4 className="mb-2 text-xl font-bold text-slate-900">{step.title}</h4>
              <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
