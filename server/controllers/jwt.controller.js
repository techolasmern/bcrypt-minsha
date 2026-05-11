const jwt = require("jsonwebtoken");
const env = require("../config/env.config");

const createToken = (request, response) => {
    try {
        const { payload } = request.body;
        if(!payload) {
            return response.status(400).send({ message: "Payload is required" });
        }
        const token = jwt.sign({ sub: payload }, env.JWT_SECRET, {
            expiresIn: 90
        });
        return response.status(200).send({ token });
    } catch (e) {
        return response.status(500).send({ message: e.message || "Internal server error" });
    }
}

const verifyToken = (request, response) => {
    try {
        const tokenData = request.headers.authorization;
        const [type, token] = tokenData.split(" ");
        if(type != "Bearer") {
            return response.status(400).send({ message: "Invalid token type" });
        }
        const verified = jwt.verify(token, env.JWT_SECRET);
        if (verified) {
            return response.status(200).send({ message: "Token is valid" });
        } 
        return response.status(400).send({ message: "Token is invalid" });
    } catch (e) {
        return response.status(500).send({ message: e.message || "Internal server error" });
    }
}

module.exports = {
    createToken, verifyToken
}