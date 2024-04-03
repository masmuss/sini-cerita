export type Question = {
	_id: string
	text: string
	replies?: {
		_id: string
		text: string
		questionId: string
	}[]
	createdAt: string
	updatedAt: string
}
