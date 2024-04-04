import React from 'react'
import { Card } from '@/components/ui/card'

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div
			className={
				'mx-auto flex h-screen w-full items-center justify-center md:max-w-md'
			}
		>
			<Card className={'mx-3 w-full p-4'}>{children}</Card>
		</div>
	)
}
