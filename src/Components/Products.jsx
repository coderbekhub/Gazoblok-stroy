import React from 'react'
import productBeton from '../img/productBeton.png'

export default function Products() {
  return (
    <section className="productSection">
      <div className="container">
        <div className='productTextInfo'>
          <h2>Nega bizni tanlash kerak?</h2>
          <p>Sifat, tajriba va innovatsiyalarimiz bilan biznesingizni yangi bosqichlarga olib chiqing</p>
        </div>

        <div className='productsCard'>
          <div className='productCard'>
            <div className='productContentInfo'>
              <h3>60х30х10</h3>
              <img src={productBeton} alt="Beton img" />
              <h2>9000 UZS</h2>
              <p>Газобетонные блоки перегородочные <span>D600</span> Голицыно</p>
              <button><a href="">Buyurtma berish</a></button>
            </div>

            <div className='productContentInfo'>
              <h3>60х30х10</h3>
              <img src={productBeton} alt="Beton img" />
              <h2>9000 UZS</h2>
              <p>Газобетонные блоки перегородочные <span>D600</span> Голицыно</p>
              <button><a href="">Buyurtma berish</a></button>
            </div>

            <div className='productContentInfo'>
              <h3>60х30х10</h3>
              <img src={productBeton} alt="Beton img" />
              <h2>9000 UZS</h2>
              <p>Газобетонные блоки перегородочные <span>D600</span> Голицыно</p>
              <button><a href="">Buyurtma berish</a></button>
            </div>
          </div>

          <div className='productCard2 productCard'>
            <div className='productContentInfo'>
              <h3>60х30х10</h3>
              <img src={productBeton} alt="Beton img" />
              <h2>9000 UZS</h2>
              <p>Газобетонные блоки перегородочные <span>D600</span> Голицыно</p>
              <button><a href="">Buyurtma berish</a></button>
            </div>

            <div className='productContentInfo'>
              <h3>60х30х10</h3>
              <img src={productBeton} alt="Beton img" />
              <h2>9000 UZS</h2>
              <p>Газобетонные блоки перегородочные <span>D600</span> Голицыно</p>
              <button><a href="">Buyurtma berish</a></button>
            </div>

            <div className='productContentInfo'>
              <h3>60х30х10</h3>
              <img src={productBeton} alt="Beton img" />
              <h2>9000 UZS</h2>
              <p>Газобетонные блоки перегородочные <span>D600</span> Голицыно</p>
              <button><a href="">Buyurtma berish</a></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
