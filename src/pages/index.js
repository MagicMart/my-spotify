import Head from 'next/head';

import Layout from '@components/Layout';
import Container from '@components/Container';

import styles from '@styles/Home.module.scss'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Spotify Re-Wrapped</title>
        <meta name="description" content="Top artists and tracks for the last whatever period of time..." />
      </Head>

      <Container>
        <h1 className="sr-only">Spotify Re-Wrapped</h1>

        <h2 className={styles.heading}>Top Artists</h2>

        <ul className={styles.items}>
          <li>
            <a href="https://www.blink182.com/">
              <img width="280" src="/images/blink-182.jpg" alt="Artist Photo" />
              <p className={styles.itemTitle}>
                blink-182
              </p>
            </a>
          </li>
          <li>
            <a href="https://www.blink182.com/">
              <img width="280" src="/images/blink-182.jpg" alt="Artist Photo" />
              <p className={styles.itemTitle}>
                blink-182
              </p>
            </a>
          </li>
          <li>
            <a href="https://www.blink182.com/">
              <img width="280" src="/images/blink-182.jpg" alt="Artist Photo" />
              <p className={styles.itemTitle}>
                blink-182
              </p>
            </a>
          </li>
          <li>
            <a href="https://www.blink182.com/">
              <img width="280" src="/images/blink-182.jpg" alt="Artist Photo" />
              <p className={styles.itemTitle}>
                blink-182
              </p>
            </a>
          </li>
        </ul>

        <h2 className={styles.heading}>Top Tracks</h2>

        <ul className={styles.items}>
          <li>
            <a href="https://www.blink182.com/">
              <img width="280" src="/images/dude-ranch.jpg" alt="Dude Ranch Album Cover" />
              <p className={styles.itemTitle}>
                Enthused
              </p>
            </a>
          </li>
          <li>
            <a href="https://www.blink182.com/">
              <img width="280" src="/images/dude-ranch.jpg" alt="Dude Ranch Album Cover" />
              <p className={styles.itemTitle}>
                Enthused
              </p>
            </a>
          </li>
          <li>
            <a href="https://www.blink182.com/">
              <img width="280" src="/images/dude-ranch.jpg" alt="Dude Ranch Album Cover" />
              <p className={styles.itemTitle}>
                Enthused
              </p>
            </a>
          </li>
          <li>
            <a href="https://www.blink182.com/">
              <img width="280" src="/images/dude-ranch.jpg" alt="Dude Ranch Album Cover" />
              <p className={styles.itemTitle}>
                Enthused
              </p>
            </a>
          </li>
        </ul>
      </Container>
    </Layout>
  )
}