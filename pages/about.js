import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About page</title>
        <meta name="description" content="Find out now." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="What&#039;s Your Home Worth In Today&#039;s Market?"
        />
        <meta property="og:description" content="Find out now." />
        <meta
          property="og:url"
          content="https://brebuat.bestrealestateblog.com/home/"
        />
        <meta property="og:site_name" content="The Best Real Estate Blog" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/lightersideofrealestate/"
        />
        <meta
          property="article:modified_time"
          content="2017-05-16T02:53:43+00:00"
        />
        <meta
          property="og:image"
          content="https://brebuat.bestrealestateblog.com/wp-content/uploads/2016/10/home-worth.jpg"
        />
        <meta property="og:image:width" content="700" />
        <meta property="og:image:height" content="366" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="What&#039;s Your Home Worth In Today&#039;s Market?"
        />
        <meta name="twitter:description" content="Find out now." />
        <meta
          name="twitter:image"
          content="https://brebuat.bestrealestateblog.com/wp-content/uploads/2016/10/home-worth.jpg"
        />
        <meta name="twitter:site" content="@lightersideofre" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js about page!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
