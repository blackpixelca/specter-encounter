// 
// SOUND PAGE LOAD
//
const sound = gsap.timeline();

let mm = gsap.matchMedia();

mm.add("(min-width: 992px)", () => {
  sound.to('.service_bkg-img', { duration: 0.5, scale: 1.05 })
  sound.to('.slider_cms_title', { duration: 0.5, fontSize: "3rem" }, "<")
  sound.to('.service-hero', { duration: 0.5, height: "70vh", paddingBottom: "6.25rem" }, "<")
  sound.to('.service-title_wrap', { duration: 0.5, height: "auto" }, "<")
});

mm.add("(max-width: 991px)", () => {
  sound.to('.slider_cms_title', { duration: 0.5, fontSize: "1.5rem" }, "<")
  sound.to('.service-title_wrap', { duration: 0.5, height: "auto" }, "<")
  sound.to('.service-hero', { duration: 0.75, height: "100vw", ease: "power4.in" }, "<+0.35")

});

//
// SOUND PORTAL click
//

// Select the service tab links
const serviceTabLinks = document.querySelectorAll('.service-tab-link');

// Create a GSAP timeline
const soundClick = gsap.timeline({ paused: true });

// Add animations to the timeline
soundClick.to('.service-title_wrap', { duration: 0.5, height: "0px" })
soundClick.to('.slider_cms_title', { duration: 0.5, fontSize: "8vw" }, "<")
soundClick.to('.service-hero', { duration: 0.5, height: "100vh", paddingBottom: "0rem" }, "<")

// Add click event listeners to the service tab links
serviceTabLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Play the timeline when a service tab link is clicked
    soundClick.play();
  });
});

/* SOUND > .list-item */
const lisitem = document.querySelectorAll(".list-item");

lisitem.forEach((listitem, index) => {
  const liTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".list",
      start: "top 125%",
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
