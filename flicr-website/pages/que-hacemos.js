import Head from 'next/head' 
import styles from '../styles/Home.module.css'
import SiteQueHacemos from '../components/SiteQueHacemos/SiteQueHacemos'

export default function Home() {
  return (
    <div className={styles.container}>
    
<SiteQueHacemos/>
    </div>
  )
}
