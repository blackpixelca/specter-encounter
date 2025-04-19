// 
// WORK PAGE LOAD
//
const videos = document.querySelectorAll(".work-thumbnail_wrap");

/* PAGE TRANSITION */
const tbarAni = gsap.timeline()
  .fromTo(".work-pt_wrap", { opacity: 1 }, {
    opacity: 0,
    duration: 0.9,
    ease: "power4.in"
  }, 0.05);

/* CELL */
videos.forEach((video, index) => {
  const videoAni = gsap.timeline({
    scrollTrigger: {
      trigger: video,
      start: "top bottom",
      ease: "expo.out",
      toggleActions: "play play play play"
    },
  });
  videoAni.fromTo(
    video, { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      delay: index * 0.025 // Add a delay based on the index of the image
    }, 0.2)
});

/* H1 */
const h1 = gsap.timeline()
  .from('.h1', { opacity: 0, y: "-20px", duration: 1 }, 0.3)

/* NAV */
const nav = gsap.timeline()
  .fromTo('.brand', { y: "-20px", opacity: 0 }, {
    y: "0px",
    opacity: 1,
    duration: 1
  }, 0.4)
  .fromTo('.nav_burger-icon', { y: "-20px", opacity: 0 }, {
    y: "0px",
    opacity: 1,
    duration: 1
  }, 0.42)
