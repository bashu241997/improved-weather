import Head from 'next/head'
import styles from '../styles/class.module.css'

export default function Custom500() {
    return <>
    <Head>
    <title>Server Error</title>
    </Head>
    <div className={styles.container404}>
<h2 className={styles.Notfound}>
4Server Encountred Error</h2>

</div></>
  }