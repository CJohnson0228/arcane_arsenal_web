import express, { Request, Response } from 'express'
import {
  createCharacter,
  getAllCharacters,
  getSingleCharacter,
  deleteCharacter,
  updateCharacter
} from '../controllers/characterController'


const router = express.Router()

// === Get all Characters
router.get('/', getAllCharacters)

// === Get specific Character
router.get('/:id', getSingleCharacter)

// === POST a new character
router.post('/', createCharacter)

// === DELETE a character
router.delete('/:id', deleteCharacter)

// === UPDATE a character
router.patch('/:id', updateCharacter)


export default router