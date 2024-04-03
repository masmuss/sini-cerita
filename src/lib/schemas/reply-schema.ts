import * as zod from 'zod'

const replySchema = zod.object({
	_id: zod.string().optional(),
	text: zod.string().min(3),
	questionId: zod.string().optional(),
})

export default replySchema
