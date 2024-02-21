gsap.registerPlugin(ScrollTrigger);

let footer = document.querySelector("footer"),
    getOverlap = () => Math.min(window.innerHeight, footer.offsetHeight),
    adjustFooterOverlap = () => footer.style.marginTop = -getOverlap() + "px";

    adjustFooterOverlap();


    ScrollTrigger.addEventListener("revert",adjustFooterOverlap);

    ScrollTrigger.create({
        trigger:footer,
        start:() => "top "+ (window.innerHeight - getOverlap()),
        end: () => "+=" + getOverlap(),
        pin:true,
    });