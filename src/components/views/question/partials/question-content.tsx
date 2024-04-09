import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import React from 'react'

type QuestionContentProps = {
	children: React.ReactNode
	className?: string
	isReply?: boolean
}

export default function QuestionContent(props: Readonly<QuestionContentProps>) {
	const { children, className, isReply } = props

	return (
		<Card
			className={cn(
				'p-2 text-sm text-neutral-500',
				isReply ? 'bg-neutral-100 text-neutral-600' : 'bg-white ',
				'md:p-3 md:text-base',
				className
			)}
		>
			{children}
		</Card>
	)
}
