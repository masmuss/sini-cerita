'use server'

import db from '@/lib/config/db'
import { cookies } from 'next/headers'
import { lucia } from '@/lib/config/lucia'
import { redirect } from 'next/navigation'
import User from '@/lib/models/user-model'
import {Argon2id} from "oslo/password";
import {generateId} from "lucia";

export interface ActionResult {
	error: string
}

db()

export async function signup(formData: FormData): Promise<ActionResult> {
	const username = formData.get('username') as string
	if (
		username.length < 3 ||
		username.length > 31 ||
		!/^[a-z0-9_-]+$/.test(username)
	) {
		return {
			error: 'Invalid username',
		}
	}
	const password = formData.get('password') as string
	if (password.length < 6 || password.length > 255) {
		return {
			error: 'Invalid password',
		}
	}

	const hashedPassword = await new Argon2id().hash(password);
	const userId = generateId(15);

	// TODO: check if username is already used
	const user = await User.create({
		_id: userId,
		username: username,
		password: hashedPassword,
	})

	const session = await lucia.createSession(user._id, {})
	const sessionCookie = lucia.createSessionCookie(session.id)
	cookies().set(
		sessionCookie.name,
		sessionCookie.value,
		sessionCookie.attributes
	)
	return redirect('/')
}

export async function login(formData: FormData): Promise<ActionResult> {
	const username = formData.get('username')
	if (
		typeof username !== 'string' ||
		username.length < 3 ||
		username.length > 31 ||
		!/^[a-z0-9_-]+$/.test(username)
	) {
		return {
			error: 'Invalid username',
		}
	}
	const password = formData.get('password')
	if (
		typeof password !== 'string' ||
		password.length < 6 ||
		password.length > 255
	) {
		return {
			error: 'Invalid password',
		}
	}

	const existingUser = await User.findOne({ username: username.toLowerCase() })
	if (!existingUser) {
		return {
			error: 'Incorrect username or password',
		}
	}

	const validPassword = await new Argon2id().verify(existingUser.password, password);

	if (!validPassword) {
		return {
			error: 'Incorrect username or password',
		}
	}

	const session = await lucia.createSession(existingUser.id, {})
	const sessionCookie = lucia.createSessionCookie(session.id)
	cookies().set(
		sessionCookie.name,
		sessionCookie.value,
		sessionCookie.attributes
	)
	return redirect('/')
}
