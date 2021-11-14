import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout.js'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts.js'
import Link from 'next/link'
import Date from '../components/date.js'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <a><div>1. Connect your wallet</div></a>
        <div>2. Watch livestream</div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <button>
          Connect Wallet
        </button>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
