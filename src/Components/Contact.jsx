import React from 'react'

export default function Contact() {
  return (
    <section className='contactSection'>
      <div className="container">
        <div className='contactText'>
          <h2>Qo'shimcha ma'lumotlar <br /> olmoqchimisiz?</h2>
          <p>Siz bilan bog’lanishimiz uchun, o’z ma’lumotlaringizni qoldiring</p>
        </div>

        <div className="contactContent">
          <div className='contactDiv'>
            <label htmlFor="ism">Ismingiz</label> <br />
            <input id='ism' type="text" required placeholder='Ismingiz'/>
          </div>

          <div>
            <label htmlFor="tell">Telefon raqamingiz</label><br />
            <input id='tell' type="tel" required placeholder='+998'/>
          </div> 

          <button>Yuborish</button>
        </div>
      </div>
    </section>
  )
}
      
