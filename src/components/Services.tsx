import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Executive Wellness",
        description:
            "Tailored health screenings and preventive care programs for high-performing professionals.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCnBnNqMgbD5AgVKk-Qg1VkDN4AgT61LBTDh1tQG3JJTwVcXAHpnHm5LWsnZ5-UWUGs4L5t8hoV_g5VfgiinEIHIoAIBH8_eJejavv1xR8N9_MB9Otgtp1ZS7MtTrAZ3M8pbGXAM_ESktBp9tXb_SdGxmbdaMPwxiHMfb34onKTOC-HWEtBSUL6e4jHnG99KT5KkFNPnT8ujLrX6O_ppgkKaNIoEXAirv1ZErnkBR4NX1FyAsmXPyHyLRhXu47ifF8Bgz5QI0_V0g",
        link: "#",
    },
    {
        title: "Specialist Clinics",
        description:
            "Expert consultation across multiple fields including cardiology, oncology, and orthopedics.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCoyT50GVFRydd8oD73pZpoZOjwGl0ibHeLjQo_X2Lo3x7v2-yRe_QOJv3OS0FMqF8KO2j3-wuJZwCaGukEji1ybFnk5gi6RaccLK5SK8H0mJpb7enKDyv1MTgUSB_Cn8kqTjpDP1niIXa_7XCZWZcjP-4d7cygSiUW1YObk9UjBPnRcMwLOQNatmq5eRMkZkGwWc_66qNrS9Lw9d66E6jw6wLRi0htTH4EaGsFWteztA2mrzN33wuK1zWLdkmzwmrAodDn3B8PXg",
        link: "#",
    },
    {
        title: "Diagnostic Imaging",
        description:
            "Advanced radiology services featuring 4D ultrasounds, MRI, and high-speed CT scans.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAnW6T6DcZKPasjQW5A2ut86S2ekhb06169PvZAP21KOxcCt9TKZwFK0lOxbMc_4ajz_u3r5w3xdUCvbFfEZRhSWNdB24AwezDs8t3M1XdyuCSQhsDuSBkjjcduuU8MMutpWvogJ3MdKLFYujYFf0mNub1Z4eyINcovJvZ73zZ-AuPq3ONRiW1MYMWnP7Gzmj5arjne8GWsSV3o7ER_jj5xu0lugXxGYMB7GwgvKq8yw08T2FSff83WonkuVhCSs2u5DagR3Tn0rw",
        link: "#",
    },
    {
        title: "Pediatric Excellence",
        description:
            "Dedicated child healthcare from infancy through adolescence in a child-friendly environment.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB65_AiwpaP7COm11IkqYwqS3CHou2JVb6iJ0dYZUBxCoZVfumFQT9PDb1afHyXy-_u-WUAglYHB__98011b9r5wbEwX-UfUVNa9JkGGCwJ1ZBUWVr_K7zNk0KqGsXQwZ-g0N1PyD8PNF0woKDbCJBqukfY6ziks2YsS7u981zhzzZxzPhp43eQx_50ZS3amTK-MJXwBfVKMmpLbp9aa-ZDQfP4NxVic0Qd8oGbgt8OqAaVflZrNxL9t8KgWfmM5LLq-LgUaGZyjA",
        link: "#",
    },
];

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0, 0, 0.58, 1] as const } },
};

export default function Services() {
    return (
        <section id="services" className="bg-[color:var(--color-background-light)] px-6 py-24 lg:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 flex flex-col items-center text-center">
                    <motion.h2
                        className="mb-4 text-4xl font-black tracking-tight text-slate-900 lg:text-5xl"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, ease: [0, 0, 0.58, 1] as const }}
                    >
                        Comprehensive Care for Your Entire Family
                    </motion.h2>
                    <motion.p
                        className="max-w-2xl text-lg text-slate-600"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.1, ease: [0, 0, 0.58, 1] as const }}
                    >
                        Our core services are designed to provide holistic health solutions for every stage
                        of life, from pediatric care to executive wellness.
                    </motion.p>
                </div>

                <motion.div
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={cardVariant}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-xl"
                        >
                            <div className="mb-6 aspect-video w-full overflow-hidden rounded-xl">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-slate-900">{service.title}</h3>
                            <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
                            <a
                                href={service.link}
                                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[color:var(--color-primary)] group-hover:underline"
                            >
                                Learn more
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
