import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> Hello, I go by Sasha. I am a junior attending Newton North High School. </p>
        <p className={utilStyles.subText}>
          (This is my first time making a website using ReactJS.)
        </p>
        <p><u>Get to know me a bit better by clicking on a few of the links below:</u></p>
      </section>
      <section className={utilStyles.newPage}>
        <p>My {" "}
        <a  href="/posts/hobbies">
          Hobbies
        </a>
        </p>
        <p>My {" "}
        <a  href="/posts/accomplishments">
          Accomplishments/Skills
        </a>
        </p>
      </section>
    </Layout>
  )
}