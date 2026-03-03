import { motion } from "framer-motion";

const logos = [
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaJFOKhimHDirxC0JU9V2OBBIa25Rr-aO4YCiBtnyPBCudOOAcBlR8hG2DWmc-gsQbUFnQRNiDNlPDN2KLmNaZwWc_BM6F6eVSWrSgCA2FSGC4r4umi7kWUZnDCLL2gsw5npQrRzM8NNHW6nPD1e58VaYcEluZ0-f2ltrGjZUNvZqDWW6TiFC08RDOH4Js1GxtWopHAwh73Xl_fQwCeyPCfv31attAfAlh4139qg8uPWWdrOhBJqLJADe5_QFekLg_5Eocy16YQw",
        alt: "JCI Accreditation",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAur2h4H9PT_0JNsu-XRj950uVemxYE21QOJKxtsYa18z-8pPo-KmJZjuYNDA4VY5aHAfI9aAJTygerdU9uYOe2i-8GBLMcZ8lwWUgZdUBQYeu7m9TA2sUGsnpHQefU9748yEECrIH56yAxkEcs_OeuM_01cNjmwPnoLgDaFblqaDSOp916mByS0JUgg6IStiS0Ae3LympkW8F7HUux5C02V0pgVRG3qKoUU2ywDgSqq2b8q6pa4r1ekcRcOKiCZxB_zYNeQtyxdg",
        alt: "ISO 9001 Certified",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeEbEBvavnoaznC0XtCrS0qPumWZIcLMJxtiGTW25ChlRjN5nISW44tq8E3kNusqAOyPb6-Cpi2VbHgBIqYALdolQC_c_K-R8gfph7UayTpyxnxOuir7OKfdFI_YLwc96n8BBYICiHOX0Xs0IYG6qaXQDvqokpF09oCKwFL7OqVt9mjEQGqtMaJ8wPw3TPqDi9VRTIlpK3fAI-9-D5rJlclfwbC4-W7Bq5H08YIzJwPfVRpB1xgsIACrcGTnqz3jgoV31fV3zEsA",
        alt: "HealthLink Insurance",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQcCc7gD2sW7lnScM5Yn7u-wo_0ZCg5o0IhgXRSoxJxi7GGhHS4Pyi6rSLXJ1jhxF3T6HgvrTgAshe413EW22rSszAygsSb7xyvd043No4AUrI1hBN7TTVUSrxbXAmbkeRyxcsqD1nY7A1JaJORyFC4AOyGCIBTI2SK5bKGk33HOyIUTE7ZJGpnU-6Nkn3g8fSMu6aQGK6CCxEgL2eTxMKQqpCb6PosL5IvhIuZeiNuBHuBqPCeekdhJnFGPIJOIS6JffrY621hg",
        alt: "CarePlus Network",
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

const item = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TrustBar() {
    return (
        <section className="border-y border-slate-200 bg-white py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <p className="mb-8 text-center text-sm font-bold uppercase tracking-widest text-slate-400">
                    Recognized by Global Health Standards &amp; Leading Insurers
                </p>
                <motion.div
                    className="grid grid-cols-2 items-center gap-8 lg:grid-cols-4 lg:gap-12"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {logos.map((logo) => (
                        <motion.div
                            key={logo.alt}
                            variants={item}
                            className="flex justify-center opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-10 w-auto object-contain"
                                loading="lazy"
                                decoding="async"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
