'use client'

import { Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { ReplyIcon, SendHorizontal, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import React from 'react'
import QuestionWrapper from '@/components/views/question/partials/question-wrapper'
import QuestionContent from '@/components/views/question/partials/question-content'
import QuestionFooter from '@/components/views/question/partials/question-footer'

export default function MainPage() {
	return (
		<div className={'mx-auto max-w-3xl py-20'}>
			<h1 className={'font-semibold'}>Pertanyaan</h1>
			<Card className={'mt-2 overflow-clip'}>
				<Textarea
					className={cn(
						'min-h-fit resize-none rounded-b-none border-0 border-b p-4',
						'focus-visible:ring-0 focus-visible:ring-offset-0'
					)}
					rows={5}
					placeholder={'Tulis pertanyaan yang ingin disampaikan...'}
				/>
				<div className={'flex w-full justify-end p-2'}>
					<Button size={'sm'}>
						<span>Kirim pertanyaan</span>
						<SendHorizontal className={'ml-2 h-5 w-5 stroke-1'} size={'sm'} />
					</Button>
				</div>
			</Card>

			<section className={'bg-white py-8 dark:bg-gray-900 lg:py-16'}>
				<div className={'mx-auto max-w-4xl divide-y px-4'}>
					<div className={'space-y'}>
						<QuestionWrapper>
							<header className={'mb-2 flex items-center justify-between'}>
								<div className="flex items-center">
									<p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
										<User className={'mr-2'} />
										Michael Gough
									</p>
									<p className="text-sm text-gray-600 dark:text-gray-400">
										<time
											dateTime="2022-02-08"
											title="February 8th, 2022"
										>
											Feb. 8, 2022
										</time>
									</p>
								</div>
							</header>
							<QuestionContent>
								Very straight-to-point article. Really worth time reading. Thank
								you! But tools are just the instruments for the UX designers.
								The knowledge of the design tools are as important as the
								creation of the design strategy.
							</QuestionContent>
							<QuestionFooter />
						</QuestionWrapper>
						<QuestionWrapper isReply={true}>
							<header className="mb-2 flex items-center justify-between">
								<div className="flex items-center">
									<p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
										<img
											className="mr-2 h-6 w-6 rounded-full"
											src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
											alt="Jese Leos"
										/>
										Jese Leos
									</p>
									<p className="text-sm text-gray-600 dark:text-gray-400">
										<time
											dateTime="2022-02-12"
											title="February 12th, 2022"
										>
											Feb. 12, 2022
										</time>
									</p>
								</div>
							</header>
							<QuestionContent>
								Much appreciated! Glad you liked it ☺️
							</QuestionContent>
							<QuestionFooter />
						</QuestionWrapper>
					</div>
				</div>
			</section>
		</div>
	)
}
