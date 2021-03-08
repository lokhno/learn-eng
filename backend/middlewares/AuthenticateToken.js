import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

function AuthenticateToken(req, res, next) {
    const token = req.headers.token;
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedData) => {
        if (err) return res.sendStatus(403);
        req.user = decodedData._id;
        next();
    });
}

export default AuthenticateToken;
