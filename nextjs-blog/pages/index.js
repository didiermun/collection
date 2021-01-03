import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a software engineer looking forward</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <Link href="posts/first-post">My first post)</Link>
          
        </p>
      </section>
    </Layout>
  )
}