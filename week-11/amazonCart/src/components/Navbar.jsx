import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";


export const Navbar = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={Header} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

const Header = () => {
    return (
        <div>
            <Link to="/WishList">Amazon.in</Link>
            <Link to="/Cart">Cart</Link>
        </div>
    )
}
