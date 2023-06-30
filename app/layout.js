import './globals.css'
import { Inter } from 'next/font/google'
import "primereact/resources/primereact.min.css"; 
import "primereact/resources/themes/lara-light-indigo/theme.css";     
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'SAMS-SC',
  description: 'This is SAMS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

