import jwt from "../utils/jwt.js";

const auth = (req, res, next) => {
    
        const cookie = req.headers.cookie;
        const token = cookie.split("=")[1];

        if(!cookie)
            return   res.status(401).send("User not authenticated.");
        

        if(!token)
         return   res.status(401).send("User not authenticated.");
         
    
       try {
        const data = jwt.verifyToken(token);
        
        req.user = data;

        next();
        
       } catch (error) {
      
        return res.status(401).send("Invalid token.");

       };

};

export default auth;