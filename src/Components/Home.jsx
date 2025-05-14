import React from 'react'
import NavBar from './NavBar'
import About from './About'
import Products from './Products'
import ProductsSecond from './ProductsSecond'
import AboutMe from './AboutMe'

export default function Home() {
  return (
    <>
      <NavBar />
      <About />
      <Products />
      <ProductsSecond />
      <AboutMe />
    </>
  )
}
