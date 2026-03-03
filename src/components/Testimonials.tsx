import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Executive Wellness Patient",
    avatar: "ST",
    rating: 5,
    review:
      "CareWellness completely transformed how I think about preventive healthcare. My annual executive checkup was thorough, stress-free and the specialist took time to explain every result in detail. I've never felt more in control of my health.",
    color: "bg-blue-500",
  },
  {
    name: "Marco Reyes",
    role: "Cardiac Surgery Patient",
    avatar: "MR",
    rating: 5,
    review:
      "After my bypass surgery, I was nervous about recovery. The entire surgical and rehab team at CareWellness made me feel safe every step of the way. The 24/7 nursing care was exceptional. I'm back to running 5K races thanks to them.",
    color: "bg-emerald-500",
  },
  {
    name: "Aisha Patel",
    role: "Pediatric Care Parent",
    avatar: "AP",
    rating: 5,
    review:
      "As a mother of three, finding a hospital where my children feel comfortable is critical. The pediatric ward is warm, colourful and the doctors are incredibly patient. My youngest actually looks forward to her check-ups now!",
    color: "bg-violet-500",
  },
  {
    name: "James Lim",
    role: "Orthopedic Specialist Clinic",
    avatar: "JL",
    rating: 5,
    review:
      "From booking online to my post-op follow-up, every touchpoint was seamless. The orthopaedic team used the latest imaging to diagnose my knee issue correctly on the first visit. Highly recommend to anyone who values precision care.",
    color: "bg-rose-500",
  },
  {
    name: "Elena Vasquez",
    role: "Diagnostic Imaging Patient",
    avatar: "EV",
    rating: 5,
    review:
      "The radiology center is impressive — modern machines, minimal wait times, and results were available in my patient portal within hours. The radiologist also walked me through the MRI personally. That personal touch means everything.",
    color: "bg-amber-500",
  },
];

const EASE_OUT = [0, 0, 0.58, 1] as const;

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.span
            className="mb-4 inline-flex items-center rounded-full bg-[color:var(--color-primary)]/10 px-4 py-1.5 text-sm font-bold text-[color:var(--color-primary)]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
          >
            Patient Stories
          </motion.span>
          <motion.h2
            className="mb-4 text-4xl font-black tracking-tight text-slate-900 lg:text-5xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05, ease: EASE_OUT }}
          >
            What Our Patients Say
          </motion.h2>
          <motion.p
            className="max-w-xl text-lg text-slate-600"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE_OUT }}
          >
            Real stories from real patients who trusted CareWellness with their most important asset — their health.
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="relative"
        >
          {/* Main card */}
          <div className="mx-auto max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: EASE_OUT }}
                className="relative rounded-3xl border border-slate-100 bg-white p-8 shadow-xl lg:p-12"
              >
                {/* Quote icon */}
                <Quote className="mb-6 h-10 w-10 text-[color:var(--color-primary)]/20" />

                <p className="mb-8 text-lg leading-relaxed text-slate-700 lg:text-xl">
                  &ldquo;{t.review}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${t.color} text-sm font-black text-white`}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{t.name}</p>
                      <p className="text-sm text-slate-500">{t.role}</p>
                    </div>
                  </div>
                  <Stars count={t.rating} />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)] hover:shadow-md"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-8 bg-[color:var(--color-primary)]"
                        : "w-2.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)] hover:shadow-md"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-20 grid grid-cols-2 gap-8 border-t border-slate-100 pt-16 lg:grid-cols-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
        >
          {[
            { value: "10,000+", label: "Patients Treated" },
            { value: "4.9 / 5", label: "Average Rating" },
            { value: "99.2%", label: "Success Rate" },
            { value: "20+ yrs", label: "Medical Excellence" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <p className="text-3xl font-black text-[color:var(--color-primary)] lg:text-4xl">
                {value}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-500">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
