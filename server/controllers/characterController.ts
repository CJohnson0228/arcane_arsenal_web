import { Request, Response } from 'express'
import Character from '../models/characterModel'
import mongoose from 'mongoose'

// === Get all characters
const getAllCharacters = async (req: Request, res: Response) => {
  const characters = await Character.find({}).sort({ createdAt: -1 })
  
  res.status(200).json(characters)
}


// === Get a specific character
const getSingleCharacter = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'character does not exist: notValid ID'})
  }

  const character = await Character.findById(id)

  if (!character) {
    return res.status(404).json({error: 'character does not exist: No Matching ID in DB'})
  }
  
  res.status(200).json(character)
}

// === Create a character
const createCharacter = async (req: Request, res: Response) => {
  const { playeruid, playerName, characterName } = req.body
  
    try {
      const character = await Character.create({
        playeruid, playerName, characterName
      })
      res.status(200).json(character)
    } catch (error: any) {
      res.status(400).json({error: error.message})
    }  
}

// === Delete a character
const deleteCharacter = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'character does not exist: notValid ID'})
  }

  const character = await Character.findOneAndDelete({ _id: id })

  if (!character) {
    return res.status(404).json({error: 'character does not exist: No Matching ID in DB'})
  }

  res.status(200).json(character)
}


// === Update a character
const updateCharacter = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'character does not exist: notValid ID'})
  }

  const character = await Character.findOneAndUpdate({ _id: id }, {
    ...req.body
  })

  if (!character) {
    return res.status(404).json({error: 'character does not exist: No Matching ID in DB'})
  }

  res.status(200).json(character)
}

export {
  createCharacter,
  getAllCharacters,
  getSingleCharacter,
  deleteCharacter,
  updateCharacter,
}