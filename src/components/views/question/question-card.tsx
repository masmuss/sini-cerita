import QuestionHeader from '@/components/views/question/partials/question-header'
import QuestionContent from '@/components/views/question/partials/question-content'
import QuestionWrapper from '@/components/views/question/partials/question-wrapper'
import { Question } from '@/lib/types/question'
import QuestionFooter from '@/components/views/question/partials/question-footer'

type QuestionCardProps = {
	question: Question
	auth?: boolean
}

export default async function QuestionCard(props: Readonly<QuestionCardProps>) {
	const { question, auth } = props

	return (
		<QuestionWrapper>
			<QuestionHeader
				name={'Anonim'}
				date={question.createdAt}
				className={'mb-2'}
			/>
			<QuestionContent>{question.text}</QuestionContent>
			{auth && <QuestionFooter questionId={question._id.toString()} />}
		</QuestionWrapper>
	)
}
