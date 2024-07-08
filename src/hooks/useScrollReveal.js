// hooks/useScrollReveal.js
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const useScrollReveal = () => {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: "bottom",
            distance: "50px",
            duration: 1000,
            delay: 300,
            reset: false,
        });

        sr.reveal(".reveal", {
            interval: 200,
        });
    }, []);
};

export default useScrollReveal;
