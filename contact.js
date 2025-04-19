// 
// CONTACT PAGE LOAD
//
const cells = document.querySelectorAll(".cell");

/* PAGE TRANSITION */
const tbarAni = gsap.timeline()
  .fromTo(".contact-pt_wrap", { opacity: 1, display: "none" }, {
      opacity: 0,
      duration: 0.9,
      ease: "power4.in",
      display: "flex"
    },
    0.1);

/* CELL */
cells.forEach((cell, index) => {
  const cellAni = gsap.timeline()
    .fromTo(
      cell, { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        stagger: 0.1, // Stagger the animation based on the index of the image
        delay: index * 0.15 // Add a delay based on the index of the image
      }, 0.95
    )

    .fromTo(
      cell.querySelectorAll('.u-reveal'), {
        opacity: 0,
        y: "-20px"
      }, {
        opacity: 1,
        y: "0px",
        stagger: 0, // Stagger the animation based on the index of the image
        delay: index * 0.15 // Add a delay based on the index of the image
      }, 1.25
    );
});

/* NAV */
const nav = gsap.timeline()
  .fromTo('.brand', { y: "-20px", opacity: 0 }, {
    y: "0px",
    opacity: 1,
    duration: 1
  }, 1.5)
  .fromTo('.nav_burger-icon', { y: "-20px", opacity: 0 }, {
    y: "0px",
    opacity: 1,
    duration: 1
  }, 1.5)
  .from('.contact-media_wrap', { opacity: 0, duration: 1.8, ease: "power4.in" }, 0.8)
