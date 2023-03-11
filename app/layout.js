import '../styles/globals.css'
import styles from './components/Navigation.module.css'
import Navigation from './components/Navigation'
import { font } from './font'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>My first app with Next13</title>
      </head>
      <body className={font.variable}> {/* this is for css variables. For direct font is className={font.className} */}
        <header className={styles.header}>
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  )
}
