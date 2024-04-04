import { Lucia } from 'lucia'
import { MongodbAdapter } from '@lucia-auth/adapter-mongodb'
import mongoose from 'mongoose'

await mongoose.connect(process.env.MONGO_DB_URI as string)

export const adapter = new MongodbAdapter(
	mongoose.connection.collection('sessions'),
	mongoose.connection.collection('users')
)

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		expires: false,
		attributes: {
			secure: process.env.NODE_ENV === 'production',
		},
	},
	getUserAttributes: (attributes) => {
		return {
			username: attributes.username,
		}
	},
})

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia
		DatabaseUserAttributes: DatabaseUserAttributes
	}
}

interface DatabaseUserAttributes {
	username: string
}
