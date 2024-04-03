import React from 'react'
import QuestionHeader from '@/components/views/question/partials/question-header'
import QuestionContent from '@/components/views/question/partials/question-content'
import QuestionWrapper from '@/components/views/question/partials/question-wrapper'
import { Question } from '@/lib/types/question'
import QuestionFooter from '@/components/views/question/partials/question-footer'

type QuestionCardProps = {
	question: Question
}

export default function QuestionCard(props: Readonly<QuestionCardProps>) {
	const { question } = props

	return (
		<QuestionWrapper>
			<QuestionHeader name={'Anonim'} date={question.createdAt} />
			<QuestionContent>{question.text}</QuestionContent>
			<QuestionFooter questionId={question._id.toString()} />
		</QuestionWrapper>
	)
}
