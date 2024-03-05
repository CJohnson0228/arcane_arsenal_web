import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string)
    console.log("MongoDB is Connected:" + process.env.MONGO_URI as string)
  } catch (err) {
    let errorMessage = 'MongoDB Failed to Connect'
    if (err instanceof Error) {
      errorMessage = err.message
    }
    console.error(errorMessage)
    process.exit(1)
  }
}
