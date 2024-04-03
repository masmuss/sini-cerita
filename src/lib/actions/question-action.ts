'use server'

import db from '@/lib/config/db'
import { revalidatePath } from 'next/cache'
import QuestionModel from '@/lib/models/question-model'
import Reply from '@/lib/models/reply-model'

db()

export async function getAllQuestions() {
	try {
		const questionCollections = QuestionModel.find()
			.populate({
				path: 'replies',
				model: Reply,
			})
			.sort({ createdAt: -1 })

		return await questionCollections
	} catch (error) {
		// @ts-ignore
		return { error: error?.message as string }
	}
}

export async function createQuestion(text: string) {
	try {
		const question = await QuestionModel.create({ text })
		await question.save()
		revalidatePath('/')
	} catch (error) {
		// @ts-ignore
		return { error: error?.message as string }
	}
}
