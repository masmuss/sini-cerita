import React from 'react'
import { Question } from '@/lib/types/question'
import QuestionCard from '@/components/views/question/question-card'
import ReplyCard from '@/components/views/reply/reply-card'
import { Reply } from '@/lib/types/reply'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {validateRequest} from "@/lib/auth";

type QuestionsListProps = {
	questions: Question[]
}

export default async function QuestionsList({
	questions,
}: Readonly<QuestionsListProps>) {
	const { user } = await validateRequest()

	return (
		<section className={'bg-white py-8 lg:py-16'}>
			<div className={cn('mx-auto w-full space-y-4', 'md:max-w-4xl')}>
				{questions.length === 0 && (
					<p className={'text-center text-gray-500'}>
						Belum ada pertanyaan, jadilah yang pertama bertanya!
					</p>
				)}
				{questions.map((question: Question) => (
					<Card
						className={cn('space-y divide-y pr-4', 'md:p-4 md:pr-10')}
						key={question._id}
					>
						<QuestionCard question={question} auth={!!user}/>
						{question.replies &&
							question.replies.map((reply: Reply) => (
								<ReplyCard reply={reply} key={reply._id} />
							))}
					</Card>
				))}
			</div>
		</section>
	)
}
