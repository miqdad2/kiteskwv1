import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Configure global defaults if needed
gsap.config({
    autoSleep: 60,
    force3D: true,
});

export { gsap, ScrollTrigger };
