import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'

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

  const router = useRouter();

  const showEvent = (e) => {
    e.preventDefault();
    router.push('/streams/0d6foz59s7i0l8zx');
  }

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
      {(locked === "locked") && (
        <div>
          <section
            className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
          >
            <button className="btn btn-blue" onClick={checkout}>Connect Wallets</button>
          </section>
        </div>
      )}
      {(locked === "unlocked") && (
        <section
          className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
        >
          <button className="btn btn-blue" onClick={showEvent}>
            Enjoy the Event!(click me)
          </button>
        </section>
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
