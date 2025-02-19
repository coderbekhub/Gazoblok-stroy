import React from 'react'
import CardImg1 from '../img/cardImg1.png'
import CardImg2 from '../img/cardImg2.png'

export default function About() {
  return (
    <section className="aboutSection">
      <div className="container">
        <div className="aboutText">
          <h2>Nega bizni tanlash kerak?</h2>
          <p>Sifat, tajriba va innovatsiyalarimiz bilan biznesingizni yangi bosqichlarga olib chiqing</p>
        </div>

        <div className='aboutCards'>
          <div className='aboutCardBig'>
            <h2>Sizning ishonchli biznes hamkoringiz!</h2>
            <p>Raqobatdosh narxlar, sifatli xizmat va o'z vaqtida yetkazib berish - biz bilan hamkorlik qilishning afzalliklari</p>
            <img src={CardImg1} alt="Card Img" />
          </div>

          <div className='aboutCard'>
            <div className='aboutCard2'>
              <div>
                <h2>Ishonchli qurilish uchun eng yaxshi yechimlar</h2>
                <p>Sizning talablaringizni aniqlab, eng yaxshi variantlarni taqdim etish uchun biz yuqori sifatli gazoblok mahsulotlarini taklif etamiz</p>
              </div>
              <img src={CardImg2} alt="Card img" />
            </div>
            <div className='aboutCardSecond'>
              <div className='card1'>
                <h2>Oson to'lov</h2>
                <p>Bu xaridlar o'tkazish paytida mijozlar uchun qulaylik yaratish uchun mo'ljallangan to'lov usullarining birligidir</p>
              </div>
              <div className='card2'>
                <h2>Ajoyib sifat</h2>
                <p>Sifatli materiallar va eng so'nggi texnologiyalar bilan, biz sodda va samarali xizmatlarni taqdim etamiz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}