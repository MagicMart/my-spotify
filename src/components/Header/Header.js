import Container from '@components/Container'
import SpotifyLogo from '@components/SpotifyLogo'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <SpotifyLogo /> My Spotify
        </p>
      </Container>
    </header>
  )
}

export default Header
