import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema(
	{
		text: {
			type: String,
			required: true,
		},
		replies: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Reply',
			},
		],
		createdAt: {
			type: Date,
			default: Date.now,
		},
		updatedAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	}
)

const Question =
	mongoose.models.Question || mongoose.model('Question', questionSchema)

export default Question
