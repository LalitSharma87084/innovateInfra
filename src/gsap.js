var t = gsap.timeline();
t.from("li",{
    y:-50,
    duration:0.8,
    stagger:0.5,
    opacity:0,
})

gsap.from("#hero",{
    y:50,
    duration:1,
    opacity:0,
    delay:0.5,
})
gsap.from("#left-div",{
    y:50,
    duration:1,
    opacity:0,
    delay:0.7,
})

gsap.registerPlugin(ScrollTrigger);
gsap.from('#para', {
    opacity:0,
  scrollTrigger: {
    trigger: '#para',
    start: 'top 80%',
    end: 'bottom 20%',
    scroller:"body",
    scrub: 1,
    markers:true,
    toggleActions: 'restart none none reverse',
  },
  y: 70,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
});
gsap.from('#imgdiv', {
    
  scrollTrigger: {
    trigger: '#imgdiv',
    start: 'top 80%',
    end: 'bottom 30%',
    scroller:"body",
    stagger:1,
    scrub: 1,
   
    
    toggleActions: 'restart none none reverse',
  },
  stagger:0.5,
  x:50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
});
gsap.from('#content', {
    
    scrollTrigger: {
      trigger: '#content',
      start: 'top 80%',
      end: 'bottom 30%',
      scroller:"body",
      stagger:1,
      scrub: 1,
     
      
      toggleActions: 'restart none none reverse',
    },
    stagger:0.5,
    x:-50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });
gsap.from('#ecotext', {
    
    scrollTrigger: {
      trigger: '#ecotext',
      start: 'top 80%',
      end: 'bottom 40%',
      scroller:"body",
      stagger:1,
      scrub: 1,
      toggleActions: 'restart none none reverse',
    },
    stagger:0.5,
    y:50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });

  gsap.from('.mydiv1', {
    
    scrollTrigger: {
      trigger: '.mydiv1',
      start: 'top 70%',
      end: 'bottom 65%',
      scroller:"body",
      scrub: 1,
      markers:true,
      
      toggleActions: 'restart none none reverse',
    },
    stagger:0.5,
    y:50,
    rotate:25,
    opacity:0,
    duration: 1,
    ease: 'power3.out',
  });

  gsap.from('#news', {
    
    scrollTrigger: {
      trigger: '#news',
      start: 'top 70%',
      end: 'bottom 65%',
      scroller:"body",
      scrub: 1,
      markers:true,
      
      toggleActions: 'restart none none reverse',
    },
    stagger:0.5,
    x:100,
    
    opacity:0,
    duration: 1,
    ease: 'power3.out',
  });
 