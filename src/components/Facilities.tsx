import { motion } from "framer-motion";

const facilities = [
  {
    title: "Advanced ICU",
    description: "24/7 intensive care with state-of-the-art monitoring and dedicated specialists.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnW6T6DcZKPasjQW5A2ut86S2ekhb06169PvZAP21KOxcCt9TKZwFK0lOxbMc_4ajz_u3r5w3xdUCvbFfEZRhSWNdB24AwezDs8t3M1XdyuCSQhsDuSBkjjcduuU8MMutpWvogJ3MdKLFYujYFf0mNub1Z4eyINcovJvZ73zZ-AuPq3ONRiW1MYMWnP7Gzmj5arjne8GWsSV3o7ER_jj5xu0lugXxGYMB7GwgvKq8yw08T2FSff83WonkuVhCSs2u5DagR3Tn0rw",
    badge: "ICU",
  },
  {
    title: "Surgical Suites",
    description: "12 fully equipped operating theatres with robotic-assisted surgical technology.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnBnNqMgbD5AgVKk-Qg1VkDN4AgT61LBTDh1tQG3JJTwVcXAHpnHm5LWsnZ5-UWUGs4L5t8hoV_g5VfgiinEIHIoAIBH8_eJejavv1xR8N9_MB9Otgtp1ZS7MtTrAZ3M8pbGXAM_ESktBp9tXb_SdGxmbdaMPwxiHMfb34onKTOC-HWEtBSUL6e4jHnG99KT5KkFNPnT8ujLrX6O_ppgkKaNIoEXAirv1ZErnkBR4NX1FyAsmXPyHyLRhXu47ifF8Bgz5QI0_V0g",
    badge: "Surgical",
  },
  {
    title: "Pediatric Ward",
    description: "Purpose-built, child-friendly environment designed to comfort young patients.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB65_AiwpaP7COm11IkqYwqS3CHou2JVb6iJ0dYZUBxCoZVfumFQT9PDb1afHyXy-_u-WUAglYHB__98011b9r5wbEwX-UfUVNa9JkGGCwJ1ZBUWVr_K7zNk0KqGsXQwZ-g0N1PyD8PNF0woKDbCJBqukfY6ziks2YsS7u981zhzzZxzPhp43eQx_50ZS3amTK-MJXwBfVKMmpLbp9aa-ZDQfP4NxVic0Qd8oGbgt8OqAaVflZrNxL9t8KgWfmM5LLq-LgUaGZyjA",
    badge: "Pediatric",
  },
  {
    title: "Executive Suites",
    description: "Premium private rooms with concierge medical services and hotel-level amenities.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoyT50GVFRydd8oD73pZpoZOjwGl0ibHeLjQo_X2Lo3x7v2-yRe_QOJv3OS0FMqF8KO2j3-wuJZwCaGukEji1ybFnk5gi6RaccLK5SK8H0mJpb7enKDyv1MTgUSB_Cn8kqTjpDP1niIXa_7XCZWZcjP-4d7cygSiUW1YObk9UjBPnRcMwLOQNatmq5eRMkZkGwWc_66qNrS9Lw9d66E6jw6wLRi0htTH4EaGsFWteztA2mrzN33wuK1zWLdkmzwmrAodDn3B8PXg",
    badge: "Premium",
  },
  {
    title: "Radiology Center",
    description: "High-resolution MRI, CT, and 4D ultrasound suites staffed around the clock.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2jUjFleupys9MwOht-Mtvc46qHtBAfxf_A5Nrz-wDJ5eY2gO7UOQO-GrnGSjGQ8WB8UI3SwT6hjBRuAcyLxpolGHde-YBgP-FZlNS3rKq6WLzA77gdvdHyg_sK9lsKksMaThyIjp0PXfeoCS8M0frInOgkm3yqISxXrvmyOeL2fjJKHs3MyXYuuegpqe0h2Ft1sl-44B3qO1ZDwIjenhWNMjpRzjTECAOIj4zVqNPGSGkCyVbheF1jntkxZESA4LckeII2x5pcw",
    badge: "Radiology",
  },
  {
    title: "Rehabilitation Center",
    description: "Comprehensive physiotherapy and recovery programs with licensed therapists.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDajwrxcxQ8mOnrSlpV7aL2CYsGim_2qPOP_S1g2bhgDfflGV_YgOqSc5bnus13hyZNqUYg5uboXap82geZDrGWfa5JLgp_Z7g97b5M7tKXv420qYhrPpNfhz8duDDGi-x2u2WMel-UOO_eHD20CrjaPha___0Xl5TImdH44B5S1jwpvl1Ll2vVjgx9aoepZv8KOw-_eKh1uWkHlddcDti820ztCoNLx-VDGoioF2avZHgyblMIcd6P-WIKE9_owtjBd_XsQUYI8Q",
    badge: "Rehab",
  },
];

const EASE_OUT = [0, 0, 0.58, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
};

export default function Facilities() {
  return (
    <section id="facilities" className="bg-[color:var(--color-background-light)] px-6 py-24 lg:px-10">
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
            World-Class Infrastructure
          </motion.span>
          <motion.h2
            className="mb-4 text-4xl font-black tracking-tight text-slate-900 lg:text-5xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05, ease: EASE_OUT }}
          >
            Our Facilities
          </motion.h2>
          <motion.p
            className="max-w-2xl text-lg text-slate-600"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE_OUT }}
          >
            Over 80,000 sq ft of modern medical infrastructure designed for comfort,
            precision, and exceptional patient outcomes.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {facilities.map((facility) => (
            <motion.div
              key={facility.title}
              variants={card}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-2xl shadow-md"
            >
              {/* Image */}
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

              {/* Badge */}
              <span className="absolute left-4 top-4 rounded-full bg-[color:var(--color-primary)] px-3 py-1 text-xs font-bold text-white shadow">
                {facility.badge}
              </span>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="mb-1 text-xl font-bold">{facility.title}</h3>
                <p className="text-sm leading-relaxed text-white/80">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
