import Usermodel from "../schemas/userSchema.js";


async function loginLogics(req, res) {
   const {email, password}= req.body
const foundUser  = await Usermodel.findOne({email: email})
if (foundUser){
    if (password === foundUser.password) {
        res.send({message: "logged in"})
            // alert("logged in")
    }else{
        
        res.send({message: "wrong password"})
    }  
} else {
    
    res.send({message: "Not a registered user register first"})
}
}

export default loginLogics;
