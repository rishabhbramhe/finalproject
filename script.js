function pageOneAnimation(){
  var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#home",
        start: "top top",
        scrub: 1,
        pin: true,
        duration:10
    }
  })
  
  
  tl
  
  .from("#centreimg", {
  x:600,
  ease: Power1,
  }, )
  .to("#btm img", {
    rotate: "-180deg",
    scale: .6,
  
    stagger: .1,
    ease: Power1
  }, "same")
  .to("#top img", {
    scale: .6,
    stagger: .1,
    ease: Power1
  }, "same")
  
  .to("#overlay>h1", {
    y:200,
    display:"none",
    ease: Power1,
    stagger: .1,
  },"same")
  .to("#nav1", {
   color:"white",
   stagger: .1,
  },"same")
  
  
  tl.from("#c-one",{
    stagger: .1,
    y:350,
    scale:0,
  
  
  },"same")
  .to("#cimg img", {
    stagger: .1,
    scale:.2,
    display:"none"
  
  },"same")
  .to("#centreimg h3", {
    opacity:0,
    x:-16,
    stagger: .1,
  
  },"same")
  
  
  tl.to("#c-one",{
  opacity:0,
  stagger: .1,
  delay:.2
  
  },"one")
  tl.to("#circle",{
    scale:0,
    stagger: .1,
    delay:0.2
    
  },"one")
  
  
  tl.from("#pf>h1",{
    display:"none",
    stagger: .1,
    y:200,
    rotate:"10deg",
  },"one")
  
  tl.from("#lbox",{  
    y:830,
    stagger: .1,
    delay:.5
  },"one")
  tl.to("#lbox",{  
    y:-460,
    delay:.7
    
  })
  
  
  
  
                   
}
function pageTwoAnimation(){
  var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#home2",
        start: "top top",
        scrub: 1,
        pin: true,
        duration:10
    }
  })
  tl.to(".circle",{
    top:"30%",
    stagger:.6,
    delay:1,
    ease:Power1,
    duration:5
  })
  tl.to(".circle",{
   left:"50%"
  })
  tl.to("#pi",{
    scale:10,
    duration:8,
    ease:Power1
   },"white")
   tl.to("#tnav",{
    color:"white"
   },"white")
   .to("#nmbrcover2 h1",{
    top:"-100",
    duration:10,
    delay:2
    },"white")
  
    .to("#sbtm",{
      borderTop: "1px solid white"
      },)
    
   tl.to("#grdnt>h1",{
    left:"-140%",
    duration:11,
    ease:Power1
    
   },"grdnt")
   tl.to("#grdnt",{
    left:"0%",
    duration:10,
    delay:2,
    ease:Power1
    
   },"grdnt")
   .to("#nmbrcover1 h1",{
    top:"0",
    duration:20,
    delay:10
    },"grdnt")
   tl.to("#btmtext p",{
    opacity:0,
    ease:Power1,
    
     
    },"grdnt")
   
   tl.to("#twop",{
   opacity:1,
   ease:Power1,
   delay:.8
    
   },"grdnt")

   .to(".boxes",{
          bottom:"100%",
          stagger:.6,
          duration:5
   })
  
   .to(".sboxex",{
    left:"-50%",
    duration:5
    
},"samebox")
.to("#sbox6",{
  right:"-50%",
  duration:5
  
},"samebox")
  
.to(".microbx",{
  left:"-30%",
  duration:5
  
},"smbx")
.to("#microbx6",{
  left:"-30%",
  duration:5
  
},"smbx")

                   
}
function pageThreeAnimation(){
  var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#home3",
        start: "top top",
        scrub: 1,
        pin: true,
        duration:10
    }
  })
  tl.to("#ovrlays",{
    y:-3000,
    duration:10
  },"spin")
  tl.to("#ovrcrcle img",{
    rotate:"180deg",
    duration:5
  },"spin")
  tl.to("#ovrwrds h2",{
    left:"-180%",
    duration:5
  },"spin")
  tl.to("#same1",{
    left:"10%",
    duration:5,
    delay:1
  },"spin")
  tl.to("#same",{
    right:"20%",
    duration:5,
    delay:1
  },"spin")
  tl.to("#ovrimages img",{
    y:"-16%",
    stagger:.5,
   delay:-6
  },)
  tl.to("#ovrimages h1",{
    left:"-50%",
    stagger:.5,
   delay:4,
   duration:5,
  },"spin")
  tl.to("#box5",{
    opacity:0,
    delay:5
  },"o")
  tl.to("#bigcircle",{
    scale:6,
    duration:10
  },"o")

}
pageOneAnimation()
pageTwoAnimation()
pageThreeAnimation()
