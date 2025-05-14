import React from 'react'
import GBZ_LOGO from '../img/GBZ_LOGO.svg'
import AboutBeton from '../img/AboutBetonImg.png'

export default function AboutMe() {
  return (
    <section className='aboutMeSection'>
      <div className="container">
        <div className='aboutMeText'>
          <h2>Biz haqimizda</h2>
          <p>Bu yerdan kompaniyamiz haqida ma'lumot olishingiz mumkin</p>
        </div>

        <div className='aboutMeContent'>
          <div className='aboutMeInfo'>
            <img src={GBZ_LOGO} alt="GBZ_LOGO" />
            <p>2009-yilda tashkil etilgan Ricomel Beverages kompaniyasi o‘n uch yildan ortiq vaqtdan beri O‘zbekistonda yuqori sifatli va gazsiz mevali ichimliklar yetkazib berish bilan shug‘ullanadi. Kompaniya o'zining 10 dan ortiq ta'mi bilan Dinay, NRGo Xtrim, RicoLA Traditional, RicoLA Cherry va RicoLA Ice Coffee kabi tabiiy ichimliklar ishlab chiqaradi.</p>
          </div>

          <div className='AboutMeBeton'>
            <img src={AboutBeton} alt="AboutBeton" />
          </div>
        </div>
      </div>
    </section>
  )
}
