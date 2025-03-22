import {v2 as cloudinary} from 'cloudinary'
import productModel from '../model/productModels.js'

// function for add product 
const addProduct = async (req,resp)=>{
    try {
        
        const {name, description ,category ,subCategory, sizes, price , bestseller} = req.body

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1,image2,image3 ,image4].filter((item)=>item !== undefined)

        const imageUrl = await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'})
                return result.secure_url
            })

        )

        const productData = {
            name,
            description,
            category,
            price:Number(price),
            subCategory,
            bestseller:bestseller === "true" ? true:false,
            size:JSON.parse(sizes),
            images:imageUrl,
            date:Date.now()

        }


       const product = new productModel(productData)
       await product.save()

       
       resp.json({success :true,message:'product added'})
       console.log(productData)
        
    } catch (error) {
        console.log(error)
        resp.json({success:false,message:error.message})
    }
}

//function for list product
const listProduct = async (req,resp)=>{
    try {
        const products =await productModel.find({})
        resp.json({success:true,products})
        
    } catch (error) {
        console.log(error)
        resp.json({success:false,message:error.message})
    }

}

//fuction for remove products
const removeProduct = async (req,resp)=>{
    try {
        await productModel.findByIdAndDelete(req.body.id)
        resp.json({success:true,message:"product removed"})
    } catch (error) {
        console.log(error)
        resp.json({success:false,message:error.message})
    }

}

//function for single products 
const singleProduct = async (req,resp)=>{
    try {
        const {productId} = req.body
        const product = await productModel.findById(productId)
        resp.json({success:true,product})
    } catch (error) {
        console.log(error)
        resp.json({success:false,message:error.message})
    }

} 

export {addProduct , listProduct , removeProduct , singleProduct }