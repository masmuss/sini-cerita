import { validateRequest } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { ActionResult } from '@/lib/actions/auth-action'
import { Button } from '@/components/ui/button'
import { lucia } from '@/lib/config/lucia'

export default async function Logout() {
	return (
		<form action={logout}>
			<Button variant={'destructive'}>Sign out</Button>
		</form>
	)
}

async function logout(): Promise<ActionResult> {
	'use server'
	const { session } = await validateRequest()
	if (!session) {
		return {
			error: 'Unauthorized',
		}
	}

	await lucia.invalidateSession(session.id)

	const sessionCookie = lucia.createBlankSessionCookie()
	cookies().set(
		sessionCookie.name,
		sessionCookie.value,
		sessionCookie.attributes
	)
	return redirect('/')
}
