import mongoose, { Schema, model } from 'mongoose'

export interface Icharacter {
  playeruid: string,
  playerName: string,
  characterName: string,
}

export const characterSchema = new Schema<Icharacter>({
  // create the character database schema from json template
  playeruid: { type: String, required: true },
  playerName: { type: String, required: true },
  characterName: { type: String, required: true }
})


const Character = model<Icharacter>('Character', characterSchema)

export default Character