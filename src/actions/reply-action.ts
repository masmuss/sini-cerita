'use server'

import db from '@/lib/config/db'
import { revalidatePath } from 'next/cache'
import QuestionModel from '@/lib/models/question-model'
import ReplyModel from '@/lib/models/reply-model'

db()

export async function createReply(text: string, questionId: string) {
	try {
		const question = await QuestionModel.findById(questionId)
		const reply = await ReplyModel.create({ text })
		question.replies.push({ text })
		reply.save()
		await question.save()
		revalidatePath('/')
	} catch (error) {
		// @ts-ignore
		return { error: error?.message as string }
	}
}
