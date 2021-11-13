import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'A-aron'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div><a href="https://github.com/elliotkoss/nft-video-access" target="_blank" ><Image src="/images/github-button.svg" width="91" height="51" /></a></div>
        <div>Built by</div>
        <div>Elliot Koss, Shaquil Hansford, Jordan Green,<br /> Aaron Surty, and Marcus Oshodi</div>
        <div className={styles.nftAgreement}>Our NFT Agreement</div>
      </footer>
    </div>
  )
}
