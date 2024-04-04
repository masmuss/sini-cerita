import React from 'react'
import QuestionHeader from '@/components/views/question/partials/question-header'
import QuestionContent from '@/components/views/question/partials/question-content'
import QuestionWrapper from '@/components/views/question/partials/question-wrapper'
import { Reply } from '@/lib/types/reply'

type ReplyCardProps = {
	reply: Reply
}

function ReplyCard(props: Readonly<ReplyCardProps>) {
	const { reply } = props

	return (
		<QuestionWrapper isReply={true} {...props}>
			<QuestionHeader
				name={'Yang punya web'}
				date={reply.createdAt.toString()}
				className={'mb-2'}
			/>
			<QuestionContent>{reply.text}</QuestionContent>
		</QuestionWrapper>
	)
}

export default ReplyCard
