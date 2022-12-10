import React from 'react'
import '../style/whitePaper.scss'
import img from '../images/cov (2).png'
function WhitePaper() {
  return (
    <div className='whitepaper'>
    <div className='whitpaper___inner'>
 {/* text section */}
 <div className='whitepaper__text'>
        <h1 id = "switchpapertitle"></h1>
        <h5 id = "switchpapertext"></h5>
        </div>
{/* picture section */}
    <div className='whitepaper__picture'>
    {/* <img src={img}/> */}
     </div>
    </div>
</div>
  )
}

export default WhitePaper