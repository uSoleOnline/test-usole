import Layout from '../components/Layout'
import styles from '../styles/About.module.css'
import Image from 'next/image'
import { Header, Heading, Description, Button } from '../components/Utilities'
import { useRouter } from 'next/router'

function Profile({ name, position, img, children }) {
    return (
        <div className={styles.section} style={{minWidth: '30%', width: '30%'}}>
            <div className={styles.profile}>
                <Image
                    priority
                    width={250}
                    height={500}
                    src={img}
                    alt={name}
                    style={{width: '100%', objectFit: 'cover'}}
                />
            </div>
            <p className={styles.name}>{name}</p>
            <p className={styles.position}>{position}</p>
            <p className={styles.description}>{children}</p>
        </div>
    )
}

function AboutUs() {
    const router = useRouter()
    const newstyle = {
        paddingTop: '0px',
        marginTop: '-75px'
    }
    return (
        <Layout title='About Us'>
            <div>About us</div>
        </Layout>
    )
}

export default AboutUs
