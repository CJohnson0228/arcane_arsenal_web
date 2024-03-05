import mongoose, { Schema, model, Model } from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'

export interface Iuser {
  userName: string,
  email: string,
  password: string,
  avatarURL?: string,
}

export interface IuserMethods extends Model<Iuser>{
  signUp: (
    userName: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<any>
  logIn: (
    email: string,
    password: string
  ) => Promise<any>
  updateProfile: (
    userName: string,
    email: string,
    password: string,
    confirmPassword: string,
    avatarURL: string
  ) => Promise<any>
}

export const userSchema = new Schema<Iuser>({
  userName: { type: String, required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatarURL: { type: String, required: false }
})

userSchema.statics.signUp = async function (userName:string, email: string, password: string, confirmPassword: string) {
  // validation
  if (!email || !password) {
    throw Error('All Fields must be filled')
  }
  if (password !== confirmPassword) {
    throw Error('passwords do not match')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email is not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  const user = await this.create({ userName, email, password: hash })

  return user
}

userSchema.statics.logIn = async function (email: string, password: string) {
  if (!email || !password) {
    throw Error('All Fields must be filled')
  }

  const user = await this.findOne({ email })

  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}


const User = model<Iuser, IuserMethods>('Users', userSchema)

export default User