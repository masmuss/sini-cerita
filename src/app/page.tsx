import React from 'react'
import QuestionsList from '@/components/views/question'
import QuestionForm from '@/components/views/question/question-form'
import { getAllQuestions } from '@/lib/actions/question-action'
import { Question } from '@/lib/types/question'

export default async function MainPage() {
	const questions = await getAllQuestions()

	return (
		<div className={'mx-auto px-4 py-20 md:max-w-3xl md:px-0'}>
			<h1 className={'font-semibold'}>Pertanyaan</h1>
			<QuestionForm />

			{questions && <QuestionsList questions={questions as Question[]} />}
		</div>
	)
}
