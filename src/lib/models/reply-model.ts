import mongoose from 'mongoose'

const replySchema = new mongoose.Schema(
	{
		text: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
		updatedAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ timestamps: true }
)

const Reply = mongoose.models.Reply || mongoose.model('Reply', replySchema)

export default Reply
