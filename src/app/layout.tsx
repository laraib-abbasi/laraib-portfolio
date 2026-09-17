import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Laraib Abbasi — Product Engineer', description: 'Selected work and experiments by Laraib Abbasi.' }
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html> }
