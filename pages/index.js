import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import React, { useEffect, useState } from "react";

export default function Home({ allPostsData }) {
  function setupUnlock() {
    window.unlockSetup();
  }
  const [locked, setLockedKey] = useState("pending");
  const unlockHandler = (e) => {
    console.log("Locked changed to: ", e.detail);
    setLockedKey(e.detail);
  };
  async function checkout() {
    window.unlockProtocol && window.unlockProtocol.loadCheckoutModal();
  }
  useEffect(() => {
    console.log("Use Effect Fired!");
    const loadUnlock = async () => {
      setupUnlock();
      window.addEventListener("unlockProtocol", unlockHandler);
    };
    loadUnlock();

    return () => {
      window.removeEventListener("unlockProtocol", unlockHandler);
    };
  }, []);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <script type="text/javascript" src="/js/unlock.js"></script>
      </Head>
      <section className={utilStyles.headingMd}>
        <a>
          <div>1. Connect your wallet</div>
        </a>
        <div>2. Watch livestream</div>
      </section>
      {locked === "locked" && (
        <div>
          <section
            className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
          >
            <button onClick={checkout}>Connect Wallet</button>
          </section>
        </div>
      )}
      {locked === "unlocked" && (
        <div>
          <Link href="/streams/0d6foz59s7i0l8zx">
            Enjoy the Livestream!(click me)
          </Link>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
