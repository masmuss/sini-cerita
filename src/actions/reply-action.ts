import db from '@/lib/config/db'
import QuestionModel from '@/lib/models/question-model'
import ReplyModel from '@/lib/models/reply-model'
import { revalidatePath } from 'next/cache'

db()

export async function createReply(text: string, questionId: string) {
	try {
		const reply = await ReplyModel.create({ text })
		await reply.save()

		const question = await QuestionModel.findById(questionId)
		question.replies.push(reply._id)
		await question.save()
		revalidatePath('/')
	} catch (error) {
		// @ts-ignore
		return { error: error?.message as string }
	}
}
