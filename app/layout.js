import '../styles/globals.css'
import styles from './components/Navigation.module.css'
import Navigation from './components/Navigation'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>My first app with Next13</title>
      </head>
      <body>
        <header className={styles.header}>
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  )
}
