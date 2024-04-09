import QuestionsList from '@/components/views/question'
import QuestionForm from '@/components/views/question/question-form'
import { getAllQuestions } from '@/lib/actions/question-action'
import { Question } from '@/lib/types/question'
import { validateRequest } from '@/lib/auth'
import Logout from '@/components/partials/logout'
import { cn } from '@/lib/utils'

export default async function MainPage() {
	const questions = await getAllQuestions()
	const { user } = await validateRequest()

	return (
		<div className={'mx-auto px-4 py-20 md:max-w-3xl md:px-0'}>
			<div className={'flex w-full items-center justify-end'}>
				{user && <Logout />}
			</div>
			<div className={'text-center'}>
				<h1
					className={cn(
						'mb-4 text-center text-xl font-semibold tracking-wide',
						'md:text-3xl md:font-bold',
						'lg:text-4xl'
					)}
				>
					Ask Me Anything
				</h1>
				<h3
					className={cn(
						'mb-4 text-neutral-500',
						'md:text-lg md:font-normal',
						'lg:text-xl'
					)}
				>
					Have a burning question or an untold thought? Share it all anonymously
					here
				</h3>
			</div>
			{!user && <QuestionForm />}

			{questions && <QuestionsList questions={questions as Question[]} />}
		</div>
	)
}
