export const metadata = {
  title: 'LV-EXAM',
  description: 'Generated by Braulia Lueji',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
