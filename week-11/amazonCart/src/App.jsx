import React from "react"
import { Navbar } from "./components/Navbar"
import { WishList } from "./components/WishList"
import { AmazonCart } from "./components/AmazonCart"
import { BrowserRouter, Routes, Route, Layout, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AmazonCart />} />
            <Route path="/Wishlist" element={<WishList />} />
            <Route path="/AmazonCart" element={<AmazonCart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  )
}



export default App;