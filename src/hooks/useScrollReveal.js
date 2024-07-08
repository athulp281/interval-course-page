import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const useScrollReveal = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const sr = ScrollReveal({
                origin: "bottom",
                distance: "50px",
                duration: 2000,
                reset: true,
            });

            sr.reveal(".reveal", {
                interval: 200,
            });
        }
    }, []);
};

export default useScrollReveal;
