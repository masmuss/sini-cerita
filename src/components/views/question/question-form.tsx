'use client'

import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import { FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import questionSchema from '@/lib/schemas/question-schema'
import { createQuestion } from '@/lib/actions/question-action'
import * as z from 'zod'
import { toast } from 'sonner'
import FormButton from '@/components/partials/form/form-button'
import { Label } from '@/components/ui/label'

type FormData = z.infer<typeof questionSchema>

export default function QuestionForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isDirty, isValid },
		reset,
	} = useForm<FormData>({
		resolver: zodResolver(questionSchema),
		delayError: 1000,
	})

	async function onSubmit(formData: FormData & FieldValues) {
		await createQuestion(formData.text)

		toast.success('Your question has been submitted!', {
			description: 'I will answer it as soon as possible.',
			action: {
				label: 'Tutup',
				onClick: () => {
					toast.dismiss()
				},
			},
		})
		reset()
	}

	return (
		<div className={cn('mb-4 mt-2', 'lg:my-8')}>
			<form action={''} onSubmit={handleSubmit(onSubmit)} method={'POST'}>
				<Label htmlFor={'text'} aria-required>
					Ask me anything
				</Label>
				<Textarea
					className={cn(
						errors?.text?.message ? 'border-red-400' : 'border-gray-200',
						'min-h-fit resize-none p-4 text-sm',
						'md:text-base'
					)}
					rows={5}
					placeholder={'What do you want to ask?'}
					autoFocus
					{...register('text', { required: true })}
				/>
				<div className={'flex w-full items-center justify-between py-3'}>
					<div>
						{errors?.text?.message && (
							<span className={'px-2 text-xs text-red-400 md:text-sm'}>
								{errors.text.message}
							</span>
						)}
					</div>
					<FormButton
						isSubmitting={isSubmitting}
						isDirty={isDirty}
						isValid={isValid}
						label={'Submit'}
					/>
				</div>
			</form>
		</div>
	)
}
