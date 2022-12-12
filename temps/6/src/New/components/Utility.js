import React from 'react'
import '../style/utility.scss'
import midImg from '../images/cov.png'
import logo1 from '../logo/body.png'
function Utility() {
  return (
    <div className='utility'>
       <h1>אז מה המטרה שלכם ?!</h1>
    {/* 3 grid */}
    <div className='utility__sections'>
    {/* 3 inner sections */}
        <div className='utility__inner__sections'>
        {/* 4 logo */}
     <div className='utility__logo__collection'>
     <div><img src={logo1}/><h5> המטרה שלכ</h5></div>
        <div><img src={logo1}/><h5> המטרה שלכ</h5></div>
        <div><img src={logo1}/><h5> המטרה שלכ</h5></div>
     </div>
        </div>

        <div className='utility__inner__sections'>
         {/* mid img */}
         <div className='mid__img'><img src={midImg}/></div>
        </div>


        <div className='utility__inner__sections'>
                {/* 4 logo */}
               <div className='utility__logo__collection'>
               <div><img src={logo1}/><h5> המטרה שלכ</h5></div>
                <div><img src={logo1}/><h5> המטרה שלכ</h5></div>
                <div><img src={logo1}/><h5> המטרה שלכ</h5></div>
               </div>
        </div>


    
        </div>
    </div>
  )
}

export default Utility