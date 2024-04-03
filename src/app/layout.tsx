import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'
import React from 'react'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/sonner'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Tanya.in',
	description: 'Tanya apapun atau beri kritik dan saran  buat aku di sini.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="id">
			<body className={cn(robotoMono.className, 'antialiased')}>
				{children}
			</body>
			<Toaster />
		</html>
	)
}
