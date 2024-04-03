import React from 'react'
import QuestionsList from '@/components/views/question'
import QuestionForm from '@/components/views/question/question-form'
import { getAllQuestions } from '@/actions/question-action'

export default async function MainPage() {
	// @ts-ignore
	const { questions } = await getAllQuestions()

	return (
		<div className={'mx-auto max-w-3xl py-20'}>
			<h1 className={'font-semibold'}>Pertanyaan</h1>
			<QuestionForm />

			{questions && <QuestionsList questions={questions} />}
		</div>
	)
}
