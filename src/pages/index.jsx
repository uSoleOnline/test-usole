import styles from '@/styles/Home.module.css'
import Layout from '../components/Layout'
import Image from 'next/image'
import { Slider, Header, Heading, Description, Button } from '../components/Utilities'
import { useRouter } from 'next/router'

function Home() {
    const router = useRouter()
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
                <p className={styles.subtitle}>one <span style={{color: '#00C455'}}>eco-friendly</span> shoe sole at a time.</p>
            </div>
            <div className={styles.section}>
                <Header>The product</Header>
                <div className={styles.block}>
                    <div className={styles.blockSection}>
                        <Heading style={{width: '80%'}}>Shoe outsole</Heading>
                        <Description>
                            Purchase a variety of shoe soles designed for specific brand models, all 3D printed using flexible, <span style={{color: '#00C455', textDecoration: 'underline'}}>biodegradable</span> material, and guaranteed to improve performance.
                        </Description>
                    </div>
                    <div className={styles.blockSection}>
                        <Heading style={{width: '80%'}}>Assembly kit</Heading>
                        <Description>
                            Select <span style={{color: '#00C455', textDecoration: 'underline'}}>affordable</span> kits to assemble the soles to your worn-out shoes. Featuring a sanding tool, adhesive, and complementary outsole, it has all you need for success.
                        </Description>
                    </div>
                </div>
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