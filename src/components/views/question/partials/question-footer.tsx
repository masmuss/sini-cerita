'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ReplyIcon } from 'lucide-react'
import ReplyForm from '@/components/views/reply/reply-form'
import {cn} from "@/lib/utils";

type QuestionFooterProps = {
	questionId: string
}

export default function QuestionFooter(props: Readonly<QuestionFooterProps>) {
	const { questionId } = props
	const [selectedQuestionId, setSelectedQuestionId] = React.useState<
		string | null
	>(null)

	const toggleReplyForm = (questionId: string) => {
		if (selectedQuestionId === questionId) setSelectedQuestionId(null)
		else setSelectedQuestionId(questionId)
	}

	return (
		<div>
			<footer className={'mt-4 flex items-center space-x-4'}>
				<Button
					className={cn('text-xs', 'md:text-sm')}
					size={'sm'}
					variant={'outline'}
					onClick={() => {
						toggleReplyForm(questionId)
					}}
				>
					<ReplyIcon className="mr-1.5 h-3.5 w-3.5" />
					Reply
				</Button>
			</footer>
			{selectedQuestionId && (
				<ReplyForm className={'mt-6'} questionId={questionId} />
			)}
		</div>
	)
}
