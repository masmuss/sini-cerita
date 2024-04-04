'use server'

import db from '@/lib/config/db'
import Question from '@/lib/models/question-model'
import ReplyModel from '@/lib/models/reply-model'
import { revalidatePath } from 'next/cache'

db()

export async function createReply(text: string, questionId: string) {
	try {
		const selectedQuestionId = await Question.find(
			{ _id: questionId },
			{ _id: 1 }
		)

		const reply = await ReplyModel.create({ text })
		await reply.save()

		if (selectedQuestionId) {
			await Question.findByIdAndUpdate(questionId, {
				$push: { replies: reply._id },
			})
		}
		revalidatePath('/')
	} catch (error) {
		// @ts-ignore
		return { error: error?.message as string }
	}
}
