import React from 'react'
import { cn } from '@/lib/utils'
import { CornerDownRight } from 'lucide-react'

type QuestionWrapperProps = {
	children: React.ReactNode
	isReply?: boolean
}

function QuestionWrapper(props: Readonly<QuestionWrapperProps>) {
	const { children, isReply } = props

	return (
		<div className="flex w-full flex-1 items-center justify-start gap-3">
			{isReply && <CornerDownRight className={cn('ml-4 text-neutral-400')} />}
			<article className={cn('w-full')}>{children}</article>
		</div>
	)
}

export default QuestionWrapper
