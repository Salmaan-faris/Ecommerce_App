import userModel from "../model/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import validator from 'validator'


const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET) 
}
//Route for userlogin 
const userLogin = async (req,resp)=>{

    try {
        const {email , password} = req.body

        const user = await userModel.findOne({email});

        if (!user) {
            return resp.json({success:false, message:"user doesn't exist"})
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if (isMatch) {
            const token = createToken(user._id)
            resp.json({success:true,token})
        }else{
            resp.json({success:false,message:"invalid password"})
        }
    } catch (error) {
        console.log(error)
        resp.json({success:false,message:error.message})
    }

}

//Route for admin login
const adminLogin = async (req,resp)=>{
    try {
        
        const {email,password} = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            resp.json({success:true,token})
            
        }else{
            resp.json({success:false,message:"invalid e or p"})
        }
    } catch (error) {
        console.log(error)
        resp.json({success:false,message:error.message})
    }

}

//routes for user register 
const userRegister = async (req,resp)=>{
    try {
        const {name, email , password}= req.body

        //checking user already exist or not 
        const exists = await userModel.findOne({email}) ;
        if (exists) {
            return resp.json({success:false,message:"user already exist"})
        }

        //validating email and password
        if (!validator.isEmail(email)) {
            return resp.json({success:false,message:"please enter a valid password"})
        }
        if (password.length < 8) {
            return resp.json({success:false,message:"please provide a strong password"})
            
        }
        //hashing the password 
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name,
            email,
            password:hashedpassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        resp.json({success:true,token})
    } catch (error) {
        console.log(error)
        resp.json({success:false,message:error.message})
    }
}

export {userLogin, adminLogin ,userRegister}