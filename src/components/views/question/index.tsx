import React from 'react'
import { Question } from '@/lib/types/question'
import QuestionCard from '@/components/views/question/question-card'
import ReplyCard from '@/components/views/reply/reply-card'
import { Reply } from '@/lib/types/reply'
import { cn } from '@/lib/utils'
import { validateRequest } from '@/lib/auth'

type QuestionsListProps = {
	questions: Question[]
}

export default async function QuestionsList({
	questions,
}: Readonly<QuestionsListProps>) {
	const { user } = await validateRequest()

	return (
		<section className={'border-t bg-white py-4 lg:py-8'}>
			<h2
				className={cn(
					'mb-4 text-center text-xl font-semibold tracking-wide',
					'md:text-3xl md:font-bold',
					'lg:text-4xl'
				)}
			>
				Timeline
			</h2>
			<div className={cn('mx-auto w-full space-y-2', 'md:max-w-4xl')}>
				{questions.length === 0 && (
					<p className={'text-center text-gray-500'}>
						No questions found. Be the first to ask!
					</p>
				)}
				{questions.map((question: Question) => (
					<article
						className={cn('space-y-4 pr-4', 'md:p-4 md:pr-10')}
						key={question._id}
					>
						<QuestionCard question={question} auth={!!user} />
						{question.replies &&
							question.replies.map((reply: Reply) => (
								<ReplyCard reply={reply} key={reply._id} />
							))}
					</article>
				))}
			</div>
		</section>
	)
}
