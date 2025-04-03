import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Posts from "./pages/Posts"
import DefaultLayout from "./layouts/DefaultLayout"
import Post from "./pages/Post"



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Home} />
            <Route path="/aboutUs" Component={AboutUs} />
            <Route path="/posts" Component={Posts} />
            <Route path="/posts/:id" Component={Post} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
