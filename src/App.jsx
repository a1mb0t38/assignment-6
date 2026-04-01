import { Suspense } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Intro from './components/intro/Intro'
import NavBar from './components/navbar/NavBar'
import ProductsIntro from './components/products/ProductsIntro'
import Products from './components/products/Products'


const fetchdata = async () => {
  const res = await fetch("/data.json");

  return res.json();
}

function App() {

  const promiseProduct = fetchdata();

  return (

    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Intro></Intro>
      <ProductsIntro></ProductsIntro>
      <Suspense fallback={<span className="loading loading-ball loading-xl"></span>
      }>
        <Products promiseProduct={promiseProduct}></Products>
      </Suspense>
    </>
  )
}

export default App
