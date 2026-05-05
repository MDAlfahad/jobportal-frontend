import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useAnimate = (ref, vars = {}) => {
  useGSAP(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      opacity: 0,
      y: 70,
      duration: 1,
      ease:"ease-in-out",

      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true,
        scrub: false,
      },

      ...vars,
    });

    ScrollTrigger.refresh();
  }, [ref]);
};

export default useAnimate;