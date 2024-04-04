import React from 'react'
import { cn } from '@/lib/utils'

type QuestionWrapperProps = {
	children: React.ReactNode
	isReply?: boolean
}

function QuestionWrapper(props: Readonly<QuestionWrapperProps>) {
	const { children, isReply } = props

	return (
		<article className={cn(isReply && 'ml-4 lg:ml-12', 'py-4 pl-4', 'md:p-6')}>
			{children}
		</article>
	)
}

export default QuestionWrapper
