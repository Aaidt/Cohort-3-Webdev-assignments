// import { JWT_PASSWORD } from "../config";
// import { NextFunction, Request, Response } from "express";
// import jwt, { JwtPayload } from "jsonwebtoken";


// export async function userMiddleware(req: Request, res: Response, next: NextFunction) {
//     try {
//         const header = req.headers["authorization"];
//         const decoded = jwt.verify(header as string, JWT_PASSWORD) as JwtPayload;
//         if(!header){
//             res.json({
//                 message: "header missing"
//             })
//         }
//         if (decoded) {
//             if (typeof decoded === "string") {
//                 res.json({
//                     message: "you are not logged in"
//                 })
//                 return
//             }
//             req.userId = (decoded as JwtPayload).id;
//             next()
//         } else {
//             res.json({
//                 message: "you are not logged in"
//             })
//         }
//     } catch (e) {
//         console.error("JWT verification error:", e);
//         return res.status(401).json({ message: "Unauthorized: Invalid or missing token" });
//     }

// } 

import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_PASSWORD } from "../config";

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string, JWT_PASSWORD)
    if (decoded) {
        if (typeof decoded === "string") {
            res.status(403).json({
                message: "You are not logged in"
            })
            return;    
        }
        req.userId = (decoded as JwtPayload).id;
        next()
    } else {
        res.status(403).json({
            message: "You are not logged in"
        })
    }
}