import { cn } from '@/lib/utils'
import React from 'react'

type QuestionContentProps = {
	children: React.ReactNode
	className?: string
}

export default function QuestionContent(props: Readonly<QuestionContentProps>) {
	const { children, className } = props

	return (
		<p
			className={cn(
				'text-sm text-gray-500 dark:text-gray-400',
				'md:text-base',
				className
			)}
		>
			{children}
		</p>
	)
}
