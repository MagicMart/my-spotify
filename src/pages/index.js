import { getSecrets } from '@netlify/functions'
import Head from 'next/head'

import Layout from '@components/Layout'
import Container from '@components/Container'

import styles from '@styles/Home.module.scss'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Home({ bearerToken }) {
  console.log('Home render')
  const token = useRef(bearerToken)
  const [categories, setCategories] = useState(null)
  useEffect(() => {
    fetch(
      'https://api.spotify.com/v1/browse/categories?limit=10&locale=en_gb',
      {
        headers: { Authorization: `Bearer ${token.current}` },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories)
      })
      .catch((err) => console.log(err))
  }, [])
  if (!categories) return null
  return (
    <Layout>
      <Head>
        <title>My Spotify</title>
        <met
          name="description"
          content="Top artists and tracks for the last whatever period of time..."
        />
      </Head>

      <Container>
        <h1 className="sr-only">My Spotify</h1>

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
                      objectFit="cover"
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

  return {
    props: {
      bearerToken: secrets.spotify.bearerToken,
    },
  }
}
