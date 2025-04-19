// 
// SPACE PAGE LOAD
//
const space = gsap.timeline();

let mm = gsap.matchMedia();

mm.add("(min-width: 992px)", () => {
  // Add animations to the timeline
  space.to('.slider_cms_item', {
    duration: 0.5,
    ease: "expoScale(0.5,7,none)",
    delay: 0.5,
    bottom: "-1.25vw",
    width: "90%",
    display: "inline-block",
    maxWidth: "120rem"
  })
  space.to('.service-hero', { duration: 0.7, height: "70vh" }, "<")
  space.to('.container.cc-space', { duration: 0.5, y: "0%" })

  space.eventCallback("onComplete", () => {
    // Refresh ScrollTrigger after the "space" animation is done
    ScrollTrigger.refresh();
  });
});

mm.add("(max-width: 991px)", () => {
  space.from('.slider_cms_item', { duration: 0.35, y: "-20px", opacity: 0 }, "<")
  space.to('.service-hero', { duration: 0.35, height: "100vw" })
  space.eventCallback("onComplete", () => {
    // Refresh ScrollTrigger after the "space" animation is done
    ScrollTrigger.refresh();
  });

});

/* SPACE > .list-item */
const lisitem = document.querySelectorAll(".list-item");

lisitem.forEach((listitem, index) => {
  const liTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".list",
      start: "top 85%",
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
