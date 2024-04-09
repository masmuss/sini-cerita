'use client'

import React from 'react'

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
			<div className={'flex items-center gap-2'}>
				<p
					className={cn(
						'inline-flex items-center text-xs font-semibold text-neutral-600',
						'md:text-sm'
					)}
				>
					{name}
				</p>
				&mdash;
				<p className={cn('text-xs text-neutral-600', 'md:text-sm')}>
					<time dateTime={date} title={date}>
						{formatDateDifference(date)}
					</time>
				</p>
			</div>
		</header>
	)
}
