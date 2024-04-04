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

		toast.success('Pertanyaan berhasil dikirim!', {
			description: 'Bakalan dijawab kok, kalo ga lupa',
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
		<Card className={'mt-2 border-0'}>
			<form action={''} onSubmit={handleSubmit(onSubmit)} method={'POST'}>
				<Textarea
					className={cn(
						errors?.text?.message ? 'border-red-400' : 'border-gray-200',
						'min-h-fit resize-none rounded-b-none border p-4 text-sm',
						'md:text-base',
						'focus-visible:ring-0 focus-visible:ring-offset-0'
					)}
					rows={5}
					placeholder={'Tulis pertanyaan yang ingin disampaikan...'}
					autoFocus
					// @ts-ignore
					{...register('text', { required: true })}
				/>
				<div
					className={
						'flex w-full items-center justify-between rounded-b-md border border-t-0 p-2'
					}
				>
					<div>
						{/*@ts-ignore*/}
						{errors?.text?.message && (
							<span className={'px-2 text-xs text-red-400 md:text-sm'}>
								Eits, pertanyaan gaboleh kosong!
							</span>
						)}
					</div>
					<FormButton
						isSubmitting={isSubmitting}
						isDirty={isDirty}
						isValid={isValid}
						label={'Kirim pertanyaan'}
					/>
				</div>
			</form>
		</Card>
	)
}
