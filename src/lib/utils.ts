import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function formatDateDifference(inputDate: string): string {
	const date = new Date(inputDate)
	const currentDate = new Date()
	const timeDifference = currentDate.getTime() - date.getTime()

	// Function to convert milliseconds to human-readable time
	const msToTime = (duration: number): string => {
		const seconds = Math.floor((duration / 1000) % 60)
		const minutes = Math.floor((duration / (1000 * 60)) % 60)
		const hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
		const days = Math.floor(duration / (1000 * 60 * 60 * 24))
		const weeks = Math.floor(duration / (1000 * 60 * 60 * 24 * 7))
		const years = Math.floor(duration / (1000 * 60 * 60 * 24 * 365))

		if (years > 0) return `${years} tahun lalu`
		if (weeks > 0) return `${weeks} minggu lalu`
		if (days > 0) return `${days} hari lalu`
		if (hours > 0) return `${hours} jam yang lalu`
		if (minutes > 0) return `${minutes} menit yang lalu`
		if (seconds > 0) return `${seconds} detik yang lalu`

		return 'Baru aja'
	}

	return msToTime(timeDifference)
}
