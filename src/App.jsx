import React, { useState, useEffect } from 'react'
 

import Loading from './components/Loading' 

const App = () => {
const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  });
  



  return (
<>
{loading ? (
  <Loading />
) : (
  <div>
      
  <div className='loader_bg'>
      <div className='hexagon hexx' id='hexagon'></div>
      <div className='hexagon hex1' id='hexagon'></div>
      <div className='hexagon hex2' id='hexagon'></div>
      <div className='hexagon hex3' id='hexagon'></div>
      <div className='hexagon hex4' id='hexagon'></div>
      <div className='hexagon hex5' id='hexagon'></div>
      <div className='hexagon hex6' id='hexagon'></div> 
      <div className='load_text' id='text'>
        <h1 className='loh1'>It's a Meegos world, </h1>
        <h1 className='loh2'>we are just living in it. </h1>
        <div className='images'>
        <div className="img1" id="img1">
        
        </div>
        <div className="img2" id="img2">
  
        </div>
        <div className="img3" id="img3">
  
        </div>
        <div className="img4" id="img4">
  
        </div>
        </div>
      </div>

      <div className='abhead '>
              <h1 className='abhead jayboy'>Created by <span> Jayboy </span> for    <span className='meellist'> Meelist</span></h1>
          
          </div>
    </div>
{/* 
    //About */}

    
<div className='about'>
            <div className='hexagon' id='hexagon'></div>
      <div className='hexagon hex1' id='hexagon'></div>
      <div className='hexagon hex2' id='hexagon'></div>
      <div className='hexagon hex3' id='hexagon'></div>
      <div className='hexagon hex4' id='hexagon'></div>
      <div className='hexagon hex5' id='hexagon'></div>
      <div className='hexagon hex6' id='hexagon'></div> 
        <div className='about_cont'>
          <div className='abhead'>
              <h1 className='abhead'>Coming Soon to </h1>
            <span>Solana</span>
          </div>
          

            <div className='abtcent'>
            <div className="centhead">
<h1>10000 </h1>
                <span>TOTAL SUPPLY</span>
</div >
<div className="centinfo">
  <div>
    <h3>4800</h3>
    <span>whitelist mint</span>
  </div>
  <div>
    <h3>4444</h3>
    <span>reserved for smyths</span>
  </div>
  <div>
    <h3>500</h3>
    <span>public mint</span>
  </div>
  <div>
    <h3>256</h3>
    <span>treasury/team/marketing</span>
  </div>
</div>
            </div>

            <div className="mint">
              <span>Mint price and date to be released soon.</span> 
            </div>

            <div className='abhead '>
              <h1 className='abhead jayboy'>Created by <span> Jayboy </span> for    <span className='meellist'> Meelist</span></h1>
          
          </div>
        </div>
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