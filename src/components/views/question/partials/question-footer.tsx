import React from 'react'
import { Button } from '@/components/ui/button'
import { ReplyIcon } from 'lucide-react'

type QuestionFooterProps = {}

export default function QuestionFooter(props: Readonly<QuestionFooterProps>) {
	return (
		<footer className={'mt-4 flex items-center space-x-4'}>
			<Button variant={'outline'}>
				<ReplyIcon className="mr-1.5 h-3.5 w-3.5" />
				Reply
			</Button>
		</footer>
	)
}
