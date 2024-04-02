import React from 'react'

type QuestionContentProps = {
	children: React.ReactNode
}

export default function QuestionContent(props: Readonly<QuestionContentProps>) {
	const { children } = props

	return <p className={'text-gray-500 dark:text-gray-400'}>{children}</p>
}
