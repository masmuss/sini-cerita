import React from 'react'
import { User } from 'lucide-react'
import { formatDateDifference } from '@/lib/utils'

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
					className={
						'mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white'
					}
				>
					<User className={'mr-2'} />
					{name}
				</p>
				<p className={'text-sm text-gray-600 dark:text-gray-400'}>
					<time dateTime={date} title={date}>
						{formatDateDifference(date)}
					</time>
				</p>
			</div>
		</header>
	)
}
