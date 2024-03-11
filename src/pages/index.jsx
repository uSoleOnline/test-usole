import styles from '@/styles/Home.module.css'
import Layout from '../components/Layout'
import Image from 'next/image'
import { Section, Slider, Header, Heading, Description, Button } from '../components/Utilities'
import { useRouter } from 'next/router'

function Home() {
    const router = useRouter()
    const newstyle = {
        paddingTop: '0px',
        marginTop: '-75px'
    }
    return (
        <Layout title=''>
            <div style={{position: 'absolute', width: '100%', height: '100%'}}>
                <Image
                    priority
                    width={250}
                    height={500}
                    layout='intrinsic'
                    src='/covers/cover002.jpg'
                    alt='image'
                    style={{width: '100%', objectFit: 'cover', filter: 'brightness(50%)'}}
                />
            </div>
            <div className={styles.cover}>
                <p className={styles.caption}>Our mission</p>
                <p className={styles.title}>Protect the earth</p>
                <p className={styles.subtitle}>one eco-friendly shoe sole at a time.</p>
            </div>
        </Layout>
    )
}

/*
To do list:
- decide website color scheme
- create usole logo
- landing page vs home shopping page
- about us & sustainability page
- category pages w dynamic loading (serversideprops/staticprops)
- login, signup, and customize pages
- create google & github acc
- setup firebase storage, auth, and firestore
- setup github repo and vercel production
*/

export default Home