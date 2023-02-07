import "@/assets/js/gsap.min.js"
import "@/assets/js/ScrollTrigger.min.js"
import "@/assets/js/SplitText.min.js"
console.log('test');
import { ScrollTrigger } from "gsap/dist/gsap"

function aboutAnimation() {
    // gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();
    let aboutSections = gsap.utils.toArray(".panel");
    mm.add("(min-width: 992px)", () => {
        gsap.to(aboutSections, {
            xPercent: -100 * (aboutSections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".about-slider",
                pin: true,
                scrub: 1,
                snap: 1 / (aboutSections.length - 1),
                end: () =>
                    "+=" + document.querySelector(".about-slider").offsetWidth,
            },
        });

        gsap.from(".t-line", {
            scaleX: 0,
            transformOrigin: "left",
            duration: 2,
            delay: 1,
        });

        gsap.from(".about-butterfly-section>img", {
            y: "100vh",
            scrollTrigger: {
                trigger: ".about-butterfly-section>img",
            },
        });
    });

}
aboutAnimation();