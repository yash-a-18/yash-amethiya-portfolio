import { useEffect, useRef, useState } from "react";

// A full-width page section: alternating background band, header with icon and title,
// and content that fades up the first time it scrolls into view.
export default function Section({ id, title, icon: Icon, tinted = false, children }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element || !("IntersectionObserver" in window)) {
            setVisible(true);
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "0px 0px -80px 0px" }
        );
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id={id}
            ref={ref}
            className={tinted ? "bg-band dark:bg-band-dark" : "bg-white dark:bg-gray-900"}
        >
            <div
                className={`px-10 md:px-20 lg:px-40 py-16 md:py-20 transition duration-700 ease-out ${
                    visible ? "opacity-100 translate-y-0" : "motion-safe:opacity-0 motion-safe:translate-y-8"
                }`}
            >
                <header className="mb-8">
                    <div className="flex items-center gap-4">
                        <span className="flex flex-shrink-0 items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 text-white shadow-md shadow-teal-500/30">
                            <Icon size={22} />
                        </span>
                        <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                            {title}
                        </h3>
                    </div>
                    <div
                        className={`h-1 mt-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 transition-all duration-1000 delay-300 ease-out ${
                            visible ? "w-24" : "w-0"
                        }`}
                    />
                </header>
                {children}
            </div>
        </section>
    );
}
