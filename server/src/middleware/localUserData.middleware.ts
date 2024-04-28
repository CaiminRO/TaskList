import { Request, Response, NextFunction } from "express";


const setLocalUserData = (req: Request, res: Response, next: NextFunction) => {
    if (req.session && req.session.userId)
        res.locals.user = req.session.userId;
    else
        res.locals.user = null;

    next();
};

export { setLocalUserData };