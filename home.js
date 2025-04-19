const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);

document.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    event.target.focus();
  }
});

// ---------- Master Timeline ----------

var master = gsap.timeline({
    repeat: -1,
    ease: "back"
  })

  //
  // ---------- Slide 1 - MOTION ----------
  //

  .add("slide1", "<+0.3")
  // Title
  .to(".slider_cms_item:nth-child(1) .slider_cms_title", {
    opacity: 1,
    color: "#fff",
    duration: 0.3
  })
  .to(".slider_cms_item:not(:nth-child(1)) .slider_cms_title", {
    opacity: 0.25,
    color: "rgba(0, 0, 0, 0)"
  }, "<")

  .to(".slider_dot_item:nth-child(1) .slider_dot_line", { scaleX: "1", x: "0%", duration: 5 }, "<")

  // Dot
  .fromTo(".slider_dot_item:nth-child(1) .slider_dot_line", { x: "0%" }, { x: "100%" })
  .set(".slider_dot_item:nth-child(1) .slider_dot_line", { x: "-100%", duration: 0 })

  //
  // ---------- Slide 2 - SPACE ----------
  //

  .add("slide2", "<+0.3")
  // Title
  .to(".slider_cms_item:nth-child(3) > .slider_cms_title", {
    opacity: 1,
    color: "#fff",
    duration: 0.3
  })
  .to(".slider_cms_item:not(:nth-child(3)) .slider_cms_title", {
    opacity: 0.25,
    color: "rgba(0, 0, 0, 0)"
  }, "<")

  .to(".slider_dot_item:nth-child(2) .slider_dot_line", { scaleX: "1", x: "0%", duration: 5 }, "<")

  // Dot
  .fromTo(".slider_dot_item:nth-child(2) .slider_dot_line", { x: "0%" }, { x: "100%" })
  .set(".slider_dot_item:nth-child(2) .slider_dot_line", { x: "-100%", duration: 0 })

  //
  // ---------- Slide 3 - SOUND ----------
  //

  .add("slide3", "<+0.3")

  // Title
  .to(".slider_cms_item:nth-child(5) .slider_cms_title", {
    opacity: 1,
    color: "#fff",
    duration: 0.3
  })
  .to(".slider_cms_item:not(:nth-child(5)) .slider_cms_title", {
    opacity: 0.25,
    color: "rgba(0, 0, 0, 0)"
  }, "<")

  .to(".slider_dot_item:nth-child(3) .slider_dot_line", { scaleX: "1", x: "0%", duration: 5 }, "<")

  // Dot
  .fromTo(".slider_dot_item:nth-child(3) .slider_dot_line", { x: "0%" }, { x: "100%" })
  .set(".slider_dot_item:nth-child(3) .slider_dot_line", { x: "-100%", duration: 0 })

document.getElementById("nav-1").addEventListener("mouseover", () => { master.pause("slide1"); });
document.getElementById("nav-2").addEventListener("mouseover", () => { master.pause("slide2"); });
document.getElementById("nav-3").addEventListener("mouseover", () => { master.pause("slide3"); });
document.getElementById("nav-1").addEventListener("mouseleave", () => { master.play("slide1"); });
document.getElementById("nav-2").addEventListener("mouseleave", () => { master.play("slide2"); });
document.getElementById("nav-3").addEventListener("mouseleave", () => { master.play("slide3"); });
