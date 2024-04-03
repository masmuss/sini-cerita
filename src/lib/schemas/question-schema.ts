import * as zod from 'zod'

const questionSchema = zod.object({
	_id: zod.string().optional(),
	text: zod.string().min(3),
})

export default questionSchema
