import { JWT_PASSWORD } from "../config";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";


export async function userMiddleware(req: Request, res: Response, next: NextFunction) {
    const header = req.headers["authorisation"];
    const decoded = jwt.verify(header as string, JWT_PASSWORD)
    if (decoded) {
        if (typeof decoded === "string") {
            res.json({
                message: "you are not logged in"
            })
            return 
        }
        // @ts-ignore
        req.userId = (decoded as JwtPayload).id;
        next()
    }else{
        res.json({
            message: "you are not logged in"
        })
    }
} 