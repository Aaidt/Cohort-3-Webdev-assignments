import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../Navbar.module.css"

export const Navbar = () => {
    return (
        <div style={{ display: "flex", backgroundColor: "#130f40", flexDirection: "row", justifyContent: "space-between" }}>
            <Link to="/WishList">
                <img
                    src="https://imgs.search.brave.com/CL55Zqc4j0WVfVFIVuSLLp2NTAyY0OT1gKubdSs7vQw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb21hZ2ljaWFu/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDEvVGhl/LVNtaWxlLWFuZC1B/cnJvdy1Mb2dvLWZy/b20tMjAwMC10aWxs/LVByZXNlbnQud2Vi/cA"
                    style={{ height: "10vh", width: "10vw", marginLeft: 0 }}
                />
            </Link><br />
            <Link to="/AmazonCart">
                <span style={{ marginRight: 0 }}>
                    <img
                        src="https://imgs.search.brave.com/Nlp7qL_SsoL8kNh1Q4pP4n2Tr2Tnqytvm6TIjyVG9Uk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzk3LzAwLzA1/LzM2MF9GXzk3MDAw/NTUyX2Q4UndpWkFu/RmV3em5pc1FwaFB0/anl4eFJOQUFaUTky/LmpwZw"
                        style={{ height: "10vh", width: "5vw" }}
                    />

                </span>
            </Link>
        </div>
    )
}
