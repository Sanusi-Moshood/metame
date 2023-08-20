import { gsap } from "gsap";
import { useEffect } from "react";

const Loading = () => {

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(
      '.text', 
      {
        opacity: 0,
        ease: 'power1.out',
        delay: 2,
        duration: 1
      }
    )
    .to('.load_img', {
      
      opacity:1,
      duration: 0.001,
      
      ease: 'power2.in',
    })
    .to(
      '#img3', {
        opacity:0,
        ease: 'power1.out',
        delay: 2,
      }
    )
    .to(
      '#img2', {
        opacity:0,
        ease: 'power1.out',
        delay: 2,
      }
    )
    .to(
      '#img1', {
        opacity:0,
        ease: 'power1.out',
        delay: 2,
      }
    )
    .to(
      '.text', 
      {
        opacity: 1,
        ease: 'power1.in',
        duration: 1
      }
    )
    .to(
      '.center', 
      {
        opacity: 0,
        ease: 'power3.out',
        duration: 1,
        delay:2
      }
    )
    .to(
      '.cent', {
        opacity:1,
        ease: 'power3.out',
        duration: 1,
      }
    )
  }, [])
 

    
    

    return (
  <div className="loading"> 
<div className="center">
  <div className="text" id="text">
    <h1>ME</h1>
    <h1>TA</h1>
    <h1>ME</h1>
  </div>

<img src="m1.jpg" alt="" className="load_img " id="img1"/>
<img src="m8.jpg" alt="" className="load_img " id="img2"/>
<img src="m7.jpg" alt="" className="load_img " id="img3"/>
</div>

<div className="cent">
  <h1>Coming soon to <span>Solana</span></h1>
</div>
  </div>
    );
  };
  
  export default Loading;