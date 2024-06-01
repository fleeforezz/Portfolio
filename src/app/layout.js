import './globals.css'
import localFont from 'next/font/local'

const chillax = localFont({
  src: [
    {
      path: './fonts/Chillax-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Chillax-Medium.woff',
      weight: '500',
      style: 'medium',
    },
    {
      path: './fonts/Chillax-Semibold.woff',
      weight: '600',
      style: 'semibold',
    },
    {
      path: './fonts/Chillax-Bold.woff',
      weight: '700',
      style: 'bold',
    },
  ]
})

export const metadata = {
  title: 'Nhat | Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="any" href="/avatar.jpg" />
      </head>
      <body className={chillax.className}>
        {children}
      </body>
    </html>
  )
}
