import styles from "../styles/about.module.css"
import Head from 'next/head'

export default function About() {
    return (
        <div className={styles.container}>
        <Head />
        <div className={styles.main}>
            nugs rocks
        </div>
      </div>

    )
}