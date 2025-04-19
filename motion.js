// 
// MOTION PAGE LOAD
//
const motion = gsap.timeline();

let mm = gsap.matchMedia();

mm.add("(min-width: 992px)", () => {
  motion.to('.slider_cms_item', {
    duration: 0.5,
    ease: "expoScale(0.5,7,none)",
    delay: 0.5,
    bottom: "-1.25vw",
    width: "90%",
    display: "inline-block",
    maxWidth: "120rem"
  })
  motion.to('.service-hero', { duration: 0.7, height: "70vh" }, "<")
});

mm.add("(max-width: 991px)", () => {
  motion.from('.slider_cms_item', { duration: 0.35, y: "-20px", opacity: 0 }, "<")
  motion.to('.service-hero', { duration: 0.35, height: "100vw" })
  motion.eventCallback("onComplete", () => {
    // Refresh ScrollTrigger after the "space" animation is done
    ScrollTrigger.refresh();
  });
});

/* MOTION > .list-item */
const lisitem = document.querySelectorAll(".list-item");

lisitem.forEach((listitem, index) => {
  const liTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".list",
      start: "top 120%",
      ease: "expo.out",
      toggleActions: "play play play play"
    },
  });

  liTimeline.fromTo(
    listitem, { y: "100%", opacity: 0 },
    {
      y: "0%",
      opacity: 1,
      stagger: 0.05, // Stagger the animation based on the index of the listitem
      delay: index * 0.025 // Add a delay based on the index of the listitem
    }
  );
});
