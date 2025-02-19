import React from 'react'
import tgIcon from '../img/tg.svg'
import instaIcon from '../img/insta.svg'
import fcBook from '../img/fcbook.svg'
import navBrand from '../img/navBrand.svg'
import Hero from './Hero'

export default function NavBar() {
  return (
    <section className='headerSection'>
      <div className='container'>
        <div className='navContact'>
          <div className='navContactInfo'>
            <a className='navPhone' rel="nofollow" href="tel:+998500105610">+998 (97) 707 07 77</a>
            <a className='navLocation' href="">Tashkent</a>
          </div>

          <div className='navSocial'>
            <a href="#"><img width={20} src={tgIcon} alt="Telegram" target='_blank' /></a>
            <a href="#"><img width={20} src={instaIcon} alt="Instagram" target='_blank' /></a>
            <a href="#"><img width={20} src={fcBook} alt="Facebook" target='_blank' /></a>
          </div>

          <div className='navLang'>
            <h2>O`zbekcha</h2>
          </div>
        </div>

        <nav className='nav'>
          <a className='logo' href="/"><img src={navBrand} alt="Logo" /></a>
          <ul className='navList'>
            <li><a to='Glavni'>Biz haqimizda</a></li>
            <li><a to='Onas'>Gazablok turlari </a></li>
            <li><a to='Uslugi'>Kalkulyator</a></li>
            <li><a to='Zakaz'>Murojaat uchun</a></li>
          </ul>

          <button><a activeClass="active" spy={true} smooth={true} offset={0} duration={100} to='Form'>Buyurtma berish</a></button>
          <div className=''>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </div>
        <Hero />
    </section>
  )
}
