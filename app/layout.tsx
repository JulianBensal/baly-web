import './global.css'

export const metadata = {
  title: 'Baly Arg',
  description: 'La mejor marca de energizantes de Brasil ahora en Argentina.',
  icon: 'favicon_baly.ico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
