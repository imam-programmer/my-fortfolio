let h1text = document.querySelector(".hero-title").textContent;
let h1 = document.querySelector(".hero-title");
let splittext = h1text.split("");

let halfvalue = splittext.length / 2;
let clutter = "";

splittext.forEach((elem, idx) => {
  if (idx < halfvalue) {
    clutter += `<span class="a">${elem}</span>`;
  } else {
    clutter += `<strong class="b">${elem}</strong>`;
  }
  h1.innerHTML = clutter;
});

let navtime = gsap.timeline();
navtime.from(".navbar-brand", {
  y: -100,
  duration: 1,
  opacity: 0,
});
if (window.innerWidth > 991){

  navtime.from(".nav-item", {
    y: -100,
    opacity: 0,
    stagger: 0.5,
  });
}





navtime.from(
  ".hero-text",
  {
    x: -100,
    opacity: 0,
    duration: 1,
  },
  "-=1",
);

navtime.from(
  ".hero-image",
  {
    x: 100,
    opacity: 0,
    duration: 1,
  },
  "-=2",
);

navtime.from(
  ".hero-btns",
  {
    y: 100,
    opacity: 0,
    duration: 1,
  },
  "-=1",
);
navtime.from(
  ".social-icons a i",
  {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: -0.3,
  },
  "-=1",
);
navtime.from(
  ".social-icons ",
  {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: -0.3,
  },
  "-=2",
);
// ==================herupart end==============================

// =========expertize start====================
let skillanimation=gsap.timeline(
  {
  scrollTrigger: {
    trigger: "#skills #s-h2",
    scroller: "body",
    // markers: true,
    start:'top 30%'
  },
  }
)
skillanimation.from("#skills #s-h2", {
  y: -100,
  opacity: 0,
  duration: 1,
});
let skill_p=document.querySelector("#skills .section-title p")
console.log(skill_p)
skillanimation.from(skill_p, {
  y: 100,
  opacity: 0,
  duration: 1,
});

let skillbox=gsap.timeline(
 { 
  scrollTrigger:{
trigger:"#con",
scroller:"body",
start:"top 50%",
end:"top 10%",
scrub:2
  }
}
);
skillbox.from(".one",{
  x:-200,
  duration:2,
  opacity:0
},"i")
skillbox.from(".two",{
  y:200,
  duration:2,
  opacity:0
})
skillbox.from(".three",{
  y:200,
  duration:2,
  opacity:0
})
skillbox.from(".four",{
  x:200,
  duration:2,
  opacity:0
},"i")



// =====================================project start================
gsap.from("#projects h2",{
  y:100,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#projects h2",
    start:"top 60%"
  }
})
gsap.from("#projects .section-title p",{
  y:-100,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#projects h2",
    start:"top 60%"
  }
})

let projectbox=gsap.timeline({
  scrollTrigger:{
    trigger:"#projects",
    scroller:"body",
   start:"top 30%"
  }
})
projectbox.from(".box-one",{
  x:-200,
  duration:0.8,
  opacity:0
},"f")
projectbox.from(".box-two",{
  y:200,
  duration:0.8,
  opacity:0
},)
projectbox.from(".box-three",{
  x:200,
  duration:0.8,
  opacity:0
},"f")
projectbox.from(".box-four",{
  x:-200,
  duration:0.8,
  opacity:0
},"s")
projectbox.from(".box-five",{
  y:-200,
  duration:0.8,
  opacity:0
},)
projectbox.from(".box-six",{
  x:200,
  duration:0.8,
  opacity:0
},'s')


// ============about start================
let about=gsap.timeline({
  scrollTrigger:{
    trigger:"#about",
    scroller:"body",
    start:"top 30%"
  }
});
about.from("#about .section-title h2",{
  opacity:0,
  duration:1,
  y:-200
})
about.from("#about .a-img",{
  opacity:0,
  duration:1,
  x:-200
},"a")
about.from("#about .a-text",{
  opacity:0,
  duration:1,
  x:200
},"a");



// ===================================contact=============
let contacth2text=document.querySelector(".contact-box h2").textContent;
let contacth2=document.querySelector(".contact-box h2");
let emty=""
let splic=contacth2text.split("");
let half = contacth2text.length / 2;

splic.forEach((elem, idx) => {
  if (idx < half) {
    emty += `<strong class="c">${elem}</strong>`;
  } else {
    emty += `<strong class="d">${elem}</strong>`;
  }
  contacth2.innerHTML = emty;
});

let contacttime=gsap.timeline({
  scrollTrigger:{
    trigger:"#contact",
    scroller:"body",
    start:"top 60%"
  }
})
contacttime.from("#contact .contact-box",{
  y:100,
  opacity:0,
  duration:1
})
contacttime.from(".c", {
  x:100,
  stagger: 0.1,
  opacity: 0,

},"h");
contacttime.from(".d", {
  x:-100,
  stagger: -0.1,
  opacity: 0,
},"h");

contacttime.from("#contact .contact-box p",{
  y:100,
  opacity:0,
  duration:1
})




if (window.innerWidth < 992) {
  let icon = gsap.timeline();
  icon.from(".nav-item", {
    x: 500,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
  });
  icon.pause();
  let nav = document.querySelector(".navbar-toggler");
  nav.addEventListener("click", (e) => {
    icon.play();
  });
}

gsap.from(".a", {
  stagger: 0.1,
  opacity: 0,
});
gsap.from(".b", {
  stagger: -0.1,
  opacity: 0,
});

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
  console.log(e);
});
