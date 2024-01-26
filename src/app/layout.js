import { Inter } from 'next/font/google'
import './globals.css'


export const metadata = {
  title: 'Yash Amethiya Portfolio',
  description: 'Created by Yash Amethiya',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </head>
      <body>{children}</body>
    </html>
  )
}
