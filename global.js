gsap.registerPlugin(ScrollTrigger);

// Delay 0.9 seconds for Page Transition
$('.delay9').click(function (e) {
  e.preventDefault(); // prevent default anchor behavior
  var goTo = this.getAttribute("href"); // store anchor href
  setTimeout(function () {
    window.location = goTo;
  }, 900); // the duration of the "load out" animation in milliseconds
});

// Delay 0.5 seconds for Page Transition
$('.delay5').click(function (e) {
  e.preventDefault(); // prevent default anchor behavior
  var goTo = this.getAttribute("href"); // store anchor href
  setTimeout(function () {
    window.location = goTo;
  }, 500); // the duration of the "load out" animation in milliseconds
});

// Delay 0.3 seconds for Page Transition
$('.delay3').click(function (e) {
  e.preventDefault(); // prevent default anchor behavior
  var goTo = this.getAttribute("href"); // store anchor href
  setTimeout(function () {
    window.location = goTo;
  }, 300); // the duration of the "load out" animation in milliseconds
});

// Delay 0.2 seconds for Page Transition
$('.delay2').click(function (e) {
  e.preventDefault(); // prevent default anchor behavior
  var goTo = this.getAttribute("href"); // store anchor href
  setTimeout(function () {
    window.location = goTo;
  }, 200); // the duration of the "load out" animation in milliseconds
});

//
// NAV LOGO LINK
//
// Select the .brand element
const navLogos = document.querySelector('.brand');

// Create a GSAP timeline
const navLogo = gsap.timeline({ paused: true });
navLogo.to('.home-reset-col', { opacity: 1, y: '0%', duration: 2 });

//
// NAV BURGER
//
// Select the .nav_burger-icon element
const burgerIcon = document.querySelector('.nav_burger-icon');

// Create a GSAP timeline
const navBurger = gsap.timeline({ paused: true });
navBurger.set('.nav_menu', {
  width: "100%",
  height: "100dvh",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
})
navBurger.fromTo('.nav_menu-wrap', {
  opacity: 0,
  x: '100%'
}, {
  duration: 0.3,
  opacity: 1,
  x: '0%'
})
navBurger.from('.nav_link, .nav_link-sound', {
  duration: 0.3,
  opacity: 0,
  y: '50%',
  stagger: 0.1
});

// Variable to keep track of the toggle state
let isMenuOpen = false;

// Add a click event listener to the burger icon
burgerIcon.addEventListener('click', () => {
  if (!navBurger.isActive()) {
    // Toggle the menu state
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      // Play the timeline forward
      navBurger.play();
    } else {
      // Reverse the timeline
      navBurger.reverse();
    }
  }
});

// 
// NAV LINK -> Sound Hover
// 
// Select the .nav_link.cc-sound element
const navLinkSound = document.querySelector('.nav_links-wrap-sound');

// Create a GSAP timeline
const navSoundHover = gsap.timeline({ paused: true });
navSoundHover.to('.nav_sublinks-wrap', {
  duration: 0.3,
  height: 'auto',
  stagger: 0.1
});

// Add a mouseenter event listener to the .nav_link.cc-sound element
navLinkSound.addEventListener('mouseenter', () => {
  if (!navSoundHover.isActive()) {
    // Play the timeline forward
    navSoundHover.play();
  }
});

// Add a mouseleave event listener to the .nav_link.cc-sound element
navLinkSound.addEventListener('mouseleave', () => {
  if (!navSoundHover.isActive()) {
    // Reverse the timeline
    navSoundHover.reverse();
  }
});

// 
// NAV LINK -> Page Transition
// 
// Select all .nav-link elements
const navLinks = document.querySelectorAll('.nav_link');

// Create a GSAP timeline
const navLinkTL = gsap.timeline({ paused: true });
navLinkTL.to('.nav_links-wrap, .nav_link-sound', {
  duration: 0.3,
  x: '30%',
  opacity: 0,
  stagger: 0.05
})
navLinkTL.to('.nav_social-link', { duration: 0.3, y: '50%', opacity: 0, stagger: 0.05 }, "<")

// Add a click event listener to each .nav-link element
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    if (!navLinkTL.isActive()) {
      // Play the timeline
      navLinkTL.play();
    }
  });
});

//
// NAV BURGER BACKGROUND
//
/* Global > .nav_burger_icon-wrap */
// Create a GSAP timeline
const burgerTimeline = gsap.timeline();

// Add animations to the timeline
burgerTimeline.to('.nav_burger_icon-wrap', { duration: 1 });

// Create a ScrollTrigger for the timeline
ScrollTrigger.create({
  trigger: '.brand',
  start: '200% top',
  animation: burgerTimeline,
  toggleActions: "play play play reverse"
});

//
// GLOBAL IMG WIPE EFFECT
//
/* Global .img */
const images = document.querySelectorAll(".img");

images.forEach((image, index) => {
  const imgTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: image,
      start: "20% bottom",
      ease: "expo.out",
      toggleActions: "play play play play"
    },
  });

  imgTimeline.fromTo(
    image, { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      stagger: 0.2, // Stagger the animation based on the index of the image
      delay: index * 0.3 // Add a delay based on the index of the image
    }
  );
});

/* Global .equipment-card */
const equipment = document.querySelectorAll(".equipment-card");

equipment.forEach((equipment, index) => {
  const equipmentTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".sound-equipment",
      start: "top 85%",
      ease: "expo.out",
      toggleActions: "play play play play"
    },
  });

  equipmentTimeline.fromTo(
    equipment, { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", opacity: 0 },
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      opacity: 1,
      stagger: 0.05, // Stagger the animation based on the index of the image
      delay: index * 0.025 // Add a delay based on the index of the image
    }
  );
});
