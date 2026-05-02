const  roleBasedAuth =(role) =>(req, res, next)=>{
  
    if(req.user.role.includes("MERCHANT")) return next();

    res.status(403).send("Access denied.");
};

export default roleBasedAuth;