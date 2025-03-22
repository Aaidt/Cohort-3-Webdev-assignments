import React from "react"
import { Navbar } from "./components/Navbar"
import { WishList } from "./components/WishList"
import { AmazonCart } from "./components/AmazonCart"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<AmazonCart />} />
              <Route path="/Wishlist" element={<WishList />} />
              <Route path="/AmazonCart" element={<AmazonCart />} />
            </Route>
          </Routes>
          
        </BrowserRouter>
      </RecoilRoot>
    </div>
  )
}

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}



export default App;