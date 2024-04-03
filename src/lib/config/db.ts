import mongoose from 'mongoose'

const db = () => {
	if (mongoose.connections[0].readyState) {
		console.log('already connected')
		return
	}
	mongoose
		.connect(process.env.MONGO_DB_URI as string)
		.then(() => console.log('connected'))
		.catch((e) => console.log('error', e))
}

export default db
