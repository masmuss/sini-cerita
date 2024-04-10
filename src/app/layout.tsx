import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'
import React from 'react'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/sonner'

const sourceSans = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NODE_ENV === 'production'
			? 'https://ama.khoirul.site'
			: 'http://localhost:3000'
	),
	title: 'AMA | Khoirul',
	description: 'Ask or share anything with me',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="id">
			<body className={cn(sourceSans.className, 'antialiased')}>
				{children}
			</body>
			<Toaster />
		</html>
	)
}
