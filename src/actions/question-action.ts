'use server'

import db from '@/lib/config/db'
import { revalidatePath } from 'next/cache'
import QuestionModel from '@/lib/models/question-model'
import { Question } from '@/lib/types/question'

db()

export async function getAllQuestions(): Promise<Omit<Question[], any>> {
	try {
		const questions = await QuestionModel.find()
			.populate({
				path: 'Reply',
				model: 'Reply',
				strictPopulate: false,
			})
			.sort({ createdAt: -1 })
			.exec()
		return { questions }
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
