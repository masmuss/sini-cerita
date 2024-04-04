'use client'

import React from 'react'
import { User } from 'lucide-react'

import { cn, formatDateDifference } from '@/lib/utils'

type QuestionHeaderProps = {
	name: string
	date: string
	className?: string
}
export default function QuestionHeader(props: Readonly<QuestionHeaderProps>) {
	const { name, date, className } = props
	return (
		<header className={cn('flex items-center justify-between', className)}>
			<div className={'flex items-center'}>
				<p
					className={cn(
						'mr-3 inline-flex items-center text-xs font-semibold text-gray-900',
						'md:text-sm',
						'dark:text-white'
					)}
				>
					{name}
				</p>
				<p
					className={cn(
						'text-xs text-gray-600 dark:text-gray-400',
						'md:text-sm'
					)}
				>
					<time dateTime={date} title={date}>
						{formatDateDifference(date)}
					</time>
				</p>
			</div>
		</header>
	)
}
