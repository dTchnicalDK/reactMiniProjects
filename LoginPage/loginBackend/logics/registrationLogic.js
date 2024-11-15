import Usermodel from "../schemas/userSchema.js";

async function registrationLogic(req, res){
    const {name, email, password } = req.body;
      const fondUser = await Usermodel.findOne({email: email})
      if (fondUser) {
        res.send({message: "user already registered"})
      } else {
        try { 
          await Usermodel.create({
                     name: name,
                     email: email,
                     password: password
                 })
                 res.send({message: "user created successfully, Now login"});
         } catch (error) {
           console.log(error.message) 
         }
      }
}
export default registrationLogic;
