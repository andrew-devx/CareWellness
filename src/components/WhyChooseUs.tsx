import { motion } from "framer-motion";
import { Brain, Microscope, Smartphone, Heart } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Board-Certified Experts",
    description:
      "Our medical team consists of internationally trained specialists with decades of combined experience.",
  },
  {
    icon: Microscope,
    title: "Patient-First Technology",
    description:
      "Using the latest in robotic surgery and AI-driven diagnostics to improve patient outcomes.",
  },
  {
    icon: Smartphone,
    title: "Seamless Digital Experience",
    description:
      "Access medical records, book appointments, and chat with doctors via our dedicated mobile app.",
  },
  {
    icon: Heart,
    title: "Compassionate Environment",
    description:
      "A soothing hospital atmosphere designed to promote healing and reduce stress for patients and families.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="specialists" className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Pillars */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <h2 className="mb-4 text-4xl font-black tracking-tight text-slate-900">
              Why Choose CareWellness?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-slate-600">
              We redefine the healthcare experience by putting patients first. Our approach combines
              clinical brilliance with human empathy.
            </p>
            <div className="space-y-7">
              {pillars.map(({ icon: Icon, title, description }, i) => (
                <motion.div
                  key={title}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{title}</h4>
                    <p className="mt-1 text-slate-600">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
          >
            <img
              alt="Medical Technology"
              className="w-full max-w-md rounded-3xl shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2jUjFleupys9MwOht-Mtvc46qHtBAfxf_A5Nrz-wDJ5eY2gO7UOQO-GrnGSjGQ8WB8UI3SwT6hjBRuAcyLxpolGHde-YBgP-FZlNS3rKq6WLzA77gdvdHyg_sK9lsKksMaThyIjp0PXfeoCS8M0frInOgkm3yqISxXrvmyOeL2fjJKHs3MyXYuuegpqe0h2Ft1sl-44B3qO1ZDwIjenhWNMjpRzjTECAOIj4zVqNPGSGkCyVbheF1jntkxZESA4LckeII2x5pcw"
              loading="lazy"
              decoding="async"
            />
            {/* Badge */}
            <motion.div
              className="absolute -top-8 -right-4 flex h-28 w-28 items-center justify-center rounded-full bg-[color:var(--color-primary)] p-3 text-center text-white shadow-xl shadow-[color:var(--color-primary)]/30 lg:-top-10 lg:-right-10"
              initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }}
            >
              <div>
                <p className="text-2xl font-black">20+</p>
                <p className="text-[10px] font-bold uppercase leading-tight tracking-tight">
                  Years of Excellence
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
