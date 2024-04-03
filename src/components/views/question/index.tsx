'use client'

import React from 'react'
import QuestionWrapper from '@/components/views/question/partials/question-wrapper'
import QuestionContent from '@/components/views/question/partials/question-content'
import QuestionFooter from '@/components/views/question/partials/question-footer'
import QuestionHeader from '@/components/views/question/partials/question-header'
import ReplyForm from '@/components/views/reply/reply-form'

type Question = {
	_id: string
	text: string
	replies?: {
		_id: string
		text: string
		questionId: string
	}[]
	createdAt: string
	updatedAt: string
}

type QuestionsListProps = {
	questions: Question[]
}

export default function QuestionsList({
	questions,
}: Readonly<QuestionsListProps>) {
	const [showReplyForm, setShowReplyForm] = React.useState<boolean>(false)

	return (
		<section className={'bg-white py-8 dark:bg-gray-900 lg:py-16'}>
			<div className={'mx-auto max-w-4xl divide-y px-4'}>
				{questions.map((question) => (
					<div className={'space-y'} key={question._id}>
						<QuestionWrapper>
							<QuestionHeader name={'Anonim'} date={question.createdAt} />
							<QuestionContent>{question.text}</QuestionContent>
							<QuestionFooter
								showReplyForm={() => setShowReplyForm(!showReplyForm)}
							/>
						</QuestionWrapper>
						{showReplyForm && <ReplyForm questionId={question._id} />}
						{question.replies &&
							question.replies.map((reply) => (
								<QuestionWrapper isReply={true} key={reply._id}>
									<QuestionHeader name={'Lord'} date={question.createdAt} />
									<QuestionContent>{reply.text}</QuestionContent>
								</QuestionWrapper>
							))}
					</div>
				))}
			</div>
		</section>
	)
}
