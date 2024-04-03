import React from 'react'
import { cn } from '@/lib/utils'

type QuestionWrapperProps = {
	children: React.ReactNode
	isReply?: boolean
}

function QuestionWrapper(props: Readonly<QuestionWrapperProps>) {
	const { children, isReply } = props

	return (
		<article
			className={cn(
				isReply && 'ml-6 lg:ml-12',
				'px-4 py-4 text-sm',
				'md:p-6 md:text-base'
			)}
		>
			{children}
		</article>
	)
}

export default QuestionWrapper
