import express from 'express'
import {
  loginUser,
  createUser,
} from '../controllers/userController'

const router = express.Router()

// login user route
router.post('/login', loginUser)

// create user route
router.post('/register', createUser)

export default router