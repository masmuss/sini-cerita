'use client'

import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'sonner'
import { createReply } from '@/lib/actions/reply-action'
import replySchema from '@/lib/schemas/reply-schema'
import FormButton from "@/components/partials/form/form-button";

type FormData = z.infer<typeof replySchema>

type ReplyFormProps = {
	questionId?: string
	className?: string
}

export default function ReplyForm(props: ReplyFormProps) {
	const { questionId, className } = props

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isDirty, isValid },
		reset,
	} = useForm<FormData>({
		resolver: zodResolver(replySchema),
		delayError: 1000,
	})

	async function onSubmit(formData: FormData) {
		await createReply(formData.text, questionId as string)

		toast.success('Jawaban berhasil dikirim!', {
			description: 'Jawaban kamu akan segera ditampilkan di halaman ini',
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
		<Card
			className={cn('mb-4 ml-6 mt-2 border-0 lg:ml-12', className)}
			{...props}
		>
			<form action={''} onSubmit={handleSubmit(onSubmit)} method={'POST'}>
				<Textarea
					className={cn(
						errors?.text?.message ? 'border border-red-400': 'border-0',
						'min-h-fit resize-none rounded-b-none p-4',
						'focus-visible:ring-0 focus-visible:ring-offset-0'
					)}
					rows={5}
					placeholder={'Tulis jawaban dari pertanyaan ini'}
					autoFocus
					{...register('text', { required: true })}
				/>
				<div
					className={
						'flex w-full items-center justify-between rounded-b-md border-0 border-t p-2'
					}
				>
					<div>
						{/*@ts-ignore*/}
						{errors?.text?.message && (
							<span className={'px-2 text-sm text-red-400'}>
								Jawaban tidak boleh kosong
							</span>
						)}
					</div>
					<FormButton isSubmitting={isSubmitting} isDirty={isDirty} isValid={isValid} />
				</div>
			</form>
		</Card>
	)
}
