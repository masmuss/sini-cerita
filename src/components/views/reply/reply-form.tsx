'use client'

import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { SendHorizontal } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'sonner'
import { createReply } from '@/actions/reply-action'
import replySchema from '@/lib/schemas/reply-schema'

type FormData = z.infer<typeof replySchema>

type ReplyFormProps = {
	questionId: string
}

export default function ReplyForm(props: Readonly<ReplyFormProps>) {
	const { questionId } = props

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isDirty, isValid },
		reset,
	} = useForm<FormData>({
		resolver: zodResolver(replySchema),
		delayError: 1000,
	})

	async function onSubmit(formData: FormData & FieldValues) {
		await createReply(formData.text, questionId)

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
		<Card className={'mb-4 ml-6 mt-2 border-0 lg:ml-12'}>
			<form action={''} onSubmit={handleSubmit(onSubmit)} method={'POST'}>
				<input type="hidden" value={questionId} />
				<Textarea
					className={cn(
						errors?.text?.message ? 'border-red-400' : 'border-gray-200',
						'min-h-fit resize-none rounded-b-none border p-4',
						'focus-visible:ring-0 focus-visible:ring-offset-0'
					)}
					rows={5}
					placeholder={'Tulis jawaban dari pertanyaan ini'}
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
							<span className={'px-2 text-sm text-red-400'}>
								Jawaban tidak boleh kosong
							</span>
						)}
					</div>
					<Button
						size={'sm'}
						disabled={isSubmitting || !isDirty || !isValid}
						type={'submit'}
					>
						<span>Kirim jawaban</span>
						<SendHorizontal className={'ml-2 h-5 w-5 stroke-1'} size={'sm'} />
					</Button>
				</div>
			</form>
		</Card>
	)
}
