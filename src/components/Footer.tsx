import { HeartPulse, MapPin, Phone, Mail, Globe } from "lucide-react";

const quickLinks = ["Home", "Services", "Specialists", "Patient Portal", "Careers"];

export default function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-16 text-slate-300 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5 flex items-center gap-2 text-white">
              <HeartPulse className="h-7 w-7 text-[color:var(--color-primary)]" />
              <span className="text-xl font-extrabold tracking-tight">CareWellness</span>
            </div>
            <p className="text-sm leading-relaxed">
              Providing high-quality medical services with a patient-centered approach. Your
              wellness is our priority.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Website"
                className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-[color:var(--color-primary)]"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@carewellness.com"
                aria-label="Email"
                className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-[color:var(--color-primary)]"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:028889000"
                aria-label="Phone"
                className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-[color:var(--color-primary)]"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="mb-5 font-bold text-white">Quick Links</h5>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="mb-5 font-bold text-white">Contact Info</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-[color:var(--color-primary)]" />
                123 Healthcare Blvd, Medical District
              </li>
              <li className="flex gap-3 font-bold text-red-400">
                <Phone className="h-5 w-5 shrink-0" />
                Emergency: (02) 888-9000
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-[color:var(--color-primary)]" />
                hello@carewellness.com
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h5 className="mb-5 font-bold text-white">Find Us</h5>
            <div className="h-32 w-full overflow-hidden rounded-lg bg-slate-800">
              <img
                alt="Map Location"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlPRNPQ_-7vIopjcV89OFBV1DRUHDTSQ4K9bIfcPalee2KR7Re3zUT0h1hwCZswaVImFo52jsGcPzbllqEIshYkLcNIZtYzu39UBmFx89iVYRQaSNQu974CLVyvamkTnieOccrCw0DOAuzaHkU0RFd2fJirHm4LpFB9zbuLLZKbR3cOA3HeMSQVsyVV86HiH-gEu4qBasQ1jlNOtLqkS4Ehuo0kuTCt4v5oBjtM_Q7ciqlm0vz5y25F7xb5wQ7nossdG7yldl4DA"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>
            © 2024 CareWellness Medical Group. All rights reserved.{" "}
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
