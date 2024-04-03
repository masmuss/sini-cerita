'use client'

import React from 'react'
import { User } from 'lucide-react'

import { cn, formatDateDifference } from '@/lib/utils'

type QuestionHeaderProps = {
	name: string
	date: string
}
export default function QuestionHeader(props: Readonly<QuestionHeaderProps>) {
	const { name, date } = props
	return (
		<header className={'mb-2 flex items-center justify-between'}>
			<div className={'flex items-center'}>
				<p
					className={cn(
						'mr-3 inline-flex items-center text-xs font-semibold text-gray-900',
						'md:text-sm',
						'dark:text-white'
					)}
				>
					<User className={'mr-2 h-5 w-5 md:h-7 md:w-7'} />
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
