import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <div>
            <Link to="/WishList">
                <img src="https://imgs.search.brave.com/CL55Zqc4j0WVfVFIVuSLLp2NTAyY0OT1gKubdSs7vQw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb21hZ2ljaWFu/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDEvVGhl/LVNtaWxlLWFuZC1B/cnJvdy1Mb2dvLWZy/b20tMjAwMC10aWxs/LVByZXNlbnQud2Vi/cA" />
            </Link><br />
            <Link to="/AmazonCart">Cart</Link>
        </div>
    )
}
