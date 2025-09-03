// src/components/HireMe.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import {
    CheckCircle2,
    Code2,
    Server,
    Globe,
    MonitorSmartphone,
    AppWindow,
    Boxes,
    Mails,
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    Instagram,
} from "lucide-react";

// ---------- Little utilities ----------
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Counter({
                     to,
                     label,
                     short,
                 }: {
    to: number;
    label: string;
    short?: string; // short label for mobile
}) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const mv = useMotionValue(0);
    const [val, setVal] = useState("0");

    useEffect(() => {
        if (!inView) return;
        const controls = animate(mv, to, {
            duration: 1.6,
            ease: "easeOut",
            onUpdate: (v) => setVal(new Intl.NumberFormat().format(Math.round(v))),
        });
        return () => controls.stop();
    }, [inView, to]);

    return (
        <div
            ref={ref}
            className="
        flex flex-col items-center justify-center
        rounded-lg border border-white/15 bg-white/5
        px-2 py-2 text-center shadow-lg backdrop-blur-md
        sm:rounded-2xl sm:px-4 sm:py-4
      "
        >
            <div className="text-base font-extrabold text-white sm:text-2xl md:text-3xl leading-none">
                {val}+
            </div>
            <div className="mt-1 text-[9px] text-gray-300 sm:text-[11px] md:text-xs leading-tight">
                {/* short label on mobile, full label on sm+ */}
                <span className="sm:hidden">{short ?? label}</span>
                <span className="hidden sm:inline">{label}</span>
            </div>
        </div>
    );
}

function Pill({
                  icon: Icon,
                  label,
              }: {
    icon: React.ElementType;
    label: string;
}) {
    return (
        <div className="inline-flex items-center gap-2 rounded-2xl border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-100 shadow-md ring-1 ring-inset ring-blue-500/20">
            <div className="grid h-6 w-6 place-items-center rounded-lg bg-blue-500/15">
                <Icon className="h-4 w-4 text-blue-300" />
            </div>
            {label}
        </div>
    );
}

// ---------- Contact form (FormSubmit AJAX) ----------
const FORM_ENDPOINT = "https://formsubmit.co/ajax/dionfernando2003@gmail.com"; // verify first submission

type FormState =
    | { status: "idle" }
    | { status: "submitting" }
    | { status: "success" }
    | { status: "error"; message: string };

export default function HireMe() {
    const [formState, setFormState] = useState<FormState>({ status: "idle" });

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setFormState({ status: "submitting" });

        const fd = new FormData(e.currentTarget);
        if (fd.get("_hpot")) {
            setFormState({ status: "error", message: "Bot detected." });
            return;
        }

        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: { Accept: "application/json" },
                body: fd,
            });

            if (res.ok) {
                setFormState({ status: "success" });
                (e.target as HTMLFormElement).reset();
            } else {
                const data = await res.json().catch(() => ({}));
                throw new Error(data?.message || "Submission failed");
            }
        } catch (err: any) {
            const first = (fd.get("firstName") as string) || "";
            const last = (fd.get("lastName") as string) || "";
            const subject =
                (fd.get("subject") as string) || "New message from portfolio";
            const body =
                `Name: ${first} ${last}\nEmail: ${fd.get("email")}\nPhone: ${
                    (fd.get("phone") as string) || "-"
                }\n\n` + (fd.get("message") as string);
            window.location.href = `mailto:dionfernando2003@gmail.com?subject=${encodeURIComponent(
                subject
            )}&body=${encodeURIComponent(body)}`;
            setFormState({
                status: "error",
                message: err?.message || "E-mail app opened.",
            });
        }
    }

    return (
        <section
            id="hire"
            className="relative isolate bg-gradient-to-b from-gray-900 to-black py-16 text-white md:py-20 overflow-x-clip"
        >
            {/* soft blue glows */}
            <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="mx-auto w-[95%] max-w-7xl">
                {/* ----- Header row ----- */}
                <div className="grid gap-8 md:grid-cols-[1.1fr_1fr]">
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                            <span className="text-blue-400">Hire</span> Me.
                        </h2>
                        <p className="mt-4 text-blue-300 font-semibold">WHY Hire Me?</p>
                        <p className="mt-2 max-w-xl text-sm text-gray-300 md:text-base">
                            Passionate software engineer with a full-stack skill set,
                            dedicated to delivering creative, scalable solutions and
                            exceptional results. I blend solid engineering with clean,
                            thoughtful UX.
                        </p>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-3"
                    >
                        <h3 className="text-xl font-semibold text-blue-200">Services</h3>
                        <div className="flex flex-wrap gap-3 md:gap-4">
                            <Pill icon={Code2} label="Front-end Development" />
                            <Pill icon={Server} label="Back-end Development" />
                            <Pill icon={Globe} label="Web App Development" />
                            <Pill icon={MonitorSmartphone} label="Mobile / Desktop Apps" />
                            <Pill icon={AppWindow} label="UI/UX & Prototyping" />
                            <Pill icon={Boxes} label="Microservices & APIs" />
                        </div>
                    </motion.div>
                </div>

                {/* ----- Stats strip ----- */}
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative mt-8 rounded-3xl border border-blue-400/40 bg-blue-500/10 p-3 sm:p-4 shadow-[0_0_40px_-12px_rgba(59,130,246,0.5)]"
                >
                    {/* ✅ All in one line on mobile */}
                    <div className="grid grid-cols-5 gap-2 sm:gap-3 md:gap-4">
                        <Counter to={4} label="Yrs of Experience" short="Yrs" />
                        <Counter to={20} label="Projects" short="Projects" />
                        <Counter to={5} label="Awards" short="Awards" />
                        <Counter to={5} label="Coding Certificates" short="Certs" />
                        <Counter to={40} label="Code Repositories" short="Repos" />
                    </div>
                </motion.div>

                {/* ----- Contact + Form ----- */}
                <div className="mt-12 grid gap-10 md:grid-cols-2">
                    {/* Contact info */}
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold">Contact Info</h3>

                        <ul className="mt-6 space-y-6">
                            <li className="flex items-start gap-3">
                                <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5">
                                    <Mail className="h-5 w-5 text-blue-300" />
                                </div>
                                <div>
                                    <p className="text-gray-300">dionfernando2003@gmail.com</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5">
                                    <Phone className="h-5 w-5 text-blue-300" />
                                </div>
                                <div>
                                    <p className="text-gray-300">+94 76 714 9543</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5">
                                    <MapPin className="h-5 w-5 text-blue-300" />
                                </div>
                                <div>
                                    <p className="text-gray-300">Sri Lanka</p>
                                </div>
                            </li>
                        </ul>

                        {/* Socials */}
                        <div className="mt-10 flex items-center gap-5">
                            <a
                                href="https://github.com/DionFernando"
                                target="_blank"
                                className="opacity-80 hover:opacity-100"
                            >
                                <Github className="h-7 w-7" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dion-fernando-546483319/"
                                target="_blank"
                                className="opacity-80 hover:opacity-100"
                            >
                                <Linkedin className="h-7 w-7" />
                            </a>
                            <a
                                href="https://www.instagram.com/dionroxx/"
                                target="_blank"
                                className="opacity-80 hover:opacity-100"
                            >
                                <Instagram className="h-7 w-7" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* hidden fields for FormSubmit */}
                            <input type="hidden" name="_subject" value="New message from portfolio" />
                            <input type="checkbox" name="_captcha" className="hidden" defaultChecked={true} />
                            <input type="text" name="_hpot" className="hidden" tabIndex={-1} autoComplete="off" />

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-1 block text-xs font-semibold text-blue-200">
                                        First Name
                                    </label>
                                    <input
                                        name="firstName"
                                        required
                                        autoComplete="given-name"
                                        className="w-full rounded-full bg-white px-4 py-2.5 text-black outline-none ring-2 ring-transparent focus:ring-blue-400"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1 block text-xs font-semibold text-blue-200">
                                        Last Name
                                    </label>
                                    <input
                                        name="lastName"
                                        autoComplete="family-name"
                                        className="w-full rounded-full bg-white px-4 py-2.5 text-black outline-none ring-2 ring-transparent focus:ring-blue-400"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-1 block text-xs font-semibold text-blue-200">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        autoComplete="email"
                                        className="w-full rounded-full bg-white px-4 py-2.5 text-black outline-none ring-2 ring-transparent focus:ring-blue-400"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1 block text-xs font-semibold text-blue-200">
                                        Phone (optional)
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        autoComplete="tel"
                                        className="w-full rounded-full bg-white px-4 py-2.5 text-black outline-none ring-2 ring-transparent focus:ring-blue-400"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-1 block text-xs font-semibold text-blue-200">
                                    Subject
                                </label>
                                <input
                                    name="subject"
                                    required
                                    className="w-full rounded-full bg-white px-4 py-2.5 text-black outline-none ring-2 ring-transparent focus:ring-blue-400"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-xs font-semibold text-blue-200">
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows={6}
                                    className="w-full resize-y rounded-2xl bg-white px-4 py-3 text-black outline-none ring-2 ring-transparent focus:ring-blue-400"
                                />
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    type="submit"
                                    disabled={formState.status === "submitting"}
                                    className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-600 disabled:opacity-60"
                                >
                                    <Mails className="h-5 w-5" />
                                    {formState.status === "submitting" ? "Sending..." : "Contact Me"}
                                </button>

                                {formState.status === "success" && (
                                    <span className="text-sm text-green-300 inline-flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4" /> Message sent! I’ll get back to you
                    soon.
                  </span>
                                )}
                                {formState.status === "error" && (
                                    <span className="text-sm text-yellow-300">
                    If nothing happens, your e-mail app should open — otherwise try again.
                  </span>
                                )}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
