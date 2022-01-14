import { getSecrets } from '@netlify/functions'
import Head from 'next/head'

import Layout from '@components/Layout'
import Container from '@components/Container'

import styles from '@styles/Home.module.scss'
import Image from 'next/image'

export default function Home({ categories }) {
  console.log(categories)
  return (
    <Layout>
      <Head>
        <title>Spotify Re-Wrapped</title>
        <meta
          name="description"
          content="Top artists and tracks for the last whatever period of time..."
        />
      </Head>

      <Container>
        <h1 className="sr-only">Spotify Re-Wrapped</h1>

        <h2 className={styles.heading}>Categories</h2>

        <ul className={styles.items}>
          {categories.items.map((item) => {
            return (
              <li key={item.id}>
                <a href="">
                  <div
                    style={{
                      position: 'relative',
                      width: '150px',
                      height: '150px',
                    }}
                  >
                    <Image
                      src={item.icons[0].url}
                      alt="Artist Photo"
                      layout="fill"
                      ObjectFit="cover"
                    />
                  </div>

                  <p className={styles.itemTitle}>{item.name}</p>
                </a>
              </li>
            )
          })}
        </ul>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps() {
  const secrets = await getSecrets()

  const categoriesResponce = await fetch(
    'https://api.spotify.com/v1/browse/categories?limit=10&locale=en_gb',
    {
      headers: { Authorization: `Bearer ${secrets.spotify.bearerToken}` },
    }
  )
  const data = await categoriesResponce.json()

  return {
    props: {
      categories: data.categories,
    },
  }
}
