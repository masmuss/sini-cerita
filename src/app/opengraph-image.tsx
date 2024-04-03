import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'About Acme'
export const size = {
	width: 1200,
	height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
	// Font

	return new ImageResponse(
		(
			<div
				style={{
					display: 'flex',
					height: '100%',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					letterSpacing: '-.02em',
					background: 'white',
					padding: '0 42px',
				}}
			>
				<div
					style={{
						left: 42,
						top: 42,
						position: 'absolute',
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<span
						style={{
							width: 24,
							height: 24,
							background: 'black',
						}}
					/>
					<span
						style={{
							marginLeft: 8,
							fontSize: 20,
							fontWeight: 500,
						}}
					>
						tanya.khoirul.me
					</span>
				</div>
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
						padding: '20px 50px',
						margin: '0 42px',
						fontSize: 40,
						width: 'auto',
						maxWidth: 550,
						textAlign: 'center',
						backgroundColor: 'black',
						color: 'white',
						lineHeight: 1.4,
						fontWeight: 700,
					}}
				>
					Tanya
					<span>In</span>
				</div>
			</div>
		),
		// ImageResponse options
		{
			// For convenience, we can re-use the exported opengraph-image
			// size config to also set the ImageResponse's width and height.
			...size,
		}
	)
}
