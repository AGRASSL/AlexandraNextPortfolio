import Head from 'next/head'
// import Image from 'next/image'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <Head>
        <title>Alexandra Grassl</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello! I'm <a href="https://www.linkedin.com/in/alexandra-grassl-a61a07126/">Alex!</a>
        </h1>

        <p className={styles.description}>
          Software Engineer, Chicago, Illinois
        </p>

        <div className={styles.grid}>
          <a href="/about-me" className={styles.card}>
            <h2>About Me</h2>
            <p>Learn about my journey from business to sofware development.</p>
          </a>

          <a href="/my-work" className={styles.card}>
            <h2>My Work</h2>
            <p>Deployed projects featuring Next.js, React, Express, MongoDB, and more.</p>
          </a>

          <a
            href="/experience"
            className={styles.card}
          >
            <h2>Experience</h2>
            <p>Explore previous work experience and educational successes.</p>
          </a>

          <a
            href="/contact-me"
            className={styles.card}
          >
            <h2>Contact Me</h2>
            <p>
              Let's connect today.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        > */}<p>
          "Persistent in life? I think yes, I am. I'm going to do something until I get it right." -Giannis Antetokounmpo
          </p>
        {/* </a> */}
      </footer>
    </div>
  )
}
