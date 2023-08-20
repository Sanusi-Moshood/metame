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
 <h1> Welcome to <span>Metame</span></h1>
 <span>🎴 Card holders only 🎴</span>
  </div>
 </div>
</div>
<div className="about">
  <h2>Metame is more than just an NFT project. It's a movement that challenges the conventional wisdom about Solana NFTs. We're here to prove that the bull market is far from over and that innovation is alive. Our unique approach to anime-themed generative NFTs sets us apart, and our passionate community is proof of that.</h2>
</div>
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