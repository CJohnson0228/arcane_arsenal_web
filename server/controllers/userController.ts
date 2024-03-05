import { Request, Response } from 'express'
import User from '../models/userModel'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

const createToken = (_id: string) => {
  return jwt.sign({_id}, process.env.SECRET as string, { expiresIn: '3d' })
}

// login user
const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const user = await User.logIn(email, password)
    const userName = user.userName
    const _id = user._id
    const token = createToken(user._id)

    res.status(200).json({userName, email, token, _id})
  } catch (error: any) {
    res.status(400).json({error: error.message})
  }
}

// create user
const createUser = async (req: Request, res: Response) => {
  const { userName, email, password, confirmPassword } = req.body

  try {
    const user = await User.signUp(userName, email, password, confirmPassword)
    
    //create a token
    const token = createToken(user._id)
    const _id = user._id

    res.status(200).json({userName, email, token, _id})
  } catch (error: any) {
    res.status(400).json({error: error.message})
  }
}

export {
  loginUser,
  createUser
}