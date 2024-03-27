import { ClerkProvider } from '@clerk/nextjs'
import "styles/tailwind.css"
import Navbar from 'components/Button/Navbar/Navbar';



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Navbar />
          <div id="Content-body" className='p-16'>
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
