var cursor = document.querySelector(".cursor")
var main = document.querySelector(".main")
var video = document.querySelector("video")

document.addEventListener("mousemove", function(dets){
  cursor.style.left = dets.x+ 20 +"px"
  cursor.style.top = dets.y+ 20 +"px"

  video.addEventListener("mouseenter", function(){
    cursor.innerHTML = "Sound On"
    cursor.style.color = "black"
    cursor.style.width = "100px"
    cursor.style.padding = "auto"
    cursor.style.borderRadius = "50px"
  })
  video.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""
    cursor.style.width = "20px"
    cursor.style.borderRadius = "50%"
  })

})
//nav bar 
const h4Elements = document.querySelectorAll('.nav-part2 h4');

h4Elements.forEach(h4 => {
    h4.addEventListener('mouseover', () => {
        // Remove border-bottom from all h4 elements
        h4Elements.forEach(element => {
            element.style.borderBottom = 'none';
        });
        // Add border-bottom to the current h4 element
        h4.style.borderBottom = '1.5px solid white';
    });
});

var h4 = document.querySelectorAll(".nac h4")
var purple = document.querySelector(".purple")

h4.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        purple.style.display = "block"
        purple.style.opacity = "1"        
    })
    elem.addEventListener("mouseleave", function(){
      purple.style.display = "none"
      purple.style.opacity = "0"        
  })
})

function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init();

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top 30%",
        end:"top 0",
        scrub:3
    }
})

tl.to(".page1 h1",{
    x:-100,
}, "anim")
tl.to(".page1 h2",{
  x:100,
}, "anim")
tl.to(".page1 video",{
  width: "90%",
}, "anim")

var tl2 = gsap.timeline({
  scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",
      // markers:true,
      start:"top -120%",
      end:"top 130",
      scrub:3
  }
})
tl2.to(".main",{
  backgroundColor: "#FFF"
})

var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",
      // markers:true,
      start:"top -380%",
      end:"top -400%",
      scrub:3
  }
})

tl3.to(".main",{
    backgroundColor: "#0F0D0D"
})


var boxes = document.querySelectorAll(".box")

boxes.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
      var att = elem.getAttribute("data-image")
      cursor.style.width = "450px"
      cursor.style.height = "370px"
      cursor.style.borderRadius = "0"
      cursor.style.backgroundImage = `url(${att})`
  
    })
    elem.addEventListener("mouseleave", function(){
      cursor.style.width = "20px"
      cursor.style.height = "20px"
      cursor.style.borderRadius = "50%"
      cursor.style.backgroundImage = `none`
    })
})

