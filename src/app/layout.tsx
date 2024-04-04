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
			? 'https://ask.khoirul.me'
			: 'http://localhost:3000'
	),
	title: 'Tanya.in',
	description: 'Tanya apapun atau beri kritik dan saran buat aku di sini.',
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
