import React from 'react'
import QuestionWrapper from '@/components/views/question/partials/question-wrapper'
import QuestionContent from '@/components/views/question/partials/question-content'
import QuestionHeader from '@/components/views/question/partials/question-header'
import { Question } from '@/lib/types/question'

type QuestionsListProps = {
	questions: Question[]
}

export default function QuestionsList({
	questions,
}: Readonly<QuestionsListProps>) {
	return (
		<section className={'bg-white py-8 lg:py-16'}>
			<div className={'mx-auto w-full divide-y md:max-w-4xl md:px-4'}>
				{questions.length === 0 && (
					<p className={'text-center py-10 text-gray-500'}>
						Belum ada pertanyaan, jadilah yang pertama bertanya!
					</p>
				)}
				{questions.map((question) => (
					<div className={'space-y'} key={question._id}>
						<QuestionWrapper>
							<QuestionHeader name={'Anonim'} date={question.createdAt} />
							<QuestionContent>{question.text}</QuestionContent>
						</QuestionWrapper>
					</div>
				))}
			</div>
		</section>
	)
}
