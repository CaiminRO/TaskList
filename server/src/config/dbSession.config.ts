import { sessionStore } from "./db.config";
import session from "express-session";

// Session setup
const sessionConfig = session({
    store: sessionStore,
    secret: process.env.SESSION_SECRET || "replace this at some point future me",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === "production",
        maxAge: 10 * 24 * 60 * 60 * 1000,
    },
});

export { sessionConfig }