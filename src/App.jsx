import React, { useState, useEffect } from 'react'
 

import Loading from './components/Loading' 

const App = () => {
const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 17000);
  });
  



  return (
<>
{loading ? (
  <Loading />
) : (
<div>
<div className='home'>
  
 <div className="cont">
  <div className="home_text">
 <h1> Welcome to <span className='tsn'>Metame</span></h1>
 <span > <span className='tsn'>🎴 </span> Card holders only <span className='tsn'>🎴 </span></span>
  </div>
 </div>
</div>
<div className="video">
<video autoPlay loop muted >
  <source src="HQ.mp4" type="video/mp4"/>
</video>
</div>
<div className="sol">
<video src="gif.mp4" muted autoPlay loop  className='vid'></video>
  <div className='tet'>
    <h1>LET'S MAKE <span> NFT</span> <br /> <span> FUN </span>AGAIN</h1>
  </div>
</div>
<div className="team">
<h1>Team 🎴</h1>
  <div className="team-cont">
    <div className="member">
      <img src="bill.jpg" alt="" />
      <div>
        <h4>BILL</h4>
        <span>Founder / Developer</span>
      </div>
    </div>
    <div className="member">
      <img src="adam.jpg" alt="" />
      <div>
        <h4>ADAM</h4>
        <span>Co-Founder</span>
      </div>
    </div>
    <div className="member">
      <img src="ape.jpg" alt="" />
      <div>
        <h4>APES94</h4>
        <span>Co-Founder / Artist</span>
      </div>
    </div>
    <div className="member">
      <img src="dmy.jpg" alt="" />
      <div>
        <h4>DMYTRO</h4>
        <span>Developer</span>
      </div>
    </div>
    <div className="member">
      <img src="snap.jpg" alt="" />
      <div>
        <h4>Snap</h4>
        <span>Advisor</span>
      </div>
    </div>
  </div>
  
</div>

<div className="cardbuild">
  <h1>Solana is our <span>home forever</span></h1>
  <div className="cards">
    <img src="m01.jpg" alt="" />
    <img src="m02.jpg" alt="" />
    <img src="m03.jpg" alt="" />
    <img src="m05.jpg" alt="" />
    {/* <img src="m0.jpg" alt="" /> */}
    <img src="g1.jpg" alt="" />
    <img src="g2.jpg" alt="" />
    <img src="g5.jpg" alt="" />
    <img src="g4.jpg" alt="" />
    <img src="m1.jpg" alt="" />
    <img src="m2.jpg" alt="" />
    <img src="m3.jpg" alt="" />
    <img src="m4.jpg" alt="" />
    <img src="m5.jpg" alt="" />
    <img src="m6.jpg" alt="" />
    <img src="m7.jpg" alt="" />
    <img src="m8.jpg" alt="" />
    <img src="m9.jpg" alt="" />
    <img src="m10.jpg" alt="" />
    <img src="m11.jpg" alt="" />
    <img src="m12.jpg" alt="" />
    <img src="m13.jpg" alt="" />
    <img src="m14.jpg" alt="" />
    <img src="m15.jpg" alt="" />
    <img src="m16.jpg" alt="" />
    <img src="m1.png" alt="" />

  </div>
</div>

<div className="sol disci">
<img src="card.jpg" alt="" />
  <div className='tet'>
    <h1>Discord by <span>invite</span> only</h1>
  </div>
</div>



<footer>
  Made by <span> <a href="https://twitter.com/olawale_dev" target='blank'> Olawale.dev</a></span>
</footer>
</div>
)}
</>
  )
}

export default App



// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';  


// const App = () => {
    
//   const [loading, setLoading] = useState(true);

//   return (
// <div>
// {loading ? (
//       <>
//       <Loading />
              
//       </>
//             ) : (
// )
//   }
// </div>
//   )
// }

// export default App