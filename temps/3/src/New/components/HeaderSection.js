import React from 'react'
import '../style/header.scss'
// import headerImg from '../images/G-FitLogo.png'
function HeaderSection() {
  return (
    <div className='gym__header'>
      <div className=''>
      </div>
     {/* the text on the picture */}
    <div className='gym__header__text'>
      {/* <img src={headerImg}/> */}
      <h2 id = "switchname">INSERTNAME</h2>
      <h1 id = "switchslogan">INSERTSLOGAN</h1>
      <br />
      <a href = "#overview"> <button className='gym__header__button'>לפרטים נוספים</button></a>
      </div>
    </div>
  )
}

export default HeaderSection