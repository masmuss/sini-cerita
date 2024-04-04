import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
	_id: { type: String, required: true },
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
} as const, {
	_id: false,
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
