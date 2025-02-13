import React from 'react'
import tgIcon from '../img/tg.svg'
import instaIcon from '../img/insta.svg'
import fcBook from '../img/fcbook.svg'

export default function NavBar() {
  return (
    <section className='headerSection'>
      <div className='container'>
        <div className='navContact'>
          <div className='navContactInfo'>
            <a className='navPhone' href="tel:+998500105610">+998 (97) 707 07 77</a>
            <a className='navLocation' href="">Tashkent</a>
          </div>

          <div className='navSocial'>
            <a href="#"><img width={20} src={tgIcon} alt="Telegram" /></a>
            <a href="#"><img width={20} src={instaIcon} alt="Instagram" /></a>
            <a href="#"><img width={20} src={fcBook} alt="Facebook" /></a>
          </div>

          <div className='navLang'>
            <h2>O`zbekcha</h2>
          </div>
        </div>
      </div>
    </section>
  )
}
