import React, { useEffect, useState } from "react";
import axios from "axios";

export const RandomUsers = () => {
    useEffect(async () => {

        const response = await axios.get("https://randomuser.me/api/");
        const user = response.data.results[0];
        
        console.log();


    }, [])
}

 