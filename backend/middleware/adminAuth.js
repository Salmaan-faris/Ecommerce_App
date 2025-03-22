import jwt from 'jsonwebtoken'

import React from 'react'

const adminAuth = async (req,resp,next) => {
   try {
     const {token} = req.headers
     if (!token) {
        return resp.json({success:true,message:"not authorized "})
     }
     const token_decode = jwt.verify(token,process.env.JWT_SECRET)

     if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
        return resp.json({success:true,message:"not authorized "})
     }
     next()
   } catch (error) {
    console.log(error)
        resp.json({success:false,message:error.message})
   }
}

export default adminAuth
