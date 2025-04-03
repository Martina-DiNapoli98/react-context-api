import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react";
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Posts from "./pages/Posts"
import DefaultLayout from "./layouts/DefaultLayout"
import Post from "./pages/Post"
import PostContext from './context/PostContext'


function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {

        setProducts(data)

      })
      .catch(err => {
        console.log('ERROR', err);
      })

  }, [])

  return (
    <>

      <PostContext.Provider value={{ products: products }}>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={Home} />
              <Route path="/aboutUs" Component={AboutUs} />
              <Route path="/posts" element={<Posts products={products} />} />
              <Route path="/posts/:id" Component={Post} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PostContext.Provider>

    </>

  )
}

export default App
