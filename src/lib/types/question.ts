import { Reply } from '@/lib/types/reply'

export type Question = {
	_id: string
	text: string
	replies?: Reply[]
	createdAt: string
	updatedAt: string
}
