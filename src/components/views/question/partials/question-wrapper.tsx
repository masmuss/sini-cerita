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
				'p-6 text-base',
				'dark:bg-gray-900'
			)}
		>
			{children}
		</article>
	)
}

export default QuestionWrapper
