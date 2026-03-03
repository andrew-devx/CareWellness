import { motion } from "framer-motion";
import { CalendarCheck, MapPin } from "lucide-react";
import { openBookingModal } from "../lib/modalEvents";

export default function CTA() {
  return (
    <section className="bg-[color:var(--color-primary)] px-6 py-20 lg:px-10">
      <motion.div
        className="mx-auto max-w-4xl text-center text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-6 text-4xl font-black lg:text-5xl">
          Don&apos;t Put Your Health on Hold.
        </h2>
        <p className="mb-10 text-xl font-medium text-white/80">
          Join thousands of satisfied patients who trust CareWellness for their medical needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button
            onClick={openBookingModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-[color:var(--color-primary)] shadow-xl"
          >
            <CalendarCheck className="h-5 w-5" />
            Book Your Appointment Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/20"
          >
            <MapPin className="h-5 w-5" />
            View Our Locations
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
